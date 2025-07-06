import { motion } from 'framer-motion'

const Tokenomics = () => {
  return (
    <section id="tokenomics" className="bg-blue-900/10 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center text-neon-cyan">Tokenomics</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Pie Chart */}
            <motion.div 
              className="relative w-64 h-64 mx-auto"
              initial={{ rotate: -90, scale: 0 }}
              whileInView={{ rotate: 0, scale: 1 }}
              transition={{ type: "spring", damping: 10 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 rounded-full border-[12px] border-sui-blue/30"></div>
              <div 
                className="absolute inset-0 rounded-full border-[12px] border-neon-cyan"
                style={{
                  clipPath: "polygon(50% 50%, 50% 0%, 100% 0%, 100% 50%)",
                }}
              ></div>
              <div 
                className="absolute inset-0 rounded-full border-[12px] border-blood-red"
                style={{
                  clipPath: "polygon(50% 50%, 100% 50%, 100% 100%, 50% 100%)",
                }}
              ></div>
              <div 
                className="absolute inset-0 rounded-full border-[12px] border-purple-500"
                style={{
                  clipPath: "polygon(50% 50%, 50% 100%, 0% 100%, 0% 50%)",
                }}
              ></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl font-bold">1B</div>
                  <div className="text-slate-300">Total Supply</div>
                </div>
              </div>
            </motion.div>

            {/* Distribution */}
            <div className="space-y-6">
              {[
                { label: "Presale", percent: 40, color: "bg-neon-cyan" },
                { label: "Liquidity", percent: 30, color: "bg-blood-red" },
                { label: "Marketing", percent: 15, color: "bg-purple-500" },
                { label: "Team", percent: 10, color: "bg-sui-blue" },
                { label: "Airdrops", percent: 5, color: "bg-green-500" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-300">{item.label}</span>
                    <span className="font-bold">{item.percent}%</span>
                  </div>
                  <div className="w-full bg-blue-900/50 h-2 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${item.color}`}
                      style={{ width: `${item.percent}%` }}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
  )
}

export default Tokenomics