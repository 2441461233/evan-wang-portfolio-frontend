import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#F7F7F7]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#292F36] mb-4">关于我</h2>
          <div className="w-20 h-1 bg-[#FF6B6B] mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden h-full"
          >
            <div className="h-64 bg-gradient-to-r from-[#4ECDC4] to-[#FFE66D] flex items-center justify-center">
              {/* 预留个人照片位置 */}
              <div className="w-32 h-32 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                <span className="text-5xl text-white font-serif">EW</span>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-[#292F36] mb-4">ENFJ 产品经理</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                作为一名ENFJ类型的产品经理，我善于理解用户需求，并将其转化为有温度的产品。我相信产品应该不仅仅是功能的集合，更应该是情感的载体。
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-[#4ECDC4]/10 text-[#4ECDC4] rounded-full text-sm font-medium">好奇心</span>
                <span className="px-4 py-2 bg-[#FF6B6B]/10 text-[#FF6B6B] rounded-full text-sm font-medium">同理心</span>
                <span className="px-4 py-2 bg-[#FFE66D]/10 text-[#292F36] rounded-full text-sm font-medium">领导力</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col h-full justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold text-[#292F36] mb-6">教育背景</h3>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="flex items-center mb-3">
                    <div className="w-12 h-12 bg-[#4ECDC4] rounded-full flex items-center justify-center text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold">香港理工大学</h4>
                      <p className="text-gray-500">计算机科学与技术 | 硕士</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="flex items-center mb-3">
                    <div className="w-12 h-12 bg-[#FF6B6B] rounded-full flex items-center justify-center text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold">福州大学</h4>
                      <p className="text-gray-500">计算机科学与技术 | 本科</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-[#292F36] mb-6">核心理念</h3>
              <p className="text-gray-600 bg-white p-6 rounded-xl shadow-md leading-relaxed">
                我坚信产品应该是有温度的。通过深入理解用户需求，结合技术与设计，创造出既解决问题又能触动人心的产品体验。我的好奇心驱使我不断探索新的可能性，而同理心则帮助我真正站在用户的角度思考问题。
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
