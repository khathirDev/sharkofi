import { CurrencyDollarIcon, ArrowPathIcon, ChartBarIcon, ShieldCheckIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'


const Stats = () => {
  return (
    <section className="container mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { icon: CurrencyDollarIcon, value: "$10M", label: "Market Cap" },
          { icon: ArrowPathIcon, value: "50K+", label: "Transactions" },
          { icon: ChartBarIcon, value: "20K+", label: "Holders" },
          { icon: ShieldCheckIcon, value: "Audited", label: "Security" },
        ].map((stat, i) => (
          <motion.div
            key={i}
            className="bg-blue-900/20 border border-sui-blue/30 rounded-xl p-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <stat.icon className="w-10 h-10 mx-auto mb-4 text-neon-cyan" />
            <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
            <p className="text-slate-300">{stat.label}</p>
          </motion.div>
        ))}
      </section>
  )
}

export default Stats