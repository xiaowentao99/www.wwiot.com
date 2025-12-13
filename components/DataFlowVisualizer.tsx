import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Wifi, Server, Smartphone, Radio, Activity } from 'lucide-react';

interface VisualizerProps {
  language?: 'zh' | 'en';
}

export const DataFlowVisualizer: React.FC<VisualizerProps> = ({ language = 'zh' }) => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 1500); // Change step every 1.5 seconds
    return () => clearInterval(interval);
  }, []);

  const content = {
    zh: {
      title: '端到端数据流转',
      sub: 'Real-time Data Transmission Process',
      steps: [
        { label: '智能感知', sub: '传感器采集数据' },
        { label: '无线传输', sub: 'LoRa/4G 网络' },
        { label: '云端平台', sub: '大数据处理分析' },
        { label: '移动终端', sub: '实时监控/告警' }
      ]
    },
    en: {
      title: 'End-to-End Data Flow',
      sub: 'Real-time Data Transmission Process',
      steps: [
        { label: 'Sensing', sub: 'Data Acquisition' },
        { label: 'Transmission', sub: 'LoRa/4G Network' },
        { label: 'Cloud Platform', sub: 'Big Data Analysis' },
        { label: 'Mobile Terminal', sub: 'Monitoring/Alerts' }
      ]
    }
  };

  const t = content[language];

  const steps = [
    { 
      id: 0, 
      label: t.steps[0].label, 
      sub: t.steps[0].sub,
      icon: Activity, 
      color: 'text-neon-green',
      bg: 'bg-neon-green/10',
      border: 'border-neon-green/50'
    },
    { 
      id: 1, 
      label: t.steps[1].label, 
      sub: t.steps[1].sub,
      icon: Radio, 
      color: 'text-tech-400',
      bg: 'bg-tech-400/10',
      border: 'border-tech-400/50'
    },
    { 
      id: 2, 
      label: t.steps[2].label, 
      sub: t.steps[2].sub,
      icon: Server, 
      color: 'text-neon-purple',
      bg: 'bg-neon-purple/10',
      border: 'border-neon-purple/50'
    },
    { 
      id: 3, 
      label: t.steps[3].label, 
      sub: t.steps[3].sub,
      icon: Smartphone, 
      color: 'text-neon-cyan',
      bg: 'bg-neon-cyan/10',
      border: 'border-neon-cyan/50'
    },
  ];

  return (
    <div className="w-full py-12 px-4 bg-slate-900/50 rounded-2xl border border-slate-800 backdrop-blur-sm relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      
      <div className="relative z-10">
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold text-white mb-2 font-mono">
            <span className="text-neon-cyan">&lt;</span> {t.title} <span className="text-neon-cyan">/&gt;</span>
          </h3>
          <p className="text-slate-400 text-sm">{t.sub}</p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto gap-8 relative">
          
          {/* Animated Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-slate-800 -translate-y-1/2 z-0">
             <motion.div 
                className="h-full bg-gradient-to-r from-transparent via-neon-cyan to-transparent w-1/3 blur-sm"
                animate={{ x: ['-100%', '400%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
             />
          </div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = activeStep === index;
            const isPast = activeStep > index;

            return (
              <div key={index} className="relative z-10 flex flex-col items-center w-full md:w-auto group">
                {/* Node Circle */}
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ 
                    scale: isActive ? 1.1 : 1, 
                    opacity: 1,
                    boxShadow: isActive ? `0 0 20px ${step.color === 'text-neon-cyan' ? '#06b6d4' : step.color === 'text-neon-green' ? '#10b981' : step.color === 'text-neon-purple' ? '#8b5cf6' : '#38bdf8'}` : 'none'
                  }}
                  transition={{ duration: 0.5 }}
                  className={`w-20 h-20 rounded-full flex items-center justify-center border-2 ${step.bg} ${isActive ? step.border : 'border-slate-700'} backdrop-blur-md transition-colors duration-500`}
                >
                  <Icon className={`w-8 h-8 ${isActive ? step.color : 'text-slate-500'}`} />
                  
                  {/* Ping Animation for active node */}
                  {isActive && (
                    <span className="absolute inline-flex h-full w-full rounded-full bg-current opacity-20 animate-ping"></span>
                  )}
                </motion.div>

                {/* Text Content */}
                <div className="mt-4 text-center">
                  <h4 className={`font-bold ${isActive ? 'text-white' : 'text-slate-500'} transition-colors duration-300`}>
                    {step.label}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 font-mono">{step.sub}</p>
                </div>
                
                {/* Mobile Connector */}
                {index < steps.length - 1 && (
                  <div className="md:hidden w-1 h-8 bg-slate-800 my-2 relative overflow-hidden">
                     <motion.div 
                      className="w-full bg-neon-cyan absolute top-0"
                      initial={{ height: 0 }}
                      animate={{ height: isPast ? '100%' : '0%' }}
                      transition={{ duration: 0.5 }}
                   />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};