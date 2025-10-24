import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { teamNumbers, event } = await req.json();
    console.log('Fetching stats for teams:', teamNumbers, 'at event:', event);

    const TBA_API_KEY = Deno.env.get('TBA_API_KEY');
    if (!TBA_API_KEY) {
      throw new Error('TBA_API_KEY not configured');
    }

    const headers = {
      'X-TBA-Auth-Key': TBA_API_KEY,
      'Accept': 'application/json',
    };

    // Fetch team stats for all teams
    const teamStatsPromises = teamNumbers.map(async (teamNumber: string) => {
      try {
        // Get team's OPR, DPR, CCWM for the event
        const eventStatsUrl = `https://www.thebluealliance.com/api/v3/event/${event}/oprs`;
        const eventStatsRes = await fetch(eventStatsUrl, { headers });
        
        if (!eventStatsRes.ok) {
          console.error(`Failed to fetch event stats: ${eventStatsRes.status}`);
          throw new Error(`Failed to fetch event stats for team ${teamNumber}`);
        }

        const eventStats = await eventStatsRes.json();
        const teamKey = `frc${teamNumber}`;

        // Get team basic info
        const teamInfoUrl = `https://www.thebluealliance.com/api/v3/team/frc${teamNumber}`;
        const teamInfoRes = await fetch(teamInfoUrl, { headers });
        
        let teamInfo = { nickname: `Team ${teamNumber}`, city: '', state_prov: '', country: '' };
        if (teamInfoRes.ok) {
          teamInfo = await teamInfoRes.json();
        }

        // Get team's matches at this event to calculate auto, teleop, and endgame points
        const matchesUrl = `https://www.thebluealliance.com/api/v3/team/frc${teamNumber}/event/${event}/matches`;
        const matchesRes = await fetch(matchesUrl, { headers });
        
        let autoPoints = 0;
        let teleopPoints = 0;
        let endgamePoints = 0;
        let matchCount = 0;

        if (matchesRes.ok) {
          const matches = await matchesRes.json();
          
          // Only count completed qualification matches
          const completedMatches = matches.filter((m: any) => 
            m.comp_level === 'qm' && m.score_breakdown
          );

          completedMatches.forEach((match: any) => {
            const isRed = match.alliances.red.team_keys.includes(teamKey);
            const alliance = isRed ? 'red' : 'blue';
            const breakdown = match.score_breakdown?.[alliance];

            if (breakdown) {
              // 2025 REEFSCAPE scoring - using actual total fields from API
              // Then calculate individual contributions via game piece tracking
              const totalAutoPoints = breakdown.autoPoints || 0;
              const totalTeleopPoints = breakdown.teleopPoints || 0;
              const totalEndgamePoints = breakdown.endGameBargeTotalPoints || breakdown.endgamePoints || 0;
              
              autoPoints += totalAutoPoints;
              teleopPoints += totalTeleopPoints;
              endgamePoints += totalEndgamePoints;
              
              matchCount++;
              
              // Log first match breakdown for debugging
              if (matchCount === 1) {
                console.log('Sample breakdown for team:', teamNumber, JSON.stringify(breakdown, null, 2));
              }
            }
          });
        }

        return {
          teamNumber,
          teamName: teamInfo.nickname,
          location: `${teamInfo.city}, ${teamInfo.state_prov}, ${teamInfo.country}`.replace(/, ,/g, ',').trim(),
          opr: eventStats.oprs?.[teamKey] || 0,
          dpr: eventStats.dprs?.[teamKey] || 0,
          ccwm: eventStats.ccwms?.[teamKey] || 0,
          avgAutoPoints: matchCount > 0 ? autoPoints / matchCount : 0,
          avgTeleopPoints: matchCount > 0 ? teleopPoints / matchCount : 0,
          avgEndgamePoints: matchCount > 0 ? endgamePoints / matchCount : 0,
          matchesPlayed: matchCount,
        };
      } catch (error: any) {
        console.error(`Error fetching stats for team ${teamNumber}:`, error);
        return {
          teamNumber,
          teamName: `Team ${teamNumber}`,
          location: 'Unknown',
          opr: 0,
          dpr: 0,
          ccwm: 0,
          avgAutoPoints: 0,
          avgTeleopPoints: 0,
          avgEndgamePoints: 0,
          matchesPlayed: 0,
          error: error.message,
        };
      }
    });

    const teamStats = await Promise.all(teamStatsPromises);

    return new Response(JSON.stringify({ teamStats }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    console.error('Error in fetch-team-stats:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
