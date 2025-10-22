import Header from "@/components/Header";
import ScrollIndicator from "@/components/ScrollIndicator";

const Strategy = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-glow-purple rounded-full blur-[150px] opacity-10 pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-glow-purple-dark rounded-full blur-[120px] opacity-10 pointer-events-none" />
      
      <Header />
      <ScrollIndicator />
      
      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="text-primary">STRATEGY</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Plan and optimize your game strategies with advanced analytics
            </p>
          </div>

          <div className="space-y-8 mt-16">
            {/* Game Analysis Section */}
            <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-300">
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <span className="text-4xl">📊</span>
                Game Analysis
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Analyze past games and identify patterns to improve future performance. 
                Our advanced analytics engine processes thousands of data points to give you actionable insights.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="bg-background/50 rounded-lg p-4 border border-border/50">
                  <div className="text-2xl font-bold text-primary">95%</div>
                  <div className="text-sm text-muted-foreground">Win Rate Analysis</div>
                </div>
                <div className="bg-background/50 rounded-lg p-4 border border-border/50">
                  <div className="text-2xl font-bold text-primary">1,247</div>
                  <div className="text-sm text-muted-foreground">Games Analyzed</div>
                </div>
                <div className="bg-background/50 rounded-lg p-4 border border-border/50">
                  <div className="text-2xl font-bold text-primary">87%</div>
                  <div className="text-sm text-muted-foreground">Prediction Accuracy</div>
                </div>
              </div>
            </div>

            {/* Match Planning Section */}
            <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-300">
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <span className="text-4xl">🎯</span>
                Match Planning
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Create detailed match plans and strategies tailored to your team's strengths 
                and your opponent's weaknesses. Collaborate with your team in real-time.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Custom strategy templates for different game modes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Real-time collaboration with team members</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Opponent analysis and counter-strategy suggestions</span>
                </li>
              </ul>
            </div>

            {/* Performance Optimization Section */}
            <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-300">
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <span className="text-4xl">⚡</span>
                Performance Optimization
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Identify areas for improvement and optimize your robot's performance. 
                Track metrics over time and measure the impact of strategy changes.
              </p>
              <div className="bg-background/30 rounded-lg p-6 border border-border/50 mt-6">
                <h3 className="text-xl font-semibold mb-4">Key Optimization Areas</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm">Autonomous Efficiency</span>
                      <span className="text-sm text-primary">92%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "92%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm">Teleop Scoring</span>
                      <span className="text-sm text-primary">85%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm">Defense Strategy</span>
                      <span className="text-sm text-primary">78%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "78%" }}></div>
                    </div>
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

export default Strategy;
