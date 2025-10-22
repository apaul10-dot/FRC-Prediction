import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isLanding = location.pathname === "/";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6">
      <div className="container mx-auto flex items-center justify-between">
        <div 
          className="flex items-center gap-3 cursor-pointer" 
          onClick={() => navigate("/")}
        >
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-glow-purple-dark rounded-lg flex items-center justify-center shadow-glow-sm">
            <span className="text-2xl font-bold">AI</span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight">ROBODATA</h1>
        </div>

        {isLanding ? (
          <div className="flex gap-4">
            <Button variant="hero" size="lg" onClick={() => navigate("/dashboard")}>
              Login
            </Button>
            <Button variant="hero" size="lg">
              Sign Up
            </Button>
          </div>
        ) : (
          <div className="flex gap-3 flex-wrap">
            <Button variant="nav" size="default" onClick={() => navigate("/dashboard")}>
              Dashboard
            </Button>
            <Button variant="nav" size="default">
              Strategy
            </Button>
            <Button variant="nav" size="default">
              AI Predictor
            </Button>
            <Button variant="nav" size="default">
              Team Info
            </Button>
            <Button variant="nav" size="default" onClick={() => navigate("/")}>
              Log Out
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
