import { motion } from 'framer-motion'

const Roadmap = () => {
  return (
          <section id="roadmap" className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-16 text-center text-neon-cyan">Roadmap</h2>
        
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-cyan/30 to-transparent -translate-x-1/2"></div>
          
          {/* Phase 1 */}
          <div className="flex flex-col md:flex-row items-center mb-16">
            <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 md:text-right">
              <motion.div 
                className="bg-blue-900/20 border border-neon-cyan/30 rounded-xl p-6 shadow-lg"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <span className="inline-block px-3 py-1 bg-neon-cyan text-blue-900 rounded-full text-sm font-bold mb-3">PHASE 1</span>
                <h3 className="text-2xl font-bold mb-4 text-neon-cyan">Launch & Awareness</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-neon-cyan">✓</span> Token launch on Sui DEXs
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-neon-cyan">✓</span> 1,000+ holders
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-neon-cyan">✓</span> Community building
                  </li>
                </ul>
              </motion.div>
            </div>
            <div className="hidden md:block md:w-1/2">
              <div className="relative h-full flex items-center justify-center">
                <div className="absolute left-0 h-6 w-6 rounded-full bg-neon-cyan border-4 border-ocean-dark transform -translate-x-1/2"></div>
                <div className="text-neon-400 font-bold text-xl absolute left-0 transform -translate-x-1/2 -translate-y-1/2 top-1/2">Q1 2024</div>
              </div>
            </div>
            <div className="md:hidden w-full flex items-center mb-4">
              <div className="h-6 w-6 rounded-full bg-neon-cyan border-4 border-ocean-dark mr-4"></div>
              <div className="text-neon-cyan font-bold">Q1 2024</div>
            </div>
          </div>

          {/* Phase 2 */}
          <div className="flex flex-col md:flex-row items-center mb-16">
            <div className="md:hidden w-full flex items-center mb-4">
              <div className="h-6 w-6 rounded-full bg-neon-cyan border-4 border-ocean-dark mr-4"></div>
              <div className="text-neon-cyan font-bold">Q2 2024</div>
            </div>
            <div className="hidden md:block md:w-1/2">
              <div className="relative h-full flex items-center justify-center">
                <div className="absolute right-0 h-6 w-6 rounded-full bg-neon-cyan border-4 border-ocean-dark transform translate-x-1/2"></div>
                <div className="text-neon-400 font-bold text-xl absolute right-0 transform translate-x-1/2 -translate-y-1/2 top-1/2">Q2 2024</div>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <motion.div 
                className="bg-blue-900/20 border border-neon-cyan/30 rounded-xl p-6 shadow-lg"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <span className="inline-block px-3 py-1 bg-neon-cyan text-blue-900 rounded-full text-sm font-bold mb-3">PHASE 2</span>
                <h3 className="text-2xl font-bold mb-4 text-neon-cyan">Ecosystem Growth</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-neon-cyan">◯</span> Staking platform
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-neon-cyan">◯</span> Major CEX listings
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-neon-cyan">◯</span> SharkoFi NFT collection
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Phase 3 */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 md:text-right">
              <motion.div 
                className="bg-blue-900/20 border border-neon-cyan/30 rounded-xl p-6 shadow-lg"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <span className="inline-block px-3 py-1 bg-neon-cyan text-blue-900 rounded-full text-sm font-bold mb-3">PHASE 3</span>
                <h3 className="text-2xl font-bold mb-4 text-neon-cyan">Dominance</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-neon-cyan">◯</span> Merchandise store
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-neon-cyan">◯</span> SharkoFi DAO
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-neon-cyan">◯</span> Top 10 meme coin on Sui
                  </li>
                </ul>
              </motion.div>
            </div>
            <div className="hidden md:block md:w-1/2">
              <div className="relative h-full flex items-center justify-center">
                <div className="absolute left-0 h-6 w-6 rounded-full bg-neon-cyan border-4 border-ocean-dark transform -translate-x-1/2"></div>
                <div className="text-neon-400 font-bold text-xl absolute left-0 transform -translate-x-1/2 -translate-y-1/2 top-1/2">Q3 2024</div>
              </div>
            </div>
            <div className="md:hidden w-full flex items-center mb-4">
              <div className="h-6 w-6 rounded-full bg-neon-cyan border-4 border-ocean-dark mr-4"></div>
              <div className="text-neon-cyan font-bold">Q3 2024</div>
            </div>
          </div>
        </div>
      </section>

  )
}

export default Roadmap