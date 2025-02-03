import React from 'react';
import { Coins, Rocket, Shield, Smartphone, ChevronRight, Apple, PlaySquare } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16">
        <nav className="flex justify-between items-center mb-16">
          <div className="flex items-center space-x-2">
            
            <span className="text-2xl font-bold">geno</span>
          </div>
          <div className="flex space-x-6">
            <a href="https://geno.aikyam.live/" className="hover:text-blue-400 transition-colors">Try on web</a>
            <a href="#features" className="hover:text-blue-400 transition-colors">Features</a>
            <a href="#download" className="hover:text-blue-400 transition-colors">Download</a>
          </div>
        </nav>

        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Launch Your <span className="text-blue-400">Small Cap</span> Crypto Token
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Generate and launch your cryptocurrency token with confidence using our secure and intuitive platform
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href="https://geno.aikyam.live/" 
              className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-full flex items-center space-x-2 transition-colors"
            >
              <span>Launch Now</span>
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Geno?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-xl">
              <Shield className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Secure Generation</h3>
              <p className="text-gray-400">Advanced security measures to protect your token generation process</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl">
              <Rocket className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Easy Launch</h3>
              <p className="text-gray-400">Streamlined process to launch your token with just a few clicks</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl">
              <Coins className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Small Cap Focus</h3>
              <p className="text-gray-400">Specialized tools and features for small cap token launches</p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Get Started on Mobile</h2>
          <div className="flex justify-center space-x-4">
            <a 
              href="https://apps.apple.com" 
              className="bg-gray-800 hover:transition-transform  flex items-center transition-colors"
            >
               <img  src='https://res.cloudinary.com/dde0qo4wb/image/upload/v1738613489/geno/i0vauv2p5qtiprkzzfku.png'/>
              
            </a>
            <a 
              href="https://play.google.com" 
              className="bg-gray-800 hover:transition-transform  flex items-center  transition-colors"
            >
            
              <img  src='https://res.cloudinary.com/dde0qo4wb/image/upload/v1738613497/geno/kyxsylg6lyg1tuaitxso.png'/>
               
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2025 {" "} 
          <a
    href="https://ai-kyam.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:underline transition-colors"
  >
    aikyam
  </a>
            
            . All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;