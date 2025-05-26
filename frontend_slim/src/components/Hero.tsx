import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-gradient-to-br from-[#FF6B6B] via-[#4ECDC4] to-[#FFE66D]">
      <div className="absolute inset-0 opacity-20">
        {/* 抽象几何图形背景 */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: Math.random() * 0.3 + 0.1, 
              scale: 1,
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
            }}
            transition={{ 
              duration: Math.random() * 10 + 10, 
              repeat: Infinity, 
              repeatType: "reverse" 
            }}
          />
        ))}
      </div>
      
      <div className="z-10 text-center px-4">
        <motion.h1 
          className="text-6xl md:text-8xl font-bold mb-6 text-white font-serif"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Evan WANG
        </motion.h1>
        
        <motion.div
          className="text-xl md:text-2xl text-white font-light mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <span className="bg-[#292F36]/80 backdrop-blur-sm px-6 py-2 rounded-full font-sans tracking-wide">ENFJ 产品经理</span>
          <span className="mx-3">|</span>
          <span className="bg-[#292F36]/80 backdrop-blur-sm px-6 py-2 rounded-full font-sans tracking-wide">创造有温度的产品</span>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <a 
            href="#about" 
            className="inline-block bg-white text-[#292F36] px-8 py-3 rounded-full font-medium hover:bg-[#292F36] hover:text-white transition-colors duration-300"
          >
            了解更多
          </a>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ 
          y: [0, 10, 0],
        }}
        transition={{ 
          duration: 1.5, 
          repeat: Infinity,
          repeatType: "loop" 
        }}
      >
        <svg 
          width="40" 
          height="40" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="text-white"
        >
          <path 
            d="M12 5V19M12 19L5 12M12 19L19 12" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
