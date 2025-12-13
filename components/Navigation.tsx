import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Page, NavItem, Language } from '../types';

interface NavigationProps {
  currentPage: Page;
  setPage: (page: Page) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
}

const navItems: NavItem[] = [
  { id: Page.Home, label: { zh: '首页', en: 'Home' } },
  { id: Page.Company, label: { zh: '公司概况', en: 'Company' } },
  { id: Page.Advantages, label: { zh: '核心优势', en: 'Advantages' } },
  { id: Page.Products, label: { zh: '产品与方案', en: 'Products' } },
  { id: Page.Scenarios, label: { zh: '应用场景', en: 'Scenarios' } },
  { id: Page.Support, label: { zh: '技术支持', en: 'Support' } },
  { id: Page.Contact, label: { zh: '联系我们', en: 'Contact' } },
];

export const Navigation: React.FC<NavigationProps> = ({ currentPage, setPage, language, setLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'zh' ? 'en' : 'zh');
  };

  return (
    <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center cursor-pointer" onClick={() => setPage(Page.Home)}>
            <img 
              src="https://file.302.ai/gpt/imgs/20250221/3c7b280380ad4535b62e49c952737666.png" 
              alt="WWIOT Logo" 
              className="h-10 w-auto object-contain"
            />
          </div>
          
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setPage(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    currentPage === item.id
                      ? 'text-neon-cyan bg-slate-800 shadow-[0_0_10px_rgba(6,182,212,0.2)]'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {item.label[language]}
                </button>
              ))}
              
              {/* Language Toggle Desktop */}
              <button 
                onClick={toggleLanguage}
                className="flex items-center ml-4 px-3 py-1 rounded-full border border-slate-700 hover:border-neon-cyan text-xs font-mono text-slate-300 hover:text-white transition-colors"
              >
                <Globe className="w-3 h-3 mr-2" />
                <span className={language === 'zh' ? 'text-neon-cyan' : 'text-slate-500'}>CN</span>
                <span className="mx-1 text-slate-600">/</span>
                <span className={language === 'en' ? 'text-neon-cyan' : 'text-slate-500'}>EN</span>
              </button>
            </div>
          </div>
          
          <div className="-mr-2 flex lg:hidden items-center gap-4">
             {/* Language Toggle Mobile */}
             <button 
                onClick={toggleLanguage}
                className="flex items-center px-2 py-1 rounded border border-slate-700 text-xs font-mono text-slate-300"
              >
                <span className={language === 'zh' ? 'text-neon-cyan' : ''}>CN</span>
                <span className="mx-1">/</span>
                <span className={language === 'en' ? 'text-neon-cyan' : ''}>EN</span>
              </button>
              
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setPage(item.id);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  currentPage === item.id
                    ? 'text-white bg-tech-600'
                    : 'text-slate-300 hover:text-white hover:bg-slate-700'
                }`}
              >
                {item.label[language]}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};