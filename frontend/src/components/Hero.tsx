import { useCurrentAccount } from "@mysten/dapp-kit";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";


const Hero = () => {

const currentAccount = useCurrentAccount();
const isConnected = !!currentAccount;
const [isHovering, setIsHovering] = useState(false);

return (

<section className="relative z-10 pt-32 pb-20 px-6 text-center">
        <motion.h1 
          className="text-6xl md:text-8xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-sui-blue"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          THE <span className="text-blood-red">WHALE</span> HUNTER
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl max-w-2xl mx-auto mb-10 text-slate-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          SharkoFi is the apex predator of Sui Blockchain.<br />
          No weak hands. Only <span className="text-blood-red">blood in the water</span>.
        </motion.p>
        
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => setIsHovering(true)}
          onHoverEnd={() => setIsHovering(false)}
          className="inline-block relative"
        >
          <button className="bg-gradient-to-r from-sui-blue to-neon-cyan text-black font-bold py-4 px-12 rounded-full text-lg shadow-lg shadow-cyan-500/30">
            {isConnected ? "BUY $SHARK" : "CONNECT TO BUY"}
          </button>
          
          {/* 💥 Bubble Burst Effect */}
          <AnimatePresence>
            {isHovering && (
              <>
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-full bg-neon-cyan"
                    style={{
                      width: "10px",
                      height: "10px",
                      top: `${Math.random() * 40 - 20}px`,
                      left: `${Math.random() * 40 - 20}px`,
                    }}
                    initial={{ scale: 0, opacity: 0.7 }}
                    animate={{ scale: [1, 1.5, 0], opacity: [0.7, 0] }}
                    transition={{ duration: 0.8, delay: i * 0.1 }}
                  />
                ))}
              </>
            )}
          </AnimatePresence>
        </motion.div>
      </section>
      );
}

export default Hero;
