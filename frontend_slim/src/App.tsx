import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import FloatingNav from './components/FloatingNav';
import { motion } from 'framer-motion';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 模拟加载过程
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-[#FF6B6B] via-[#4ECDC4] to-[#FFE66D]">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold text-white mb-4 font-serif">Evan WANG</h1>
          <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto"></div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="App">
      <Navbar />
      <FloatingNav />
      <Hero />
      <About />
      <Experience />
      <Contact />
      
      <footer className="py-8 bg-[#292F36] text-white text-center">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} Evan WANG. 保留所有权利。</p>
          <p className="text-sm text-gray-400 mt-2">ENFJ 产品经理 | 创造有温度的产品</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
