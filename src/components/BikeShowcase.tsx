
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Zap } from 'lucide-react';

const bikes = [
  {
    id: 1,
    name: "TronCycle Ultra",
    type: "Premium",
    energyCapacity: "1.2 kWh",
    range: "120 km",
    imageSrc: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "$89/day",
    isForSale: true,
    salePrice: "$2,499"
  },
  {
    id: 2,
    name: "TronCycle Sport",
    type: "Racing",
    energyCapacity: "0.9 kWh",
    range: "100 km",
    imageSrc: "https://images.unsplash.com/photo-1565967511849-76a60a516170?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "$75/day",
    isForSale: true,
    salePrice: "$1,999"
  },
  {
    id: 3,
    name: "TronCycle City",
    type: "Urban",
    energyCapacity: "0.7 kWh",
    range: "80 km",
    imageSrc: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "$59/day",
    isForSale: true,
    salePrice: "$1,699"
  },
  {
    id: 4,
    name: "TronCycle Lite",
    type: "Casual",
    energyCapacity: "0.5 kWh",
    range: "60 km",
    imageSrc: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "$49/day",
    isForSale: false
  }
];

const BikeShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [visibleSection, setVisibleSection] = useState(false);

  const handleNext = () => {
    if (animating) return;
    setAnimating(true);
    setActiveIndex((prev) => (prev === bikes.length - 1 ? 0 : prev + 1));
    setTimeout(() => setAnimating(false), 500);
  };

  const handlePrev = () => {
    if (animating) return;
    setAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? bikes.length - 1 : prev - 1));
    setTimeout(() => setAnimating(false), 500);
  };

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('bikes');
      if (!element) return;
      
      const rect = element.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom >= 0;
      
      if (isVisible) {
        setVisibleSection(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeBike = bikes[activeIndex];

  return (
    <section id="bikes" className="py-24 relative overflow-hidden bg-tron-gray-light">
      <div className="absolute inset-0 noise-bg"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${visibleSection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-tron-blue/10 text-tron-blue font-medium text-sm mb-6">
            <Zap className="h-4 w-4" />
            <span>Our Collection</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Discover Our Eco-Friendly Bikes</h2>
          <p className="text-lg text-tron-gray">
            Premium electric bikes that convert your pedal power into usable energy. 
            Available for rent or purchase, our fleet offers something for every rider.
          </p>
        </div>
        
        <div className={`relative transition-all duration-1000 delay-300 ${visibleSection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="w-full lg:w-1/2 relative">
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-b from-tron-blue-light/30 to-tron-green-light/30 rounded-full blur-xl animate-pulse-soft"></div>
                <div className="relative w-full h-full glass-card rounded-lg overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 w-full h-full">
                    <img 
                      src={activeBike.imageSrc} 
                      alt={activeBike.name} 
                      className={`w-full h-full object-cover transition-all duration-500 ease-out ${animating ? 'scale-110 opacity-0' : 'scale-100 opacity-100'}`}
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm p-4 text-white">
                    <h3 className="text-xl font-bold">{activeBike.name}</h3>
                    <p className="text-sm">{activeBike.type}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-center mt-8 space-x-4">
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={handlePrev} 
                  className="rounded-full border-tron-blue text-tron-blue hover:bg-tron-blue/10"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <div className="flex space-x-2">
                  {bikes.map((_, index) => (
                    <div 
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === activeIndex ? 'bg-tron-blue w-6' : 'bg-tron-gray'
                      }`}
                      onClick={() => setActiveIndex(index)}
                    ></div>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={handleNext}
                  className="rounded-full border-tron-blue text-tron-blue hover:bg-tron-blue/10"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">{activeBike.name}</h3>
                <p className="text-tron-gray mb-6">
                  Experience the perfect blend of performance and eco-friendly technology with the {activeBike.name}.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-tron-gray-light rounded-lg p-4">
                    <p className="text-sm text-tron-gray mb-1">Energy Capacity</p>
                    <p className="text-lg font-semibold">{activeBike.energyCapacity}</p>
                  </div>
                  <div className="bg-tron-gray-light rounded-lg p-4">
                    <p className="text-sm text-tron-gray mb-1">Range</p>
                    <p className="text-lg font-semibold">{activeBike.range}</p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
                  <div className="flex-1 w-full">
                    <p className="text-sm text-tron-gray mb-1">Rental Price</p>
                    <p className="text-xl font-bold text-tron-blue">{activeBike.price}</p>
                  </div>
                  {activeBike.isForSale && (
                    <div className="flex-1 w-full">
                      <p className="text-sm text-tron-gray mb-1">Purchase Price</p>
                      <p className="text-xl font-bold text-tron-green">{activeBike.salePrice}</p>
                    </div>
                  )}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="flex-1 bg-tron-blue hover:bg-tron-blue-dark text-white">
                    Rent Now
                  </Button>
                  {activeBike.isForSale && (
                    <Button variant="outline" className="flex-1 border-tron-green text-tron-green hover:bg-tron-green/10">
                      Buy
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BikeShowcase;
