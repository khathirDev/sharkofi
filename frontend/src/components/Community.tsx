import { motion } from 'framer-motion'

const Community = () => {
  return (
    <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-16 text-center text-neon-cyan">Join the Frenzy</h2>
        
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              platform: "Telegram",
              link: "#",
              icon: "💬",
              desc: "Chat with the community",
            },
            {
              platform: "Twitter",
              link: "#",
              icon: "🐦",
              desc: "Latest announcements",
            },
            {
              platform: "Discord",
              link: "#",
              icon: "🎮",
              desc: "Exclusive events",
            },
            {
              platform: "Medium",
              link: "#",
              icon: "✍️",
              desc: "Project updates",
            },
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-900/20 border border-neon-cyan/30 rounded-xl p-6 text-center hover:bg-blue-900/40 transition"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.platform}</h3>
              <p className="text-slate-300">{item.desc}</p>
            </motion.a>
          ))}
        </div>
      </section>

  )
}

export default Community