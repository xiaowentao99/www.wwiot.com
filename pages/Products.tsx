import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Router, LayoutDashboard, Check } from 'lucide-react';
import { Language } from '../types';

interface ProductsProps {
  language: Language;
}

export const Products: React.FC<ProductsProps> = ({ language }) => {
  const [activeTab, setActiveTab] = useState<'sensors' | 'gateways' | 'platform'>('sensors');

  const content = {
    zh: {
      title: '产品与解决方案',
      desc: '覆盖感知层、传输层到应用层的全栈式物联网产品体系',
      tabs: {
        sensors: '传感器系列',
        gateways: '网关设备',
        platform: '平台与APP'
      },
      btnDetail: '查看详情',
      products: {
        sensors: [
          {
            title: '温湿度传感器',
            desc: '高精度环境监测，IP67防护，3-5年电池寿命。',
            features: ['-40℃ ~ +85℃', 'LoRa/4G 通信', '工业级防护']
          },
          {
            title: '液位/水浸传感器',
            desc: '实时监测水位变化与漏水检测，极速响应。',
            features: ['接触/非接触式', '防腐蚀设计', '<1秒响应']
          },
          {
            title: '智能门磁',
            desc: '监测开关状态，支持防拆报警与低电量提醒。',
            features: ['5-8年续航', '状态指示灯', 'LoRaWAN']
          }
        ],
        gateways: [
          {
            title: '室内LoRa网关 GL620',
            desc: '高性能室内网关，支持多通道并发与4G回传。',
            features: ['8通道LoRa', '4G Cat.1 / WiFi', 'DC 12V供电']
          },
          {
            title: '室外工业网关 GL680',
            desc: '恶劣环境专用，防雷防水，超远距离覆盖。',
            features: ['16通道LoRa', 'IP67防护', '覆盖半径15km']
          }
        ],
        platform: [
          {
            title: 'IoT管理云平台',
            desc: '数据可视化大屏，设备全生命周期管理，智能告警。',
            features: ['实时监控', '历史分析', '报表生成']
          },
          {
            title: '移动端 APP',
            desc: '随时随地掌控设备状态，极速接收异常推送。',
            features: ['iOS/Android', '远程控制', '扫码录入']
          }
        ]
      }
    },
    en: {
      title: 'Products & Solutions',
      desc: 'Full-stack IoT product system covering sensing, transmission, and application layers.',
      tabs: {
        sensors: 'Sensors',
        gateways: 'Gateways',
        platform: 'Platform & App'
      },
      btnDetail: 'View Details',
      products: {
        sensors: [
          {
            title: 'Temp & Humidity Sensor',
            desc: 'High precision monitoring, IP67 protection, 3-5 years battery life.',
            features: ['-40℃ ~ +85℃', 'LoRa/4G Comm', 'Industrial Grade']
          },
          {
            title: 'Level/Leak Sensor',
            desc: 'Real-time water level and leak detection, rapid response.',
            features: ['Contact/Non-contact', 'Anti-corrosion', '<1s Response']
          },
          {
            title: 'Smart Door Sensor',
            desc: 'Monitor switch status, tamper alarm and low battery reminder.',
            features: ['5-8 Years Battery', 'Status LED', 'LoRaWAN']
          }
        ],
        gateways: [
          {
            title: 'Indoor LoRa Gateway GL620',
            desc: 'High performance indoor gateway, multi-channel concurrency, 4G backhaul.',
            features: ['8-Channel LoRa', '4G Cat.1 / WiFi', 'DC 12V Power']
          },
          {
            title: 'Outdoor Gateway GL680',
            desc: 'For harsh environments, lightning/water proof, ultra long range.',
            features: ['16-Channel LoRa', 'IP67 Protection', '15km Radius']
          }
        ],
        platform: [
          {
            title: 'IoT Cloud Platform',
            desc: 'Data visualization dashboard, device lifecycle management, smart alerts.',
            features: ['Real-time Monitoring', 'History Analysis', 'Report Generation']
          },
          {
            title: 'Mobile APP',
            desc: 'Control device status anytime, anywhere, instant abnormal push notifications.',
            features: ['iOS/Android', 'Remote Control', 'QR Code Entry']
          }
        ]
      }
    }
  };

  const t = content[language];
  const pData = t.products;

  const tabs = [
    { id: 'sensors', label: t.tabs.sensors, icon: Activity },
    { id: 'gateways', label: t.tabs.gateways, icon: Router },
    { id: 'platform', label: t.tabs.platform, icon: LayoutDashboard },
  ];

  // Images mapping remains constant
  const images = {
    sensors: [
      'https://picsum.photos/400/300?random=10',
      'https://picsum.photos/400/300?random=11',
      'https://picsum.photos/400/300?random=12'
    ],
    gateways: [
      'https://picsum.photos/400/300?random=20',
      'https://picsum.photos/400/300?random=21'
    ],
    platform: [
      'https://picsum.photos/400/300?random=30',
      'https://picsum.photos/400/300?random=31'
    ]
  };

  return (
    <div className="pt-24 pb-20 bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-6">{t.title}</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            {t.desc}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-tech-600 text-white shadow-[0_0_15px_rgba(2,132,199,0.5)]'
                    : 'bg-slate-900 text-slate-400 border border-slate-800 hover:border-slate-600 hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4 mr-2" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode='wait'>
            {pData[activeTab].map((product, idx) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800 group hover:border-tech-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all"
              >
                <div className="h-48 overflow-hidden relative">
                   <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                   <img src={images[activeTab][idx]} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-cyan transition-colors">{product.title}</h3>
                  <p className="text-slate-400 text-sm mb-4 min-h-[40px]">{product.desc}</p>
                  
                  <div className="space-y-2">
                    {product.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-xs text-slate-300">
                        <Check className="w-3 h-3 text-neon-green mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <button className="mt-6 w-full py-2 bg-slate-800 hover:bg-tech-600 text-white rounded text-sm font-medium transition-colors">
                    {t.btnDetail}
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};