import { useState, useEffect } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const ScrollIndicator = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      
      setShowScrollTop(scrollTop > 300);
      setShowScrollDown(scrollTop + clientHeight < scrollHeight - 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
  };

  return (
    <div className="fixed right-6 bottom-6 flex flex-col gap-2 z-40">
      {showScrollTop && (
        <Button
          variant="hero"
          size="icon"
          onClick={scrollToTop}
          className="rounded-full shadow-glow-sm animate-fade-in"
        >
          <ChevronUp className="w-5 h-5" />
        </Button>
      )}
      {showScrollDown && (
        <Button
          variant="hero"
          size="icon"
          onClick={scrollToBottom}
          className="rounded-full shadow-glow-sm animate-fade-in"
        >
          <ChevronDown className="w-5 h-5" />
        </Button>
      )}
    </div>
  );
};

export default ScrollIndicator;
