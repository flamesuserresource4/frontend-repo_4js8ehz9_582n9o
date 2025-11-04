import { useState, useCallback } from 'react';
import SplashScreen from './components/SplashScreen.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import BlenderEditor from './components/BlenderEditor.jsx';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const handleSplashFinish = useCallback(() => setShowSplash(false), []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#02131f] via-[#041927] to-[#03101a] text-white">
      {showSplash && <SplashScreen onFinish={handleSplashFinish} />}

      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-white/0 border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 md:px-10 h-14 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <span className="h-7 w-7 rounded-lg bg-gradient-to-br from-emerald-400 via-cyan-400 to-blue-500 shadow" />
            <span className="font-medium tracking-tight text-cyan-50">AI Sandbox Studio</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-cyan-100/80 text-sm">
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#blender" className="hover:text-white transition">Blender</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Services />
        <BlenderEditor />
      </main>

      <footer id="contact" className="border-t border-white/10 py-10 bg-black/20">
        <div className="mx-auto max-w-6xl px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cyan-100/70 text-sm">© {new Date().getFullYear()} Multimodal AI Sandbox Studio</p>
          <div className="flex items-center gap-3">
            <a href="#services" className="text-sm rounded-lg bg-white/10 px-3 py-2 border border-white/10 hover:bg-white/15 transition">Explore</a>
            <a href="#blender" className="text-sm rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 px-3 py-2 text-white shadow">Open Blender Suite</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
