
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Award, Battery, Star, Zap } from 'lucide-react';

const rewardLevels = [
  {
    level: "Bronze",
    points: "0-50",
    benefits: ["5% discount on rentals", "Free basic accessories", "Access to mobile app"],
    color: "#CD7F32"
  },
  {
    level: "Silver",
    points: "51-150",
    benefits: ["10% discount on rentals", "Free premium accessories", "Priority booking", "1 free rental day per month"],
    color: "#C0C0C0"
  },
  {
    level: "Gold",
    points: "151-300",
    benefits: ["15% discount on rentals", "All premium accessories", "VIP booking", "3 free rental days per month", "5% discount on purchases"],
    color: "#FFD700"
  },
  {
    level: "Platinum",
    points: "301+",
    benefits: ["20% discount on rentals", "All accessories included", "VIP status", "5 free rental days per month", "10% discount on purchases", "Exclusive member events"],
    color: "#E5E4E2"
  }
];

const RewardsSystem = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [visibleSection, setVisibleSection] = useState(false);
  const [animatingPoints, setAnimatingPoints] = useState(0);
  const [pointsTarget, setPointsTarget] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('rewards');
      if (!element) return;
      
      const rect = element.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom >= 0;
      
      if (isVisible && !visibleSection) {
        setVisibleSection(true);
        setPointsTarget(320);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleSection]);

  useEffect(() => {
    if (pointsTarget > 0 && animatingPoints < pointsTarget) {
      const intervalId = setInterval(() => {
        setAnimatingPoints(prev => {
          const increment = Math.max(1, Math.floor((pointsTarget - prev) / 10));
          const next = prev + increment;
          return next > pointsTarget ? pointsTarget : next;
        });
      }, 50);
      
      return () => clearInterval(intervalId);
    }
  }, [pointsTarget, animatingPoints]);

  return (
    <section id="rewards" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-tron-blue/10 rounded-full blur-3xl -translate-x-1/2"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-tron-green/10 rounded-full blur-3xl translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${visibleSection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-tron-blue/10 text-tron-blue font-medium text-sm mb-6">
            <Star className="h-4 w-4" />
            <span>Rewards Program</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Generate Energy, Earn Rewards</h2>
          <p className="text-lg text-tron-gray">
            Our innovative reward system gives you points for every kWh of energy you generate while riding.
            Redeem these points for discounts, free rentals, and exclusive perks.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ${visibleSection ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">How It Works</h3>
              
              <div className="space-y-8 relative">
                <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-tron-gray-light"></div>
                
                <div className="relative pl-12">
                  <div className="absolute left-0 top-1 w-8 h-8 bg-tron-blue rounded-full flex items-center justify-center">
                    <Zap className="h-4 w-4 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">1. Ride and Generate</h4>
                  <p className="text-tron-gray">Each TronCycle is equipped with our patented energy-generating technology that converts your pedaling into electricity.</p>
                </div>
                
                <div className="relative pl-12">
                  <div className="absolute left-0 top-1 w-8 h-8 bg-tron-green rounded-full flex items-center justify-center">
                    <Battery className="h-4 w-4 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">2. Track Your Energy</h4>
                  <p className="text-tron-gray">Monitor your energy production in real-time through our mobile app. Every 10 kWh generated earns you 1 reward point.</p>
                </div>
                
                <div className="relative pl-12">
                  <div className="absolute left-0 top-1 w-8 h-8 bg-tron-blue rounded-full flex items-center justify-center">
                    <Star className="h-4 w-4 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">3. Accumulate Points</h4>
                  <p className="text-tron-gray">Points never expire. The more you ride, the more you earn. Reach different levels to unlock enhanced benefits.</p>
                </div>
                
                <div className="relative pl-12">
                  <div className="absolute left-0 top-1 w-8 h-8 bg-tron-green rounded-full flex items-center justify-center">
                    <Award className="h-4 w-4 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">4. Enjoy Rewards</h4>
                  <p className="text-tron-gray">Redeem your points for rental discounts, free days, accessories, and even reduced purchase prices on new bikes.</p>
                </div>
              </div>
              
              <div className="mt-8 flex justify-center">
                <Button className="bg-tron-blue hover:bg-tron-blue-dark text-white">
                  Join Rewards Program
                </Button>
              </div>
            </div>
          </div>
          
          <div className={`transition-all duration-1000 delay-300 ${visibleSection ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="glass-card rounded-2xl p-8">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-bold">Reward Levels</h3>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-tron-gray">Your Points:</span>
                  <span className="text-xl font-bold text-tron-blue">{animatingPoints}</span>
                </div>
              </div>
              
              <div className="flex border-b border-tron-gray-light">
                {rewardLevels.map((level, index) => (
                  <button
                    key={index}
                    className={`flex-1 text-center py-3 px-2 text-sm font-medium transition-colors ${
                      activeTabIndex === index 
                        ? 'border-b-2 border-tron-blue text-tron-blue' 
                        : 'text-tron-gray hover:text-tron-blue'
                    }`}
                    onClick={() => setActiveTabIndex(index)}
                  >
                    {level.level}
                  </button>
                ))}
              </div>
              
              <div className="py-6">
                <div className="flex items-center gap-3 mb-4">
                  <div 
                    className="w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: rewardLevels[activeTabIndex].color }}
                  >
                    <Star className="h-3 w-3 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold">{rewardLevels[activeTabIndex].level} Level</h4>
                </div>
                
                <div className="mb-6">
                  <p className="text-sm text-tron-gray mb-1">Points Range</p>
                  <p className="font-medium">{rewardLevels[activeTabIndex].points} points</p>
                </div>
                
                <div>
                  <p className="text-sm text-tron-gray mb-3">Benefits</p>
                  <ul className="space-y-2">
                    {rewardLevels[activeTabIndex].benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="mt-1 w-4 h-4 rounded-full bg-tron-green/20 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-tron-green"></div>
                        </div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RewardsSystem;
