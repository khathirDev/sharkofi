import { ConnectButton } from "@mysten/dapp-kit";


const Navbar = () => {

    return (

    <nav className="sticky top-0 z-50 container mx-auto px-6 py-6 flex justify-between items-cente bg-blue-900/10">
            <div className="flex items-center gap-2">
            <img 
                src="/logo-min.jpg" 
                className="w-10 h-10 rounded-full" 
                alt="Logo"
            />
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-cyan to-sui-blue">
                SHA<span className="text-blood-red">RK</span>
            </span>
            </div>
            <div className="hidden md:flex gap-8">
            <a href="#about" className="hover:text-neon-cyan transition">About</a>
            <a href="#tokenomics" className="hover:text-neon-cyan transition">Tokenomics</a>
            <a href="#roadmap" className="hover:text-neon-cyan transition">Roadmap</a>
            <a href="#buy" className="hover:text-neon-cyan transition">How to Buy</a>
            </div>
            
            <ConnectButton className="bg-gradient-to-r from-sui-blue to-neon-cyan text-black font-bold py-2 px-6 rounded-full"/>
            
        </nav>
    );
}

export default Navbar;
