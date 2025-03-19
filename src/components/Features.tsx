
import { Battery, Leaf, Recycle, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';

const features = [
  {
    icon: <Zap className="h-10 w-10 text-tron-blue mb-4" />,
    title: "Energy Generation",
    description: "Our bikes convert your pedaling energy into usable electricity, stored in efficient batteries."
  },
  {
    icon: <Leaf className="h-10 w-10 text-tron-green mb-4" />,
    title: "Eco-Friendly",
    description: "Zero emissions and sustainable materials make our bikes the perfect choice for eco-conscious riders."
  },
  {
    icon: <Recycle className="h-10 w-10 text-tron-blue mb-4" />,
    title: "Rewarding System",
    description: "Earn points for every kWh generated, redeem for discounts on rentals and purchases."
  },
  {
    icon: <Battery className="h-10 w-10 text-tron-green mb-4" />,
    title: "Smart Technology",
    description: "Monitor your energy production, track rewards, and manage your bike through our mobile app."
  }
];

const Features = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('features');
      if (!element) return;
      
      const rect = element.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
      
      if (isVisible) {
        const newVisible = Array.from({ length: features.length }, (_, i) => i);
        setVisibleItems(newVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-tron-blue/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-tron-green/10 rounded-full blur-3xl translate-y-1/4 -translate-x-1/3"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-tron-green/10 text-tron-green font-medium text-sm mb-6">
            <Zap className="h-4 w-4" />
            <span>Key Features</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What Makes TronCycles Special</h2>
          <p className="text-lg text-tron-gray">
            Our innovative technology combines sustainable transportation with renewable energy generation, 
            creating a revolutionary cycling experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`glass-card p-8 rounded-2xl transition-all duration-700 ease-out ${
                visibleItems.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {feature.icon}
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-tron-gray">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
