import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'


const Buy = () => {
  return (
    <section id="buy" className="bg-blue-900/10 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center text-neon-cyan">How to Buy $SHARK</h2>
          
          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
            {[
              {
                step: "1",
                title: "Get a Sui Wallet",
                desc: "Download Sui Wallet or Martian Wallet for Chrome",
                icon: "💳",
              },
              {
                step: "2",
                title: "Buy SUI Tokens",
                desc: "Purchase SUI on an exchange like Binance or Coinbase",
                icon: "💰",
              },
              {
                step: "3",
                title: "Connect to DEX",
                desc: "Go to Turbos.finance or Cetus and connect your wallet",
                icon: "🔗",
              },
              {
                step: "4",
                title: "Swap for $SHARK",
                desc: "Enter our contract address and swap SUI for SHARK",
                icon: "🔄",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-blue-900/20 border border-neon-cyan/30 rounded-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-neon-cyan font-bold">STEP {item.step}</span>
                  <ArrowTopRightOnSquareIcon className="w-4 h-4 text-slate-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-slate-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Buy