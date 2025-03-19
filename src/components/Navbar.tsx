
import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out",
        isScrolled 
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="h-6 w-6 text-tron-green" />
            <span className="text-xl font-bold tracking-tight">TronCycles</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#bikes" className="text-sm font-medium hover:text-tron-blue transition-colors">
              Our Bikes
            </a>
            <a href="#rewards" className="text-sm font-medium hover:text-tron-blue transition-colors">
              Rewards Program
            </a>
            <a href="#features" className="text-sm font-medium hover:text-tron-blue transition-colors">
              Features
            </a>
            <a href="#about" className="text-sm font-medium hover:text-tron-blue transition-colors">
              About Us
            </a>
            <Button className="bg-tron-blue hover:bg-tron-blue-dark text-white">
              Rent Now
            </Button>
          </div>
          
          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-lg mt-1 animate-fade-in">
            <div className="flex flex-col p-4 space-y-4">
              <a 
                href="#bikes" 
                className="text-sm font-medium p-2 hover:bg-tron-gray-light rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Our Bikes
              </a>
              <a 
                href="#rewards" 
                className="text-sm font-medium p-2 hover:bg-tron-gray-light rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Rewards Program
              </a>
              <a 
                href="#features" 
                className="text-sm font-medium p-2 hover:bg-tron-gray-light rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#about" 
                className="text-sm font-medium p-2 hover:bg-tron-gray-light rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </a>
              <Button className="w-full bg-tron-blue hover:bg-tron-blue-dark text-white">
                Rent Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
