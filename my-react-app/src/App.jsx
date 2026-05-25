import React from 'react'

function App() {
  const features = [
    {
      title: "Tactical Analytics",
      description: "Deep dive into player movements and team formations with our AI-powered heatmaps.",
      icon: "ΓÜ╜∩╕Å"
    },
    {
      title: "Scouting Reports",
      description: "Discover hidden gems from over 50+ leagues worldwide with advanced metric filtering.",
      icon: "ΓÜ╜∩╕Å"
    },
    {
      title: "Injury Prediction",
      description: "Reduce squad downtime by 30% with our proprietary biomechanical risk assessment.",
      icon: "ΓÜ╜∩╕Å"
    },
    {
      title: "Live Match Engine",
      description: "Real-time probability updates and tactical suggestions during the heat of the game.",
      icon: "ΓÜ╜∩╕Å"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white text-xl font-bold">P</div>
          <span className="text-xl font-bold tracking-tight text-slate-800">PitchPerfect AI</span>
        </div>
        <div className="hidden md:flex space-x-8 text-slate-600 font-medium">
          <a href="#" className="hover:text-green-600 transition-colors">Features</a>
          <a href="#" className="hover:text-green-600 transition-colors">Pricing</a>
          <a href="#" className="hover:text-green-600 transition-colors">About</a>
        </div>
        <button className="bg-green-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-700 transition-all shadow-lg shadow-green-200">
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 gradient-bg -z-10 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/grass.png')] opacity-10 -z-10"></div>
        
        <div className="container mx-auto px-6 text-center text-white animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            The Future of <br/> <span className="text-green-300">Football Scouting</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-slate-100 max-w-2xl mx-auto">
            Leverage AI-driven insights to build your championship squad. Data-backed decisions for the modern game.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <button className="w-full md:w-auto bg-white text-green-800 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 transition-all shadow-xl">
              Start Free Trial
            </button>
            <button className="w-full md:w-auto bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Floating element animation */}
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-full max-w-4xl h-40 bg-white/10 backdrop-blur-3xl rounded-[100%] blur-3xl"></div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Master Every Inch of the Pitch</h2>
            <p className="text-slate-600 max-w-xl mx-auto">Our platform provides the competitive edge needed in today's data-intensive football environment.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-2 group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon === "ΓÜ╜∩╕Å" ? "ΓÜ╜∩╕Å" : feature.icon}
                  {/* Note: I'll use a football emoji ΓÜ╜∩╕Å */}
                  ΓÜ╜∩╕Å
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-600 rounded-full blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-600 rounded-full blur-[100px] opacity-20 translate-y-1/2 -translate-x-1/2"></div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-8 relative z-10">Ready to transform your club?</h2>
            <p className="text-slate-400 text-xl mb-10 max-w-2xl mx-auto relative z-10">
              Join over 200+ professional clubs using PitchPerfect AI to optimize their performance.
            </p>
            <button className="bg-green-500 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-green-400 transition-all shadow-2xl shadow-green-900/40 relative z-10">
              Request a Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 py-12">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-6 md:mb-0">
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-sm font-bold">P</div>
            <span className="text-lg font-bold text-slate-800">PitchPerfect AI</span>
          </div>
          <p className="text-slate-500 text-sm">
            ┬⌐ 2026 PitchPerfect AI. All rights reserved. Built for the beautiful game.
          </p>
          <div className="flex space-x-6 mt-6 md:mt-0">
            <a href="#" className="text-slate-400 hover:text-green-600 transition-colors">Twitter</a>
            <a href="#" className="text-slate-400 hover:text-green-600 transition-colors">LinkedIn</a>
            <a href="#" className="text-slate-400 hover:text-green-600 transition-colors">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
