import Header from "@/components/Header";
import ScrollIndicator from "@/components/ScrollIndicator";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-glow-purple rounded-full blur-[200px] opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-glow-purple-dark rounded-full blur-[150px] opacity-15 pointer-events-none" />
      
      <Header />
      <ScrollIndicator />
      
      <main className="container mx-auto px-6 flex items-center justify-center min-h-screen">
        <div className="text-center space-y-8 -mt-20">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-none tracking-tight">
            <span className="text-primary block mb-4">FRC GAME</span>
            <span className="text-foreground">PREDICTION</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Powered by advanced AI technology for FIRST Robotics Competition
          </p>
        </div>
      </main>
    </div>
  );
};

export default Index;
