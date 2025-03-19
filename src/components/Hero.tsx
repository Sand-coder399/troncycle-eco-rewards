
import { ChevronDown, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Noise overlay */}
      <div className="absolute inset-0 noise-bg"></div>
      
      {/* Blue gradient circle */}
      <div className={`absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-tron-blue/20 blur-[100px] transition-opacity duration-1000 ${isLoaded ? 'opacity-70' : 'opacity-0'}`}></div>
      
      {/* Green gradient circle */}
      <div className={`absolute bottom-1/4 left-1/3 w-[400px] h-[400px] rounded-full bg-tron-green/20 blur-[100px] transition-opacity duration-1000 delay-300 ${isLoaded ? 'opacity-70' : 'opacity-0'}`}></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
          <div className={`max-w-xl transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-tron-green/10 text-tron-green font-medium text-sm mb-6">
              <Zap className="h-4 w-4" />
              <span>Eco-Friendly Technology</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Ride, Generate, <span className="highlight-text">Earn Rewards</span>
            </h1>
            
            <p className="text-lg text-tron-gray mb-8">
              Discover TronCycles' revolutionary bikes that convert your pedal power into clean electricity. Earn rewards while reducing your carbon footprint.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-tron-blue hover:bg-tron-blue-dark text-white text-md px-8 py-6">
                Rent a Bike
              </Button>
              <Button variant="outline" className="border-tron-blue text-tron-blue hover:bg-tron-blue/10 text-md px-8 py-6">
                Browse Collection
              </Button>
            </div>
          </div>
          
          <div className={`relative transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="relative w-[280px] md:w-[420px] aspect-square rounded-full bg-gradient-to-b from-tron-blue-light/30 to-transparent p-2 animate-pulse-soft">
              <div className="w-full h-full rounded-full overflow-hidden bg-white/30 backdrop-blur-sm flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="TronCycle Electric Bike" 
                  className="w-[85%] h-[85%] object-contain animate-float"
                />
              </div>
            </div>
            
            {/* Electric energy effects */}
            <div className="absolute top-1/4 left-1/4 w-2 h-10 bg-tron-green/60 blur-sm animate-pulse-soft"></div>
            <div className="absolute bottom-1/3 right-1/4 w-2 h-6 bg-tron-green/60 blur-sm animate-pulse-soft delay-150"></div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-sm text-tron-gray mb-2">Scroll to explore</span>
          <ChevronDown className="h-6 w-6 text-tron-gray" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
