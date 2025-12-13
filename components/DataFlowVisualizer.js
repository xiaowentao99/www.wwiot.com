import { ref, onMounted, onUnmounted, computed } from 'vue';
import { Wifi, Server, Smartphone, Radio, Activity } from 'lucide-vue-next';

export default {
  props: ['language'],
  components: { Wifi, Server, Smartphone, Radio, Activity },
  setup(props) {
    const activeStep = ref(0);
    let intervalId = null;

    onMounted(() => {
      intervalId = setInterval(() => {
        activeStep.value = (activeStep.value + 1) % 4;
      }, 1500);
    });

    onUnmounted(() => {
      clearInterval(intervalId);
    });

    const content = computed(() => {
      const data = {
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
      return data[props.language || 'zh'];
    });

    const steps = computed(() => [
      { 
        id: 0, 
        label: content.value.steps[0].label, 
        sub: content.value.steps[0].sub,
        icon: Activity, 
        color: 'text-neon-green',
        bg: 'bg-neon-green/10',
        border: 'border-neon-green/50',
        shadow: '#10b981'
      },
      { 
        id: 1, 
        label: content.value.steps[1].label, 
        sub: content.value.steps[1].sub,
        icon: Radio, 
        color: 'text-tech-400',
        bg: 'bg-tech-400/10',
        border: 'border-tech-400/50',
        shadow: '#38bdf8'
      },
      { 
        id: 2, 
        label: content.value.steps[2].label, 
        sub: content.value.steps[2].sub,
        icon: Server, 
        color: 'text-neon-purple',
        bg: 'bg-neon-purple/10',
        border: 'border-neon-purple/50',
        shadow: '#8b5cf6'
      },
      { 
        id: 3, 
        label: content.value.steps[3].label, 
        sub: content.value.steps[3].sub,
        icon: Smartphone, 
        color: 'text-neon-cyan',
        bg: 'bg-neon-cyan/10',
        border: 'border-neon-cyan/50',
        shadow: '#06b6d4'
      },
    ]);

    return {
      activeStep,
      t: content,
      steps
    };
  },
  template: `
    <div class="w-full py-12 px-4 bg-slate-900/50 rounded-2xl border border-slate-800 backdrop-blur-sm relative overflow-hidden">
      <!-- Background Grid -->
      <div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      
      <div class="relative z-10">
        <div class="text-center mb-10">
          <h3 class="text-2xl font-bold text-white mb-2 font-mono">
            <span class="text-neon-cyan">&lt;</span> {{ t.title }} <span class="text-neon-cyan">/&gt;</span>
          </h3>
          <p class="text-slate-400 text-sm">{{ t.sub }}</p>
        </div>

        <div class="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto gap-8 relative">
          
          <!-- Animated Connecting Line (Desktop) -->
          <div class="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-slate-800 -translate-y-1/2 z-0 overflow-hidden">
             <div class="h-full bg-gradient-to-r from-transparent via-neon-cyan to-transparent w-1/3 blur-sm animate-scan"></div>
          </div>

          <div v-for="(step, index) in steps" :key="index" class="relative z-10 flex flex-col items-center w-full md:w-auto group">
            <!-- Node Circle -->
            <div 
              :class="[
                'w-20 h-20 rounded-full flex items-center justify-center border-2 backdrop-blur-md transition-all duration-500 relative',
                step.bg,
                activeStep === index ? step.border : 'border-slate-700',
                activeStep === index ? 'scale-110' : 'scale-100'
              ]"
              :style="{ boxShadow: activeStep === index ? '0 0 20px ' + step.shadow : 'none' }"
            >
              <component :is="step.icon" :class="['w-8 h-8 transition-colors', activeStep === index ? step.color : 'text-slate-500']" />
              
              <!-- Ping Animation for active node -->
              <span v-if="activeStep === index" class="absolute inline-flex h-full w-full rounded-full bg-current opacity-20 animate-ping"></span>
            </div>

            <!-- Text Content -->
            <div class="mt-4 text-center">
              <h4 :class="['font-bold transition-colors duration-300', activeStep === index ? 'text-white' : 'text-slate-500']">
                {{ step.label }}
              </h4>
              <p class="text-xs text-slate-500 mt-1 font-mono">{{ step.sub }}</p>
            </div>
            
            <!-- Mobile Connector -->
            <div v-if="index < steps.length - 1" class="md:hidden w-1 h-8 bg-slate-800 my-2 relative overflow-hidden">
               <div 
                  class="w-full bg-neon-cyan absolute top-0 transition-[height] duration-500 ease-out"
                  :style="{ height: activeStep > index ? '100%' : '0%' }"
               ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
};