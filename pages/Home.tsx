import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Page, Language } from '../types';
import { DataFlowVisualizer } from '../components/DataFlowVisualizer';

interface HomeProps {
  setPage: (page: Page) => void;
  language: Language;
}

export const Home: React.FC<HomeProps> = ({ setPage, language }) => {
  const content = {
    zh: {
      badge: '工业物联网领航者',
      heroTitle1: '引领 ',
      heroTitleSpan: '工业感知',
      heroTitle2: '智能互联新时代',
      heroDesc: '专注低功耗无线通讯技术，提供从传感器、网关到云平台的高性能端到端解决方案。让每一个工业数据可视、可控、可联动。',
      btnExplore: '探索方案',
      btnContact: '联系我们',
      expTitle: '10+ 年行业经验',
      expSub: '专业 LoRa 技术积累',
      whyTitle: '为什么选择万维物联网?',
      features: [
        { icon: '📡', title: '深厚LoRa积累', desc: '10年无线通信开发经验，技术成熟可靠' },
        { icon: '🔋', title: '超低功耗设计', desc: '长距离低功耗，适合长期无人值守部署' },
        { icon: '🔗', title: '端到端闭环', desc: '传感器+网关+平台+APP，一站式交付' },
        { icon: '🏭', title: '广覆盖场景', desc: '水务、能源、农业、工业多行业适用' },
      ]
    },
    en: {
      badge: 'IIoT Pioneer',
      heroTitle1: 'Leading the ',
      heroTitleSpan: 'Industrial Sensing',
      heroTitle2: 'Era of Intelligent Interconnection',
      heroDesc: 'Focusing on low-power wireless communication technology, providing high-performance end-to-end solutions from sensors and gateways to cloud platforms. Making every industrial data visible, controllable, and linked.',
      btnExplore: 'Explore Solutions',
      btnContact: 'Contact Us',
      expTitle: '10+ Years Experience',
      expSub: 'Professional LoRa Technology',
      whyTitle: 'Why Choose Wanwei IoT?',
      features: [
        { icon: '📡', title: 'Deep LoRa Expertise', desc: '10 years of wireless dev experience, mature and reliable.' },
        { icon: '🔋', title: 'Ultra-low Power', desc: 'Long range, low power, suitable for unattended deployment.' },
        { icon: '🔗', title: 'End-to-End Loop', desc: 'Sensors + Gateways + Platform + App, one-stop delivery.' },
        { icon: '🏭', title: 'Wide Coverage', desc: 'Applicable to Water, Energy, Agriculture, Industry, etc.' },
      ]
    }
  };

  const t = content[language];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-tech-600/20 blur-[100px]"></div>
          <div className="absolute top-[40%] -left-[10%] w-[500px] h-[500px] rounded-full bg-neon-purple/20 blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-tech-500/30 bg-tech-500/10 text-tech-300 text-sm font-medium mb-6">
                <span className="flex w-2 h-2 bg-neon-cyan rounded-full mr-2 animate-pulse"></span>
                {t.badge}
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
                {t.heroTitle1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-tech-500">{t.heroTitleSpan}</span><br />
                {t.heroTitle2}
              </h1>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-lg">
                {t.heroDesc}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => setPage(Page.Products)}
                  className="px-8 py-3 bg-gradient-to-r from-tech-600 to-tech-500 hover:from-tech-500 hover:to-tech-400 text-white rounded-lg font-semibold shadow-[0_0_20px_rgba(14,165,233,0.3)] transition-all flex items-center"
                >
                  {t.btnExplore} <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button 
                  onClick={() => setPage(Page.Contact)}
                  className="px-8 py-3 bg-slate-800/50 hover:bg-slate-800 border border-slate-700 text-white rounded-lg font-semibold backdrop-blur-sm transition-all"
                >
                  {t.btnContact}
                </button>
              </div>
            </motion.div>

            {/* Right Visual (Abstract Tech) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-1/2 relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700 group">
                <img 
                  src="https://picsum.photos/800/600?grayscale&blur=2" 
                  alt="Industrial IoT" 
                  className="w-full h-auto object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                
                {/* Overlay Card */}
                <div className="absolute bottom-6 left-6 right-6 bg-slate-900/90 backdrop-blur-md p-6 rounded-xl border border-slate-700">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-neon-green/20 rounded-full flex items-center justify-center text-neon-green">
                       <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold">{t.expTitle}</h3>
                      <p className="text-slate-400 text-sm">{t.expSub}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Visualization Section */}
      <section className="py-16 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <DataFlowVisualizer language={language} />
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">{t.whyTitle}</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-neon-cyan to-tech-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.features.map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-tech-500/50 transition-colors"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};