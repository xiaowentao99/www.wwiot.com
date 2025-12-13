import React from 'react';
import { Droplets, Factory, Sprout, Building2 } from 'lucide-react';
import { Language } from '../types';

interface ScenariosProps {
  language: Language;
}

export const Scenarios: React.FC<ScenariosProps> = ({ language }) => {
  const content = {
    zh: {
      title: '应用场景',
      sub: '我们的技术已在多个垂直领域落地，为数字化转型提供核心动力',
      btn: '查看案例详情',
      items: [
        {
          title: '智慧水务',
          desc: '实时采集管网压力、流量及水质数据，实现无人值守监控与泄漏预警。',
          details: ['管网压力监测', '液位实时追踪', '水质安全分析']
        },
        {
          title: '工业监测',
          desc: '监测关键设备（电机、泵）的振动、温度与电流，实现预测性维护。',
          details: ['设备健康度', '能耗分析', '故障预警']
        },
        {
          title: '智慧农业',
          desc: '长距离土壤墒情与环境监测，精准灌溉，提升作物产量。',
          details: ['土壤温湿度', '智能灌溉', '气象监测']
        },
        {
          title: '智慧楼宇',
          desc: '环境与安全监测，打造绿色、安全、舒适的办公居住空间。',
          details: ['空气质量', '安防监控', '能源管理']
        }
      ]
    },
    en: {
      title: 'Application Scenarios',
      sub: 'Our technology has landed in multiple verticals, powering digital transformation.',
      btn: 'View Case Details',
      items: [
        {
          title: 'Smart Water',
          desc: 'Real-time collection of pipe pressure, flow and water quality for unattended monitoring and leak warning.',
          details: ['Pressure Monitoring', 'Level Tracking', 'Water Quality Analysis']
        },
        {
          title: 'Industrial Monitoring',
          desc: 'Monitor vibration, temperature and current of key equipment (motors, pumps) for predictive maintenance.',
          details: ['Device Health', 'Energy Analysis', 'Fault Warning']
        },
        {
          title: 'Smart Agriculture',
          desc: 'Long-range soil moisture and environmental monitoring for precision irrigation and increased yield.',
          details: ['Soil Moisture', 'Smart Irrigation', 'Weather Monitoring']
        },
        {
          title: 'Smart Building',
          desc: 'Environment and safety monitoring to create green, safe, and comfortable living spaces.',
          details: ['Air Quality', 'Security Monitoring', 'Energy Management']
        }
      ]
    }
  };

  const t = content[language];
  const icons = [Droplets, Factory, Sprout, Building2];
  const images = [
    'https://picsum.photos/600/400?random=50',
    'https://picsum.photos/600/400?random=51',
    'https://picsum.photos/600/400?random=52',
    'https://picsum.photos/600/400?random=53'
  ];

  return (
    <div className="pt-24 pb-20 bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-6">{t.title}</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            {t.sub}
          </p>
        </div>

        <div className="space-y-12">
          {t.items.map((item, idx) => {
            const Icon = icons[idx];
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={idx} 
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-slate-700 transition-all`}
              >
                <div className="lg:w-1/2 relative h-64 lg:h-auto">
                  <img src={images[idx]} alt={item.title} className="w-full h-full object-cover opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent lg:bg-gradient-to-r"></div>
                </div>
                
                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-tech-600/20 rounded-lg mr-4">
                      <Icon className="w-6 h-6 text-tech-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                  </div>
                  
                  <p className="text-slate-400 mb-6 leading-relaxed">
                    {item.desc}
                  </p>
                  
                  <ul className="space-y-3">
                    {item.details.map((detail, i) => (
                      <li key={i} className="flex items-center text-slate-300">
                        <span className="w-1.5 h-1.5 bg-neon-cyan rounded-full mr-3"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="mt-8 self-start text-tech-400 hover:text-white font-medium flex items-center transition-colors">
                    {t.btn} <span className="ml-2">→</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};