import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Language } from '../types';

interface ContactProps {
  language: Language;
}

export const Contact: React.FC<ContactProps> = ({ language }) => {
  const content = {
    zh: {
      title: '联系我们',
      desc: '无论您有任何疑问或合作意向，我们的团队都将竭诚为您提供专业的咨询和支持服务。',
      addressTitle: '公司地址',
      address: '南京市江宁区秣陵街道胜利路89号',
      phoneTitle: '客服热线',
      emailTitle: '电子邮箱',
      formTitle: '发送咨询',
      name: '姓名',
      namePH: '请输入您的姓名',
      phone: '电话',
      phonePH: '请输入联系方式',
      msg: '需求描述',
      msgPH: '请简述您的需求...',
      submit: '提交咨询'
    },
    en: {
      title: 'Contact Us',
      desc: 'Whether you have any questions or cooperation intentions, our team will provide you with professional consultation and support services.',
      addressTitle: 'Company Address',
      address: 'No. 89 Shengli Road, Moling Street, Jiangning District, Nanjing',
      phoneTitle: 'Hotline',
      emailTitle: 'Email',
      formTitle: 'Send Inquiry',
      name: 'Name',
      namePH: 'Enter your name',
      phone: 'Phone',
      phonePH: 'Enter your phone number',
      msg: 'Description',
      msgPH: 'Describe your needs...',
      submit: 'Submit Inquiry'
    }
  };

  const t = content[language];

  return (
    <div className="pt-24 pb-20 bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h1 className="text-4xl font-bold text-white mb-6">{t.title}</h1>
            <p className="text-slate-400 mb-10">
              {t.desc}
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mr-6 border border-slate-800">
                  <MapPin className="w-6 h-6 text-neon-cyan" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">{t.addressTitle}</h4>
                  <p className="text-slate-400">{t.address}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mr-6 border border-slate-800">
                  <Phone className="w-6 h-6 text-neon-cyan" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">{t.phoneTitle}</h4>
                  <p className="text-slate-400">13675120926</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mr-6 border border-slate-800">
                  <Mail className="w-6 h-6 text-neon-cyan" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">{t.emailTitle}</h4>
                  <p className="text-slate-400">info@wwiot.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-6">{t.formTitle}</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">{t.name}</label>
                <input type="text" id="name" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-tech-500 focus:ring-1 focus:ring-tech-500 transition-colors" placeholder={t.namePH} />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-400 mb-2">{t.phone}</label>
                <input type="tel" id="phone" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-tech-500 focus:ring-1 focus:ring-tech-500 transition-colors" placeholder={t.phonePH} />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">{t.msg}</label>
                <textarea id="message" rows={4} className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-tech-500 focus:ring-1 focus:ring-tech-500 transition-colors" placeholder={t.msgPH} />
              </div>
              
              <button type="button" className="w-full bg-tech-600 hover:bg-tech-500 text-white font-bold py-3 rounded-lg shadow-lg transition-colors">
                {t.submit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};