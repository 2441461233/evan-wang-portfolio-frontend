import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      company: '拼多多',
      position: '跨境增长产品经理',
      period: '2024.12 - 2025.5',
      color: '#FF6B6B',
      description: '负责跨境电商业务的增长策略，通过数据分析和用户研究，优化产品体验，提升用户留存和转化率。带领团队实现业务目标，推动产品持续迭代优化。'
    },
    {
      company: 'Shopee',
      position: 'CRM产品经理',
      period: '2024.03 - 2024.10',
      color: '#4ECDC4',
      description: '负责客户关系管理系统的产品规划和迭代，通过深入理解用户需求，设计并实现提升用户体验的功能。协调跨部门资源，确保产品按时高质量交付。'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#292F36] mb-4">职业经历</h2>
          <div className="w-20 h-1 bg-[#FF6B6B] mx-auto"></div>
        </motion.div>
        
        <div className="relative max-w-3xl mx-auto">
          {/* 时间轴线 */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
          
          {/* 经历卡片 */}
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative mb-12 ${index % 2 === 0 ? 'text-right pr-12 md:pr-0 md:mr-auto md:ml-0 md:w-1/2' : 'pl-12 md:pl-0 md:ml-auto md:mr-0 md:w-1/2'}`}
            >
              {/* 时间点 */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white" style={{ backgroundColor: exp.color }}></div>
              
              {/* 内容卡片 */}
              <div 
                className={`p-6 rounded-xl shadow-lg ${index % 2 === 0 ? 'md:mr-10' : 'md:ml-10'}`}
                style={{ backgroundColor: `${exp.color}10` }}
              >
                <div className="mb-2 inline-block px-4 py-1 rounded-full" style={{ backgroundColor: exp.color }}>
                  <span className="text-white font-medium">{exp.period}</span>
                </div>
                <h3 className="text-xl font-bold text-[#292F36]">{exp.company}</h3>
                <h4 className="text-lg font-medium text-gray-700 mb-3">{exp.position}</h4>
                <p className="text-gray-600">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-block bg-[#FFE66D]/20 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-[#292F36] mb-4">ENFJ 特质在工作中的体现</h3>
            <p className="text-gray-700 max-w-2xl mx-auto">
              作为ENFJ类型的产品经理，我善于倾听团队成员的想法，协调各方资源，并通过富有感染力的沟通激发团队创造力。
              我的同理心帮助我深入理解用户痛点，而领导力则使我能够带领团队朝着共同目标前进，打造有温度的产品体验。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
