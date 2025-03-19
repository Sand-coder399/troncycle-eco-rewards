
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import BikeShowcase from "@/components/BikeShowcase";
import RewardsSystem from "@/components/RewardsSystem";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = "TronCycles - Eco-Friendly Energy-Generating Bikes";
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <BikeShowcase />
      <RewardsSystem />
      <Footer />
    </div>
  );
};

export default Index;
