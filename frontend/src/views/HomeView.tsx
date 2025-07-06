import { FC } from "react";
import { motion } from "framer-motion";

import { useState, useEffect } from "react";
import NavBar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import About from "../components/About";
import Tokenomics from "../components/Tokenomics";
import Roadmap from "../components/Roadmap";
import Buy from "../components/Buy";
import Community from "../components/Community";
import Footer from "../components/Footer";

type Bubble = {
  id: number;
  x: number;
  size: number;
  delay: number;
};

const HomeView: FC = () =>  {

 

  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  // Track mouse for shark follow effect
  useEffect(() => {
    const handleMouseMove = (e: { clientX: any; clientY: any; }) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Generate random bubbles
  useEffect(() => {
    const interval = setInterval(() => {
      setBubbles((prev) => [
        ...prev.slice(-10), 
        {
          id: Date.now(),
          x: Math.random() * 100,
          size: Math.random() * 10 + 5,
          delay: Math.random() * 3,
        },
      ]);
    }, 300);
    return () => clearInterval(interval);
  }, []);




  return (
    <div className="min-h-screen bg-gradient-to-b from-ocean-dark to-slate-950 text-white relative">
      {/* 🌊 Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden opacity-20 -z-10">
        {bubbles.map((bubble) => (
          <motion.div
            key={bubble.id}
            className="absolute rounded-full bg-neon-cyan opacity-70"
            style={{
              left: `${bubble.x}%`,
              bottom: "-20px",
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
            }}
            initial={{ y: 0, opacity: 0.7 }}
            animate={{ y: "-100vh", opacity: 0 }}
            transition={{
              duration: 4,
              delay: bubble.delay,
              ease: "easeIn",
            }}
            onAnimationComplete={() => {
              setBubbles((prev) => prev.filter((b) => b.id !== bubble.id));
            }}
          />
        ))}
      </div>

      {/* 🦈 Floating Shark Mascot */}
      <motion.div
        className="fixed w-40 h-40 z-50 pointer-events-none"
        animate={{
          x: mousePosition.x - 80,
          y: mousePosition.y - 80,
        }}
        transition={{ type: "spring", damping: 20, stiffness: 100 }}
      >
        <img
          src="/mascot-min.jpg"
          alt="SharkoFi Mascot"
          className="w-10 h-10 rounded-full object-contain"
        />
      </motion.div>

      {/* 🚀 Navigation */}
       <NavBar/>
      {/* 🌟 Hero Section */}
        <Hero/>
      {/* 📊 Stats Section */}
        <Stats/>

      {/* 🦈 About Section */}
        <About/>

      {/* 💰 Tokenomics Section */}
        <Tokenomics/>

      {/* 🚧 Roadmap Section */}
        <Roadmap/>
      {/* 🛒 How to Buy Section */}
       <Buy/>

      {/* 🌐 Community Section */}
        <Community/>
      {/* 🏁 Footer */}
        <Footer/>
    </div>
  );
}

export default HomeView;