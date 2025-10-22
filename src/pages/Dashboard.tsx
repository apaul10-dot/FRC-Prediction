import Header from "@/components/Header";
import ScrollIndicator from "@/components/ScrollIndicator";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-glow-purple rounded-full blur-[150px] opacity-15 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-glow-purple-dark rounded-full blur-[120px] opacity-10 pointer-events-none" />
      
      <Header />
      <ScrollIndicator />
      
      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="text-center space-y-8">
          <h2 className="text-5xl md:text-7xl font-bold">
            <span className="text-primary">DASHBOARD</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Access your FRC game analytics, team strategies, and AI-powered predictions
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-w-6xl mx-auto">
            {/* Strategy Card */}
            <div 
              className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 hover:shadow-glow-sm cursor-pointer"
              onClick={() => navigate("/strategy")}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">📊</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Strategy</h3>
              <p className="text-muted-foreground">
                Plan and optimize your game strategies with advanced analytics
              </p>
            </div>

            {/* AI Predictor Card */}
            <div 
              className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 hover:shadow-glow-sm cursor-pointer"
              onClick={() => navigate("/ai-predictor")}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">🤖</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">AI Predictor</h3>
              <p className="text-muted-foreground">
                Get AI-powered predictions for game outcomes and strategies
              </p>
            </div>

            {/* Team Info Card */}
            <div 
              className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 hover:shadow-glow-sm cursor-pointer"
              onClick={() => navigate("/team-info")}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">👥</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Team Info</h3>
              <p className="text-muted-foreground">
                View detailed information about teams and their performance
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
