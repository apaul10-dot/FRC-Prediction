import Header from "@/components/Header";
import ScrollIndicator from "@/components/ScrollIndicator";

const TeamInfo = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-glow-purple rounded-full blur-[150px] opacity-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-glow-purple-dark rounded-full blur-[120px] opacity-10 pointer-events-none" />
      
      <Header />
      <ScrollIndicator />
      
      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="text-primary">TEAM INFO</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              View detailed information about teams and their performance
            </p>
          </div>

          <div className="space-y-8 mt-16">
            {/* Team Database Section */}
            <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-300">
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <span className="text-4xl">👥</span>
                Team Database
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Access comprehensive information about FRC teams worldwide. Search by team number, 
                location, or performance metrics.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="bg-background/50 rounded-lg p-4 border border-border/50">
                  <div className="text-2xl font-bold text-primary">3,847</div>
                  <div className="text-sm text-muted-foreground">Active Teams</div>
                </div>
                <div className="bg-background/50 rounded-lg p-4 border border-border/50">
                  <div className="text-2xl font-bold text-primary">67</div>
                  <div className="text-sm text-muted-foreground">Countries</div>
                </div>
              </div>
            </div>

            {/* Team Profiles Section */}
            <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-300">
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <span className="text-4xl">🏆</span>
                Team Profiles
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Detailed profiles for each team including robot specifications, match history, 
                awards, and performance statistics.
              </p>
              
              {/* Sample Team Profile */}
              <div className="bg-gradient-to-br from-primary/10 to-transparent rounded-lg p-6 border border-primary/20 mt-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold">Team 1234</h3>
                    <p className="text-muted-foreground">The Cyber Hawks</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">Season Rank</div>
                    <div className="text-2xl font-bold text-primary">#47</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                  <div>
                    <div className="text-sm text-muted-foreground">Wins</div>
                    <div className="text-xl font-bold">34</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Losses</div>
                    <div className="text-xl font-bold">12</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Avg Score</div>
                    <div className="text-xl font-bold">142</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Awards</div>
                    <div className="text-xl font-bold">7</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Metrics Section */}
            <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-300">
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <span className="text-4xl">📊</span>
                Performance Metrics
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Compare teams using advanced performance metrics and statistics. Track improvements 
                over time and identify top performers.
              </p>
              
              <div className="space-y-4 mt-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">Offensive Power Rating</span>
                    <span className="text-sm text-primary">8.7/10</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "87%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">Defensive Capability</span>
                    <span className="text-sm text-primary">7.2/10</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "72%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">Consistency Score</span>
                    <span className="text-sm text-primary">9.1/10</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "91%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">Driver Skill Rating</span>
                    <span className="text-sm text-primary">8.4/10</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "84%" }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Matches Section */}
            <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-300">
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <span className="text-4xl">⚡</span>
                Recent Matches
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                View recent match results and detailed game breakdowns for any team.
              </p>
              
              <div className="space-y-3 mt-6">
                <div className="bg-background/50 rounded-lg p-4 border border-border/50 flex justify-between items-center">
                  <div>
                    <div className="font-semibold">Qual Match 34</div>
                    <div className="text-sm text-muted-foreground">vs Teams 5678, 9012</div>
                  </div>
                  <div className="text-right">
                    <div className="text-primary font-bold">WIN</div>
                    <div className="text-sm text-muted-foreground">145-132</div>
                  </div>
                </div>
                <div className="bg-background/50 rounded-lg p-4 border border-border/50 flex justify-between items-center">
                  <div>
                    <div className="font-semibold">Qual Match 27</div>
                    <div className="text-sm text-muted-foreground">vs Teams 3456, 7890</div>
                  </div>
                  <div className="text-right">
                    <div className="text-primary font-bold">WIN</div>
                    <div className="text-sm text-muted-foreground">138-124</div>
                  </div>
                </div>
                <div className="bg-background/50 rounded-lg p-4 border border-border/50 flex justify-between items-center">
                  <div>
                    <div className="font-semibold">Qual Match 19</div>
                    <div className="text-sm text-muted-foreground">vs Teams 2468, 1357</div>
                  </div>
                  <div className="text-right">
                    <div className="text-destructive font-bold">LOSS</div>
                    <div className="text-sm text-muted-foreground">118-142</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TeamInfo;
