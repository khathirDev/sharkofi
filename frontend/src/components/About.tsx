import { motion } from "framer-motion"
import { useState } from "react"

const About = () => {
  const [copied, setCopied] = useState(false)
  const contractAddress = "0x4901795f977d5732ca1cd772fd1f81419e9595f65447d6364bf1812ca94126a1::shark::SHARK" 
  const explorerUrl = `https://suiscan.xyz/devnet/coin/${contractAddress}/txs` 

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  const openExplorer = () => {
    window.open(explorerUrl, '_blank')
  }

  const formatAddress = (address: string | any[]) => {
    if (!address) return ''
    return `${address.slice(0, 6)}...${address.slice(-18)}`
  }

  return (
    <section id="about" className="container mx-auto px-6 py-20">
        <motion.div
          className="flex flex-col md:flex-row gap-12 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="md:w-1/2">
            <img 
              src="/mascot-min.jpg" 
              alt="SharkoFi Mascot" 
              className="w-full max-w-md mx-auto animate-float rounded-md shadow-lg shadow-cyan-500/30"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-6 text-neon-cyan">What is SharkoFi?</h2>
            <p className="text-slate-300 mb-6">
              SharkoFi ($SHARK) is the apex predator of Sui Blockchain, designed to hunt down weak hands and reward diamond fin holders. 
              Our ecosystem combines meme culture with real utility through:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "🦈 5% transaction tax (3% liquidity, 2% holders)",
                "🔒 Locked liquidity & renounced contract",
                "🌊 Community-driven development",
                "🚀 Sui's fastest growing meme coin"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-300">
                  <span className="text-neon-cyan">✓</span> {item}
                </li>
              ))}
            </ul>
            
            {/* Contract Address Section */}
            <motion.div 
              className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-lg p-4 border border-cyan-500/20 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-neon-cyan font-semibold text-sm uppercase tracking-wide">Contract Address</h3>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-xs font-medium">VERIFIED</span>
                </div>
              </div>
              <div className="flex items-center gap-3 group">
                <div 
                  className="flex-1 bg-slate-900/80 rounded-md p-3 border border-slate-700/50 cursor-pointer hover:border-cyan-500/50 transition-all duration-200"
                  onClick={openExplorer}
                >
                  <code className="text-slate-300 text-sm font-mono">
                    {formatAddress(contractAddress)}
                  </code>
                </div>
                <button 
                  onClick={copyToClipboard}
                  className="flex items-center gap-2 px-4 py-3 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 hover:border-cyan-500/50 rounded-md transition-all duration-200 group-hover:scale-105"
                >
                  {copied ? (
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="flex items-center gap-2"
                    >
                      <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-green-400 text-sm font-medium">Copied!</span>
                    </motion.div>
                  ) : (
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2"
                    >
                      <svg className="w-4 h-4 text-neon-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      <span className="text-neon-cyan text-sm font-medium">Copy</span>
                    </motion.div>
                  )}
                </button>
              </div>
              <p className="text-slate-400 text-xs mt-2">
                Click address to view on explorer • Click copy to copy full address
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>
  )
}

export default About