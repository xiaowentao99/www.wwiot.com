import { computed } from 'vue';
import { ArrowRight, CheckCircle2 } from 'lucide-vue-next';
import DataFlowVisualizer from '../components/DataFlowVisualizer.js';
import { Page } from '../constants.js';

export default {
  props: ['language'],
  emits: ['setPage'],
  components: { ArrowRight, CheckCircle2, DataFlowVisualizer },
  setup(props, { emit }) {
    const content = computed(() => {
      const data = {
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
      return data[props.language];
    });

    const goToProducts = () => emit('setPage', Page.Products);
    const goToContact = () => emit('setPage', Page.Contact);

    return { t: content, goToProducts, goToContact };
  },
  template: `
    <div class="w-full">
      <!-- Hero Section -->
      <section class="relative pt-20 pb-32 overflow-hidden">
        <!-- Background Elements -->
        <div class="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div class="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-tech-600/20 blur-[100px]"></div>
          <div class="absolute top-[40%] -left-[10%] w-[500px] h-[500px] rounded-full bg-neon-purple/20 blur-[100px]"></div>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div class="flex flex-col lg:flex-row items-center gap-12">
            
            <!-- Left Content -->
            <div class="lg:w-1/2 opacity-0 animate-fade-in-up">
              <div class="inline-flex items-center px-3 py-1 rounded-full border border-tech-500/30 bg-tech-500/10 text-tech-300 text-sm font-medium mb-6">
                <span class="flex w-2 h-2 bg-neon-cyan rounded-full mr-2 animate-pulse"></span>
                {{ t.badge }}
              </div>
              <h1 class="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
                {{ t.heroTitle1 }} <span class="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-tech-500">{{ t.heroTitleSpan }}</span><br />
                {{ t.heroTitle2 }}
              </h1>
              <p class="text-lg text-slate-400 mb-8 leading-relaxed max-w-lg">
                {{ t.heroDesc }}
              </p>
              
              <div class="flex flex-wrap gap-4">
                <button 
                  @click="goToProducts"
                  class="px-8 py-3 bg-gradient-to-r from-tech-600 to-tech-500 hover:from-tech-500 hover:to-tech-400 text-white rounded-lg font-semibold shadow-[0_0_20px_rgba(14,165,233,0.3)] transition-all flex items-center"
                >
                  {{ t.btnExplore }} <ArrowRight class="ml-2 w-5 h-5" />
                </button>
                <button 
                  @click="goToContact"
                  class="px-8 py-3 bg-slate-800/50 hover:bg-slate-800 border border-slate-700 text-white rounded-lg font-semibold backdrop-blur-sm transition-all"
                >
                  {{ t.btnContact }}
                </button>
              </div>
            </div>

            <!-- Right Visual (Abstract Tech) -->
            <div class="lg:w-1/2 relative opacity-0 animate-fade-in-up [animation-delay:200ms]">
              <div class="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700 group">
                <img 
                  src="https://picsum.photos/800/600?grayscale&blur=2" 
                  alt="Industrial IoT" 
                  class="w-full h-auto object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                
                <!-- Overlay Card -->
                <div class="absolute bottom-6 left-6 right-6 bg-slate-900/90 backdrop-blur-md p-6 rounded-xl border border-slate-700">
                  <div class="flex items-center gap-4">
                    <div class="w-12 h-12 bg-neon-green/20 rounded-full flex items-center justify-center text-neon-green">
                       <CheckCircle2 class="w-6 h-6" />
                    </div>
                    <div>
                      <h3 class="text-white font-bold">{{ t.expTitle }}</h3>
                      <p class="text-slate-400 text-sm">{{ t.expSub }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Process Visualization Section -->
      <section class="py-16 bg-slate-950 relative">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <DataFlowVisualizer :language="language" />
        </div>
      </section>

      <!-- Features Grid -->
      <section class="py-20 bg-slate-900 border-t border-slate-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-3xl font-bold text-white mb-4">{{ t.whyTitle }}</h2>
            <div class="w-20 h-1 bg-gradient-to-r from-neon-cyan to-tech-500 mx-auto rounded-full"></div>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div 
              v-for="(item, idx) in t.features"
              :key="idx"
              class="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-tech-500/50 transition-all hover:-translate-y-1"
            >
              <div class="text-4xl mb-4">{{ item.icon }}</div>
              <h3 class="text-xl font-bold text-white mb-2">{{ item.title }}</h3>
              <p class="text-slate-400">{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  `
};