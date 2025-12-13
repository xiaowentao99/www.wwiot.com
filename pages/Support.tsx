import React from 'react';
import { Cpu, Code2, PenTool, GraduationCap } from 'lucide-react';
import { Language } from '../types';

interface SupportProps {
  language: Language;
}

export const Support: React.FC<SupportProps> = ({ language }) => {
  const content = {
    zh: {
      title: '技术支持与服务',
      sub: '全生命周期的专业服务，确保您的物联网项目成功落地与稳定运行',
      services: [
        { title: '定制开发', desc: '根据特定场景需求，提供传感器与硬件的深度定制开发服务。' },
        { title: '系统集成', desc: '提供现场勘测、安装部署、调试上线的一站式集成服务。' },
        { title: 'API 对接', desc: '开放标准 RESTful API，支持与第三方 ERP/MES 系统无缝对接。' },
        { title: '技术培训', desc: '提供线上线下技术培训，帮助客户快速掌握系统运维技能。' },
      ],
      processTitle: '服务流程',
      processSteps: ['咨询评估', '方案设计', '实施部署', '培训验收', '运维支持']
    },
    en: {
      title: 'Technical Support & Services',
      sub: 'Full lifecycle professional services to ensure the successful landing and stable operation of your IoT projects.',
      services: [
        { title: 'Custom Development', desc: 'Deep customization of sensors and hardware based on specific scenario needs.' },
        { title: 'System Integration', desc: 'One-stop integration services including site survey, installation, and commissioning.' },
        { title: 'API Docking', desc: 'Open standard RESTful API, supporting seamless docking with third-party ERP/MES systems.' },
        { title: 'Technical Training', desc: 'Online and offline training to help customers quickly master system O&M skills.' },
      ],
      processTitle: 'Service Process',
      processSteps: ['Consultation', 'Design', 'Deployment', 'Training', 'Maintenance']
    }
  };

  const t = content[language];
  const icons = [Cpu, PenTool, Code2, GraduationCap];

  return (
    <div className="pt-24 pb-20 bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-6">{t.title}</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            {t.sub}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {t.services.map((s, i) => {
            const Icon = icons[i];
            return (
              <div key={i} className="bg-slate-900 p-8 rounded-xl border border-slate-800 text-center hover:bg-slate-800 transition-colors">
                <div className="w-16 h-16 bg-gradient-to-br from-tech-500 to-tech-700 rounded-full flex items-center justify-center mx-auto mb-6 text-white shadow-lg">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
                <p className="text-slate-400 text-sm">{s.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Process Steps */}
        <div className="bg-slate-900 rounded-2xl p-10 border border-slate-800">
          <h3 className="text-2xl font-bold text-white mb-10 text-center">{t.processTitle}</h3>
          <div className="relative">
             {/* Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-800 -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
              {t.processSteps.map((step, i) => (
                <div key={i} className="text-center">
                  <div className="w-12 h-12 bg-slate-950 border-2 border-tech-500 text-tech-500 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4 hover:bg-tech-500 hover:text-white transition-colors">
                    {i + 1}
                  </div>
                  <h4 className="text-white font-medium">{step}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};