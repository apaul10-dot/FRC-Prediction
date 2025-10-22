import Header from "@/components/Header";
import ScrollIndicator from "@/components/ScrollIndicator";

const AIPredictor = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-glow-purple rounded-full blur-[150px] opacity-10 pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-glow-purple-dark rounded-full blur-[120px] opacity-10 pointer-events-none" />
      
      <Header />
      <ScrollIndicator />
      
      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="text-primary">AI PREDICTOR</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Get AI-powered predictions for game outcomes and strategies
            </p>
          </div>

          <div className="space-y-8 mt-16">
            {/* Match Predictions Section */}
            <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-300">
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <span className="text-4xl">🤖</span>
                Match Predictions
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our AI model analyzes historical data, team performance, and current conditions 
                to predict match outcomes with high accuracy.
              </p>
              <div className="bg-gradient-to-br from-primary/10 to-transparent rounded-lg p-6 border border-primary/20 mt-6">
                <h3 className="text-xl font-semibold mb-4">Upcoming Match Prediction</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <div className="text-sm text-muted-foreground">Red Alliance</div>
                    <div className="text-3xl font-bold text-destructive">Team 1234</div>
                    <div className="text-sm">Win Probability: <span className="text-destructive font-semibold">45%</span></div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm text-muted-foreground">Blue Alliance</div>
                    <div className="text-3xl font-bold text-primary">Team 5678</div>
                    <div className="text-sm">Win Probability: <span className="text-primary font-semibold">55%</span></div>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Insights Section */}
            <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-300">
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <span className="text-4xl">💡</span>
                AI-Generated Insights
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Machine learning algorithms continuously analyze game patterns to provide 
                strategic insights and recommendations.
              </p>
              <div className="space-y-4 mt-6">
                <div className="bg-background/50 rounded-lg p-4 border border-primary/20">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🎯</span>
                    <div>
                      <h4 className="font-semibold mb-1">Optimal Starting Position</h4>
                      <p className="text-sm text-muted-foreground">
                        Based on your team's strengths, starting from position B3 increases 
                        autonomous success rate by 23%
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-background/50 rounded-lg p-4 border border-primary/20">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">⚡</span>
                    <div>
                      <h4 className="font-semibold mb-1">Scoring Efficiency</h4>
                      <p className="text-sm text-muted-foreground">
                        Focus on upper hub shots during teleop for 15% higher point average 
                        compared to lower hub
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-background/50 rounded-lg p-4 border border-primary/20">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🛡️</span>
                    <div>
                      <h4 className="font-semibold mb-1">Defense Strategy</h4>
                      <p className="text-sm text-muted-foreground">
                        AI recommends zone defense in quadrant 2 based on opponent's 
                        historical movement patterns
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Model Performance Section */}
            <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-300">
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <span className="text-4xl">📈</span>
                Model Performance
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our AI model is continuously trained on the latest FRC data to improve 
                prediction accuracy and provide better insights.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="bg-background/50 rounded-lg p-4 border border-border/50 text-center">
                  <div className="text-3xl font-bold text-primary">89.7%</div>
                  <div className="text-sm text-muted-foreground mt-1">Overall Accuracy</div>
                </div>
                <div className="bg-background/50 rounded-lg p-4 border border-border/50 text-center">
                  <div className="text-3xl font-bold text-primary">12,450</div>
                  <div className="text-sm text-muted-foreground mt-1">Matches Trained</div>
                </div>
                <div className="bg-background/50 rounded-lg p-4 border border-border/50 text-center">
                  <div className="text-3xl font-bold text-primary">v4.2</div>
                  <div className="text-sm text-muted-foreground mt-1">Model Version</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AIPredictor;
