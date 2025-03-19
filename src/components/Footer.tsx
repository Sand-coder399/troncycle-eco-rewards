
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="about" className="bg-tron-black text-white pt-20 pb-10 relative overflow-hidden">
      {/* Blue gradient */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-tron-blue-dark/30 rounded-full blur-[100px] opacity-30"></div>
      
      {/* Green gradient */}
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-tron-green-dark/30 rounded-full blur-[100px] opacity-30"></div>
      
      {/* Noise overlay */}
      <div className="absolute inset-0 noise-bg opacity-10"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Zap className="h-6 w-6 text-tron-green" />
              <span className="text-xl font-bold tracking-tight">TronCycles</span>
            </div>
            <p className="text-gray-400 mb-6">
              Revolutionizing eco-friendly transportation with energy-generating bikes. Ride with us towards a sustainable future.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a href="#bikes" className="text-gray-400 hover:text-white transition-colors">Our Bikes</a>
              </li>
              <li>
                <a href="#rewards" className="text-gray-400 hover:text-white transition-colors">Rewards Program</a>
              </li>
              <li>
                <a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-tron-green mt-0.5" />
                <span className="text-gray-400">123 Eco Street, Green City, Earth</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-tron-green mt-0.5" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-tron-green mt-0.5" />
                <span className="text-gray-400">info@troncycles.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter to receive updates and special offers.
            </p>
            <div className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-tron-green text-white placeholder:text-gray-400"
              />
              <Button className="bg-tron-green hover:bg-tron-green-dark text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">&copy; {currentYear} TronCycles. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex flex-wrap gap-4 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
