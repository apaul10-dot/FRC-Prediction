import { useState } from "react";
import Header from "@/components/Header";
import ScrollIndicator from "@/components/ScrollIndicator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Trophy, TrendingUp, Shield, Zap, Target, Award } from "lucide-react";
import { toast } from "sonner";

interface TeamStats {
  teamNumber: string;
  teamName: string;
  location: string;
  opr: number;
  dpr: number;
  ccwm: number;
  avgAutoPoints: number;
  avgTeleopPoints: number;
  avgEndgamePoints: number;
  matchesPlayed: number;
  error?: string;
}

interface Prediction {
  redScore: number;
  blueScore: number;
  redWinProbability: number;
  blueWinProbability: number;
}

const MatchPredictor = () => {
  const [eventKey, setEventKey] = useState("2024cmptx");
  const [redTeams, setRedTeams] = useState(["", "", ""]);
  const [blueTeams, setBlueTeams] = useState(["", "", ""]);
  const [redStats, setRedStats] = useState<TeamStats[]>([]);
  const [blueStats, setBlueStats] = useState<TeamStats[]>([]);
  const [prediction, setPrediction] = useState<Prediction | null>(null);
  const [loading, setLoading] = useState(false);

  const handleTeamChange = (alliance: 'red' | 'blue', index: number, value: string) => {
    const teams = alliance === 'red' ? [...redTeams] : [...blueTeams];
    teams[index] = value;
    alliance === 'red' ? setRedTeams(teams) : setBlueTeams(teams);
  };

  const calculatePrediction = (redTeams: TeamStats[], blueTeams: TeamStats[]): Prediction => {
    // Calculate predicted scores using OPR (which represents expected contribution to alliance score)
    const redScore = redTeams.reduce((sum, team) => sum + team.opr, 0);
    const blueScore = blueTeams.reduce((sum, team) => sum + team.opr, 0);

    // Calculate win probability using score difference
    const scoreDiff = redScore - blueScore;
    const redWinProbability = 1 / (1 + Math.exp(-scoreDiff / 25)) * 100;
    const blueWinProbability = 100 - redWinProbability;

    return {
      redScore: Math.round(redScore),
      blueScore: Math.round(blueScore),
      redWinProbability: Math.round(redWinProbability * 10) / 10,
      blueWinProbability: Math.round(blueWinProbability * 10) / 10,
    };
  };

  const fetchStats = async () => {
    const allRedTeams = redTeams.filter(t => t.trim());
    const allBlueTeams = blueTeams.filter(t => t.trim());

    if (allRedTeams.length === 0 || allBlueTeams.length === 0) {
      toast.error("Please enter teams for both alliances");
      return;
    }

    setLoading(true);
    setPrediction(null);

    try {
      const [redResponse, blueResponse] = await Promise.all([
        fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/fetch-team-stats`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
          },
          body: JSON.stringify({ teamNumbers: allRedTeams, event: eventKey }),
        }),
        fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/fetch-team-stats`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
          },
          body: JSON.stringify({ teamNumbers: allBlueTeams, event: eventKey }),
        }),
      ]);

      if (!redResponse.ok || !blueResponse.ok) {
        throw new Error('Failed to fetch team stats');
      }

      const redData = await redResponse.json();
      const blueData = await blueResponse.json();

      setRedStats(redData.teamStats);
      setBlueStats(blueData.teamStats);

      // Calculate prediction
      const pred = calculatePrediction(redData.teamStats, blueData.teamStats);
      setPrediction(pred);

      toast.success("Match analysis complete!");
    } catch (error: any) {
      console.error('Error fetching stats:', error);
      toast.error(error.message || "Failed to fetch team stats");
    } finally {
      setLoading(false);
    }
  };

  const renderTeamStats = (stats: TeamStats[], color: 'red' | 'blue') => {
    if (stats.length === 0) return null;

    return (
      <div className="space-y-4">
        {stats.map((team, idx) => (
          <Card key={idx} className={`p-6 border-2 ${color === 'red' ? 'border-red-500/30 bg-red-500/5' : 'border-blue-500/30 bg-blue-500/5'}`}>
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-foreground">{team.teamName}</h3>
                <p className="text-sm text-muted-foreground">Team {team.teamNumber}</p>
                {team.location && <p className="text-xs text-muted-foreground mt-1">{team.location}</p>}
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-primary">{team.opr.toFixed(1)}</div>
                <div className="text-xs text-muted-foreground">OPR</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">Defense</span>
                </div>
                <div className="text-lg font-bold">{team.dpr.toFixed(1)}</div>
                <div className="text-xs text-muted-foreground">DPR</div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">Contribution</span>
                </div>
                <div className="text-lg font-bold">{team.ccwm.toFixed(1)}</div>
                <div className="text-xs text-muted-foreground">CCWM</div>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="flex items-center gap-1">
                    <Zap className="w-3 h-3" />
                    Auto Points
                  </span>
                  <span className="font-semibold">{team.avgAutoPoints.toFixed(1)}</span>
                </div>
                <Progress value={(team.avgAutoPoints / 30) * 100} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="flex items-center gap-1">
                    <Target className="w-3 h-3" />
                    Teleop Points
                  </span>
                  <span className="font-semibold">{team.avgTeleopPoints.toFixed(1)}</span>
                </div>
                <Progress value={(team.avgTeleopPoints / 100) * 100} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="flex items-center gap-1">
                    <Award className="w-3 h-3" />
                    Endgame Points
                  </span>
                  <span className="font-semibold">{team.avgEndgamePoints.toFixed(1)}</span>
                </div>
                <Progress value={(team.avgEndgamePoints / 30) * 100} className="h-2" />
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-border text-xs text-muted-foreground">
              {team.matchesPlayed} matches played
            </div>
          </Card>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      <Header />
      <ScrollIndicator />

      <main className="relative container mx-auto px-4 py-24">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            MATCH PREDICTOR
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Predict match outcomes using live FRC data from The Blue Alliance
          </p>
        </div>

        <Card className="max-w-4xl mx-auto p-8 mb-8">
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Event Key</label>
            <Input
              value={eventKey}
              onChange={(e) => setEventKey(e.target.value)}
              placeholder="e.g., 2024cmptx"
              className="max-w-xs"
            />
            <p className="text-xs text-muted-foreground mt-1">
              Find event keys at thebluealliance.com (format: YYYYeventcode)
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-6">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-red-500 flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-red-500" />
                Red Alliance
              </h3>
              {redTeams.map((team, idx) => (
                <Input
                  key={idx}
                  value={team}
                  onChange={(e) => handleTeamChange('red', idx, e.target.value)}
                  placeholder={`Team ${idx + 1} number`}
                  className="mb-2"
                  type="number"
                />
              ))}
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-500 flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-blue-500" />
                Blue Alliance
              </h3>
              {blueTeams.map((team, idx) => (
                <Input
                  key={idx}
                  value={team}
                  onChange={(e) => handleTeamChange('blue', idx, e.target.value)}
                  placeholder={`Team ${idx + 1} number`}
                  className="mb-2"
                  type="number"
                />
              ))}
            </div>
          </div>

          <Button
            onClick={fetchStats}
            disabled={loading}
            className="w-full"
            size="lg"
          >
            {loading ? "Analyzing..." : "Predict Match Outcome"}
          </Button>
        </Card>

        {prediction && (
          <Card className="max-w-4xl mx-auto p-8 mb-8 bg-gradient-to-br from-primary/10 to-accent/10">
            <h2 className="text-2xl font-bold mb-6 text-center flex items-center justify-center gap-2">
              <Trophy className="w-6 h-6 text-primary" />
              Match Prediction
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="text-center">
                <div className="text-6xl font-bold text-red-500 mb-2">{prediction.redScore}</div>
                <div className="text-sm text-muted-foreground mb-4">Predicted Score</div>
                <div className="text-3xl font-bold text-red-500">{prediction.redWinProbability}%</div>
                <div className="text-sm text-muted-foreground">Win Probability</div>
              </div>

              <div className="text-center">
                <div className="text-6xl font-bold text-blue-500 mb-2">{prediction.blueScore}</div>
                <div className="text-sm text-muted-foreground mb-4">Predicted Score</div>
                <div className="text-3xl font-bold text-blue-500">{prediction.blueWinProbability}%</div>
                <div className="text-sm text-muted-foreground">Win Probability</div>
              </div>
            </div>

            <div className="h-8 rounded-full overflow-hidden flex">
              <div
                className="bg-red-500 flex items-center justify-center text-white font-semibold text-sm"
                style={{ width: `${prediction.redWinProbability}%` }}
              >
                {prediction.redWinProbability > 20 && `${prediction.redWinProbability}%`}
              </div>
              <div
                className="bg-blue-500 flex items-center justify-center text-white font-semibold text-sm"
                style={{ width: `${prediction.blueWinProbability}%` }}
              >
                {prediction.blueWinProbability > 20 && `${prediction.blueWinProbability}%`}
              </div>
            </div>
          </Card>
        )}

        {(redStats.length > 0 || blueStats.length > 0) && (
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-red-500">Red Alliance Stats</h2>
              {renderTeamStats(redStats, 'red')}
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6 text-blue-500">Blue Alliance Stats</h2>
              {renderTeamStats(blueStats, 'blue')}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default MatchPredictor;
