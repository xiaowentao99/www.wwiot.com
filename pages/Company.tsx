import React from 'react';
import { Language } from '../types';

interface CompanyProps {
  language: Language;
}

export const Company: React.FC<CompanyProps> = ({ language }) => {
  const content = {
    zh: {
      title: '关于万维物联网',
      p1: '万维物联网（南京）有限公司专注于低功耗无线通讯技术与工业物联网解决方案的研发与应用。我们拥有超过10年的LoRa技术开发经验，是国内领先的低功耗工业传感提供商。',
      p2: '核心团队由通信、自动化领域的资深专家组成。我们致力于将LoRa及4G技术与工业传感深度融合，打造高性能、低功耗、可扩展的智能物联网系统。',
      statExp: '年行业经验',
      statTeam: '专业团队',
      statCase: '成功案例',
      missionTitle: '我们的使命',
      mission: '"用领先的无线通信和智能感知技术，让每一个工业现场数据可视、可控、可联动。"',
      visionTitle: '我们的愿景',
      vision: '"成为全球工业物联网整体解决方案的领先者。"',
      historyTitle: '发展历程',
      history: [
        { year: '2013', title: '公司成立', desc: '专注于物联网技术研究与应用开发。' },
        { year: '2015', title: 'LoRa技术突破', desc: '研发自主LoRa协议栈，实现低功耗传输。' },
        { year: '2017', title: '首款网关发布', desc: '推出工业级GL620网关，获市场认可。' },
        { year: '2019', title: '云平台上线', desc: '端到端解决方案能力构建完成。' },
        { year: '2023', title: '全国布局', desc: '服务客户超500家，覆盖10+行业领域。' }
      ]
    },
    en: {
      title: 'About Wanwei IoT',
      p1: 'Wanwei IoT (Nanjing) Co., Ltd. focuses on the R&D and application of low-power wireless communication technology and industrial IoT solutions. With over 10 years of LoRa development experience, we are a leading provider of low-power industrial sensing.',
      p2: 'Our core team consists of senior experts in communications and automation. We are committed to deeply integrating LoRa and 4G technologies with industrial sensing to build high-performance, low-power, scalable smart IoT systems.',
      statExp: 'Years Experience',
      statTeam: 'Expert Team',
      statCase: 'Success Cases',
      missionTitle: 'Our Mission',
      mission: '"To make every industrial data visible, controllable, and linked with leading wireless communication and smart sensing technologies."',
      visionTitle: 'Our Vision',
      vision: '"To become a global leader in total industrial IoT solutions."',
      historyTitle: 'Our History',
      history: [
        { year: '2013', title: 'Founded', desc: 'Focused on IoT technology research and app development.' },
        { year: '2015', title: 'LoRa Breakthrough', desc: 'Developed proprietary LoRa stack for low-power transmission.' },
        { year: '2017', title: 'First Gateway', desc: 'Launched industrial grade GL620 gateway, gained market recognition.' },
        { year: '2019', title: 'Cloud Platform', desc: 'Completed end-to-end solution capabilities.' },
        { year: '2023', title: 'National Layout', desc: 'Serving 500+ customers across 10+ industries.' }
      ]
    }
  };

  const t = content[language];

  return (
    <div className="pt-24 pb-20 bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h1 className="text-4xl font-bold text-white mb-6">{t.title}</h1>
            <div className="space-y-4 text-slate-400 leading-relaxed text-lg">
              <p>{t.p1}</p>
              <p>{t.p2}</p>
            </div>
            
            <div className="grid grid-cols-3 gap-6 mt-10">
              <div className="bg-slate-900 p-4 rounded-lg border border-slate-800">
                <div className="text-3xl font-bold text-tech-400 mb-1">10+</div>
                <div className="text-sm text-slate-500">{t.statExp}</div>
              </div>
              <div className="bg-slate-900 p-4 rounded-lg border border-slate-800">
                <div className="text-3xl font-bold text-tech-400 mb-1">50+</div>
                <div className="text-sm text-slate-500">{t.statTeam}</div>
              </div>
              <div className="bg-slate-900 p-4 rounded-lg border border-slate-800">
                <div className="text-3xl font-bold text-tech-400 mb-1">200+</div>
                <div className="text-sm text-slate-500">{t.statCase}</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-tech-500 blur-[100px] opacity-20"></div>
            <img 
              src="https://picsum.photos/600/600?grayscale&blur=2" 
              alt="Office" 
              className="relative z-10 rounded-2xl border border-slate-700 shadow-2xl" 
            />
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-10 rounded-2xl border border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-4">{t.missionTitle}</h3>
            <p className="text-slate-300 italic text-lg">
              {t.mission}
            </p>
          </div>
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-10 rounded-2xl border border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-4">{t.visionTitle}</h3>
            <p className="text-slate-300 italic text-lg">
              {t.vision}
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="border-l-2 border-slate-800 ml-4 md:ml-0 md:pl-0 space-y-12">
           <h2 className="text-3xl font-bold text-white mb-10 pl-8">{t.historyTitle}</h2>
           {t.history.map((item, i) => (
             <div key={i} className="relative pl-8 md:pl-0">
               <div className="md:w-1/2 md:mx-auto relative">
                 <div className="absolute top-0 left-[-39px] md:left-[-9px] w-5 h-5 bg-tech-500 rounded-full border-4 border-slate-950 shadow-[0_0_10px_#0ea5e9]"></div>
                 <div className={`md:flex ${i % 2 === 0 ? 'md:flex-row-reverse md:translate-x-full' : 'md:flex-row md:-translate-x-full'}`}>
                    <div className={`md:w-full ${i % 2 === 0 ? 'md:pl-8' : 'md:pr-8 md:text-right'}`}>
                       <span className="text-neon-cyan font-mono font-bold">{item.year}</span>
                       <h4 className="text-white font-bold text-lg mt-1">{item.title}</h4>
                       <p className="text-slate-500 text-sm mt-2">{item.desc}</p>
                    </div>
                 </div>
               </div>
             </div>
           ))}
        </div>

      </div>
    </div>
  );
};