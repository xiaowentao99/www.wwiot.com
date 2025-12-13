import { computed } from 'vue';
import { Page } from '../constants.js';

export default {
  props: ['language'],
  emits: ['setPage'],
  setup(props, { emit }) {
    const content = computed(() => {
      const data = {
        zh: {
          desc: '专注于低功耗无线通讯技术与工业物联网解决方案的研发与应用。连接万物，感知未来。',
          links: '快速链接',
          support: '服务支持',
          contact: '联系方式',
          address: '南京市江宁区秣陵街道胜利路89号',
          rights: '© 2024 万维物联网（南京）有限公司. 保留所有权利.',
          nav: {
            home: '首页', company: '公司概况', adv: '核心优势', prod: '产品与方案',
            scen: '应用场景', supp: '技术支持', cont: '联系我们'
          }
        },
        en: {
          desc: 'Focusing on R&D and application of low-power wireless communication technology and industrial IoT solutions. Connecting everything, sensing the future.',
          links: 'Quick Links',
          support: 'Service & Support',
          contact: 'Contact Us',
          address: 'No. 89 Shengli Road, Moling Street, Jiangning District, Nanjing',
          rights: '© 2024 Wanwei IoT (Nanjing) Co., Ltd. All Rights Reserved.',
          nav: {
            home: 'Home', company: 'Company', adv: 'Advantages', prod: 'Products',
            scen: 'Scenarios', supp: 'Support', cont: 'Contact'
          }
        }
      };
      return data[props.language];
    });

    const goToPage = (page) => {
      emit('setPage', page);
    };

    return {
      t: content,
      Page,
      goToPage
    };
  },
  template: `
    <footer class="bg-slate-950 border-t border-slate-800 pt-12 pb-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div class="col-span-1">
            <h3 class="text-xl font-bold text-white mb-4">WWIOT</h3>
            <p class="text-slate-400 text-sm leading-relaxed">
              {{ t.desc }}
            </p>
          </div>
          
          <div>
            <h4 class="text-lg font-semibold text-slate-200 mb-4">{{ t.links }}</h4>
            <ul class="space-y-2 text-sm text-slate-400">
              <li><button @click="goToPage(Page.Home)" class="hover:text-neon-cyan transition-colors">{{ t.nav.home }}</button></li>
              <li><button @click="goToPage(Page.Company)" class="hover:text-neon-cyan transition-colors">{{ t.nav.company }}</button></li>
              <li><button @click="goToPage(Page.Advantages)" class="hover:text-neon-cyan transition-colors">{{ t.nav.adv }}</button></li>
              <li><button @click="goToPage(Page.Products)" class="hover:text-neon-cyan transition-colors">{{ t.nav.prod }}</button></li>
            </ul>
          </div>

          <div>
            <h4 class="text-lg font-semibold text-slate-200 mb-4">{{ t.support }}</h4>
            <ul class="space-y-2 text-sm text-slate-400">
              <li><button @click="goToPage(Page.Scenarios)" class="hover:text-neon-cyan transition-colors">{{ t.nav.scen }}</button></li>
              <li><button @click="goToPage(Page.Support)" class="hover:text-neon-cyan transition-colors">{{ t.nav.supp }}</button></li>
              <li><button @click="goToPage(Page.Contact)" class="hover:text-neon-cyan transition-colors">{{ t.nav.cont }}</button></li>
            </ul>
          </div>

          <div>
            <h4 class="text-lg font-semibold text-slate-200 mb-4">{{ t.contact }}</h4>
            <ul class="space-y-3 text-sm text-slate-400">
              <li class="flex items-start">
                <span class="text-tech-400 mr-2">📍</span>
                {{ t.address }}
              </li>
              <li class="flex items-center">
                <span class="text-tech-400 mr-2">📞</span>
                13675120926
              </li>
              <li class="flex items-center">
                <span class="text-tech-400 mr-2">✉️</span>
                info@wwiot.com
              </li>
            </ul>
          </div>
        </div>
        
        <div class="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>{{ t.rights }}</p>
          <div class="flex space-x-6 mt-4 md:mt-0">
            <span class="cursor-pointer hover:text-white transition-colors">WeChat</span>
            <span class="cursor-pointer hover:text-white transition-colors">Weibo</span>
            <span class="cursor-pointer hover:text-white transition-colors">LinkedIn</span>
          </div>
        </div>
      </div>
    </footer>
  `
};