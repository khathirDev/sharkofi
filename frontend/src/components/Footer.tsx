
const Footer = () => {
  return (
    <footer className="bg-blue-900/30 py-12 border-t border-neon-cyan/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-6 md:mb-0">
              <img 
                src="/logo-min.jpg" 
                 className="w-8 h-8 rounded-full" 
                alt="Logo"
              />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-cyan to-sui-blue">
                SHARKO<span className="text-blood-red">FI</span>
              </span>
            </div>
            
            <div className="flex gap-6 mb-6 md:mb-0">
              <a href="#" className="text-slate-300 hover:text-neon-cyan">Terms</a>
              <a href="#" className="text-slate-300 hover:text-neon-cyan">Privacy</a>
              <a href="#" className="text-slate-300 hover:text-neon-cyan">Contact</a>
            </div>
            
            <div className="text-slate-400 text-sm text-center md:text-right">
              © {new Date().getFullYear()} SharkoFi. All rights reserved.<br />
              $SHARK is a meme coin with no intrinsic value.
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer