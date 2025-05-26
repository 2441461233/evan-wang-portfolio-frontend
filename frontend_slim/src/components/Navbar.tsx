import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <>
      <AnimatePresence>
        {scrolled && (
          <motion.nav 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 z-50"
          >
            <div className="bg-white/10 backdrop-blur-lg shadow-sm border-b border-white/20">
              <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                  <motion.a 
                    href="#"
                    className="text-xl font-bold text-white"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    Evan WANG
                  </motion.a>
                  
                  <div className="hidden md:flex space-x-8">
                    {['首页', '关于我', '职业经历', '联系方式'].map((item, index) => (
                      <motion.a 
                        key={index}
                        href={index === 0 ? '#' : `#${['about', 'experience', 'contact'][index-1]}`}
                        className="text-white/90 hover:text-white transition-colors duration-300"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        {item}
                      </motion.a>
                    ))}
                  </div>
                  
                  <div className="md:hidden">
                    <button 
                      className="text-white focus:outline-none"
                      onClick={() => setMenuOpen(!menuOpen)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {menuOpen ? (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* 移动端菜单 */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 right-0 bg-white/10 backdrop-blur-lg z-40 border-b border-white/20"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                {['首页', '关于我', '职业经历', '联系方式'].map((item, index) => (
                  <a 
                    key={index}
                    href={index === 0 ? '#' : `#${['about', 'experience', 'contact'][index-1]}`}
                    className="text-white py-2 px-4 rounded hover:bg-white/20 transition-colors duration-300"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
