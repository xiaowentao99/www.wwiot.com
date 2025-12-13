import { ref, computed } from 'vue';
import { Thermometer, Cpu, CloudFog, Gauge, Activity, Router, Check } from 'lucide-vue-next';

export default {
  props: ['language'],
  components: { Thermometer, Cpu, CloudFog, Gauge, Activity, Router, Check },
  setup(props) {
    const activeTab = ref('temp');

    const content = computed(() => {
      const data = {
        zh: {
          title: '产品与解决方案',
          desc: '覆盖从感知、传输到边缘计算的全栈式工业物联网产品体系',
          tabs: {
            temp: '测温类 (WW-1x)',
            io: 'IO控制器 (WW-2x)',
            gas: '气体检测 (WW-3x)',
            pressure: '压力液位 (WW-4x)',
            daq: '数采仪 (WW-Dx)',
            gateway: '边缘网关 (WW-Gx)'
          },
          btnDetail: '查看详情',
          products: {
            temp: [
              {
                title: 'WW-101 无线温湿度传感器',
                desc: '基础型环境监测终端，适用于仓库、机房等场景，内置高精度探头。',
                features: ['LoRaWAN/NB-IoT', '温湿一体', '3年续航']
              },
              {
                title: 'WW-102 工业级PT100变送器',
                desc: '支持外接PT100铂电阻，测温范围宽，适合管道、高温炉监测。',
                features: ['-200℃ ~ +600℃', 'IP67防护', '分体式探头']
              },
              {
                title: 'WW-103 红外非接触测温仪',
                desc: '针对旋转设备、高压设备进行非接触式温度实时监测。',
                features: ['毫秒级响应', '激光瞄准', 'RS485/LoRa']
              },
              {
                title: 'WW-105 投入式温度变送器',
                desc: '专用于液体内部温度监测，全不锈钢封装，防腐蚀。',
                features: ['防水等级IP68', '耐酸碱腐蚀', '深水适用']
              },
              {
                title: 'WW-108 多点土壤温湿仪',
                desc: '农业专用，单探杆支持3-5层土壤温湿度同时监测。',
                features: ['分层监测', '抗盐碱干扰', '太阳能供电可选']
              }
            ],
            io: [
              {
                title: 'WW-201 双路开关量控制器',
                desc: '支持2路DI输入与2路DO输出，实现远程控制与状态反馈。',
                features: ['2DI + 2DO', '继电器输出', '本地逻辑联动']
              },
              {
                title: 'WW-205 模拟量采集模块',
                desc: '支持4-20mA/0-5V标准模拟信号采集，高精度ADC转换。',
                features: ['4路AI输入', '16位分辨率', '支持两线制仪表']
              },
              {
                title: 'WW-210 大功率继电器控制器',
                desc: '内置30A大功率继电器，直接驱动水泵、风机等工业负载。',
                features: ['AC 220V供电', '过载保护', '手动/自动切换']
              },
              {
                title: 'WW-220 脉冲计数器',
                desc: '对接流量计、电表等脉冲输出设备，实现能耗数据无线上传。',
                features: ['高速光耦隔离', '断电记忆', '防抖动算法']
              },
              {
                title: 'WW-280 混合型远程IO模块',
                desc: '集成了DI、DO、AI、RS485等多种接口的综合型控制终端。',
                features: ['多接口集成', '导轨式安装', 'Modbus RTU']
              }
            ],
            gas: [
              {
                title: 'WW-301 一氧化碳(CO)传感器',
                desc: '高灵敏度电化学探头，用于地下车库、锅炉房等场景。',
                features: ['0-1000ppm', '声光报警', '低功耗设计']
              },
              {
                title: 'WW-305 可燃气体(CH4)探测器',
                desc: '催化燃烧/激光原理，快速检测天然气、液化气泄漏。',
                features: ['防爆设计Ex d IIC', '极速响应', '自检功能']
              },
              {
                title: 'WW-310 硫化氢(H2S)传感器',
                desc: '针对污水处理、化工厂等恶劣环境的剧毒气体监测。',
                features: ['抗中毒设计', 'IP66防护', '数据长期稳定']
              },
              {
                title: 'WW-320 氧气(O2)浓度监测仪',
                desc: '监测密闭空间氧气含量，防止缺氧窒息或富氧爆炸。',
                features: ['全量程线性', '温度补偿', '长寿命探头']
              },
              {
                title: 'WW-350 复合气体检测仪',
                desc: '同时监测4种气体（EX, CO, H2S, O2），全面保障工业安全。',
                features: ['四合一检测', 'OLED显示屏', '本地存储']
              }
            ],
            pressure: [
              {
                title: 'WW-401 无线压力变送器',
                desc: '替代传统指针表，用于消防管网、供水管道压力实时监测。',
                features: ['LCD数显', '量程可定制', '过压保护']
              },
              {
                title: 'WW-405 投入式液位计',
                desc: '静压式液位测量，适用于水箱、水井、河道水位监测。',
                features: ['量程0-200m', '防堵塞设计', '通气电缆']
              },
              {
                title: 'WW-410 微差压传感器',
                desc: '监测洁净室、暖通管道的微小压力差，确保空气流向。',
                features: ['高精度±1Pa', '零点校准', '风管安装']
              },
              {
                title: 'WW-420 防爆型压力监测终端',
                desc: '专为油气田、化工管道设计的本安防爆型压力监测设备。',
                features: ['Ex ia IIC T4', '铸铝外壳', '抗震动']
              },
              {
                title: 'WW-450 超声波液位计',
                desc: '非接触式液位测量，适合强腐蚀性液体或污水监测。',
                features: ['盲区小', '智能算法', '内置温度补偿']
              }
            ],
            daq: [
              {
                title: 'WW-D01 低功耗遥测终端RTU',
                desc: '电池/太阳能供电，集数据采集、存储、传输于一体。',
                features: ['IP68防护', '多通道采集', '远程配置']
              },
              {
                title: 'WW-D05 水利遥测数采仪',
                desc: '符合水利部SL651规约，专用于水文水资源监测项目。',
                features: ['北斗/4G双模', '图片抓拍', '大容量存储']
              },
              {
                title: 'WW-D10 振动频谱采集仪',
                desc: '高频采样采集设备振动波形，用于故障诊断与边缘分析。',
                features: ['10KHz采样率', 'FFT变换', '三轴加速度']
              },
              {
                title: 'WW-D20 环保数采仪',
                desc: '对接CEMS、COD等环保监测设备，支持HJ212协议上传。',
                features: ['数据断点续传', '触控屏操作', '多中心发送']
              },
              {
                title: 'WW-D30 能源管理采集器',
                desc: '集中采集水、电、气、热表数据，构建能耗管理网络。',
                features: ['M-Bus/RS485', '支持64台设备', '边缘计算']
              }
            ],
            gateway: [
              {
                title: 'WW-G01 室内LoRaWAN轻量网关',
                desc: '小巧美观，适用于楼宇、园区等室内场景的信号覆盖。',
                features: ['8通道', 'WiFi/以太网', 'USB供电']
              },
              {
                title: 'WW-G05 室外工业级基站',
                desc: '全天候室外宏基站，覆盖半径可达15公里，电信级可靠性。',
                features: ['IP67防水', '防雷击', 'GPS同步']
              },
              {
                title: 'WW-G10 边缘计算网关',
                desc: '内置高性能处理器，支持Docker容器，本地处理复杂逻辑。',
                features: ['ARM Cortex-A53', 'Python编程', '断网缓存']
              },
              {
                title: 'WW-G20 5G工业路由器',
                desc: '提供千兆高速网络接入，支持视频回传与工业协议转换。',
                features: ['5G全网通', '双SIM卡备份', 'VPN组网']
              },
              {
                title: 'WW-G30 太阳能野外网关套装',
                desc: '集成太阳能供电系统与4G回传，解决无电无网地区部署难题。',
                features: ['自给自足', '智能充放电', '风阻优化']
              }
            ]
          }
        },
        en: {
          title: 'Products & Solutions',
          desc: 'Full-stack IIoT product system from sensing, transmission to edge computing.',
          tabs: {
            temp: 'Temp/Hum (WW-1x)',
            io: 'IO Control (WW-2x)',
            gas: 'Gas Detect (WW-3x)',
            pressure: 'Pressure (WW-4x)',
            daq: 'DAQ Unit (WW-Dx)',
            gateway: 'Edge Gateway (WW-Gx)'
          },
          btnDetail: 'View Details',
          products: {
            temp: [
              {
                title: 'WW-101 Wireless Temp/Hum Sensor',
                desc: 'Basic environmental monitoring terminal for warehouses and server rooms.',
                features: ['LoRaWAN/NB-IoT', 'High Precision', '3-Year Battery']
              },
              {
                title: 'WW-102 Industrial PT100 Transmitter',
                desc: 'Supports external PT100 probes, wide range for pipes and furnaces.',
                features: ['-200℃ ~ +600℃', 'IP67 Rated', 'Split Probe']
              },
              {
                title: 'WW-103 IR Non-contact Thermometer',
                desc: 'Real-time non-contact monitoring for rotating or high-voltage equipment.',
                features: ['ms Response', 'Laser Aiming', 'RS485/LoRa']
              },
              {
                title: 'WW-105 Immersion Temp Transmitter',
                desc: 'Designed for liquid temperature monitoring, anti-corrosion stainless steel.',
                features: ['IP68 Waterproof', 'Acid/Alkali Resistant', 'Deep Water']
              },
              {
                title: 'WW-108 Multi-point Soil Sensor',
                desc: 'Agriculture specific, single probe monitors 3-5 soil layers simultaneously.',
                features: ['Layered Monitor', 'Salt Resistant', 'Solar Optional']
              }
            ],
            io: [
              {
                title: 'WW-201 2-Ch Switch Controller',
                desc: 'Supports 2 DI inputs and 2 DO outputs for remote control and feedback.',
                features: ['2DI + 2DO', 'Relay Output', 'Local Logic']
              },
              {
                title: 'WW-205 Analog Input Module',
                desc: 'Supports 4-20mA/0-5V standard analog signal acquisition.',
                features: ['4-Ch AI', '16-bit ADC', '2-Wire Support']
              },
              {
                title: 'WW-210 High Power Relay Controller',
                desc: 'Built-in 30A relay to directly drive pumps, fans and industrial loads.',
                features: ['AC 220V Power', 'Overload Protection', 'Manual/Auto']
              },
              {
                title: 'WW-220 Pulse Counter',
                desc: 'Connects to flow meters/energy meters for wireless consumption data.',
                features: ['Opto-isolation', 'Power-off Memory', 'Anti-jitter']
              },
              {
                title: 'WW-280 Hybrid Remote IO',
                desc: 'Comprehensive control terminal integrating DI, DO, AI, and RS485.',
                features: ['Multi-interface', 'DIN Rail', 'Modbus RTU']
              }
            ],
            gas: [
              {
                title: 'WW-301 CO Sensor',
                desc: 'High sensitivity electrochemical probe for garages and boiler rooms.',
                features: ['0-1000ppm', 'Alarm Light', 'Low Power']
              },
              {
                title: 'WW-305 Combustible Gas (CH4) Detector',
                desc: 'Catalytic combustion/laser principle for rapid leak detection.',
                features: ['Explosion-proof', 'Fast Response', 'Self-check']
              },
              {
                title: 'WW-310 H2S Sensor',
                desc: 'Toxic gas monitoring for sewage treatment and chemical plants.',
                features: ['Anti-poisoning', 'IP66 Rated', 'Long Stability']
              },
              {
                title: 'WW-320 Oxygen (O2) Monitor',
                desc: 'Monitor oxygen levels in confined spaces to prevent hypoxia.',
                features: ['Full Range Linear', 'Temp Comp', 'Long Life']
              },
              {
                title: 'WW-350 Multi-Gas Detector',
                desc: 'Simultaneously monitors 4 gases (EX, CO, H2S, O2) for safety.',
                features: ['4-in-1', 'OLED Display', 'Local Storage']
              }
            ],
            pressure: [
              {
                title: 'WW-401 Wireless Pressure Transmitter',
                desc: 'Replaces traditional gauges for real-time fire and water pipe monitoring.',
                features: ['LCD Display', 'Custom Range', 'Over-pressure Protect']
              },
              {
                title: 'WW-405 Submersible Level Transmitter',
                desc: 'Hydrostatic level measurement for tanks, wells, and rivers.',
                features: ['0-200m Range', 'Anti-clog', 'Vented Cable']
              },
              {
                title: 'WW-410 Micro-Differential Pressure',
                desc: 'Monitor tiny pressure diffs in clean rooms and HVAC ducts.',
                features: ['±1Pa Accuracy', 'Zero Cal', 'Duct Mount']
              },
              {
                title: 'WW-420 Explosion-proof Pressure Monitor',
                desc: 'Intrinsically safe design for oil, gas, and chemical pipelines.',
                features: ['Ex ia IIC T4', 'Cast Aluminum', 'Vibration Resistant']
              },
              {
                title: 'WW-450 Ultrasonic Level Meter',
                desc: 'Non-contact level measurement for corrosive liquids or sewage.',
                features: ['Small Blind Zone', 'Smart Algo', 'Temp Comp']
              }
            ],
            daq: [
              {
                title: 'WW-D01 Low Power RTU',
                desc: 'Battery/Solar powered, integrates data collection, storage, and transmission.',
                features: ['IP68 Rated', 'Multi-channel', 'Remote Config']
              },
              {
                title: 'WW-D05 Hydrology Telemetry Unit',
                desc: 'Compliant with SL651 protocol, dedicated for hydrology monitoring.',
                features: ['BeiDou/4G', 'Image Capture', 'Large Storage']
              },
              {
                title: 'WW-D10 Vibration Spectrum Analyzer',
                desc: 'High-frequency sampling of vibration waveforms for fault diagnosis.',
                features: ['10KHz Sampling', 'FFT Transform', '3-Axis Accel']
              },
              {
                title: 'WW-D20 Environmental DAQ',
                desc: 'Connects to CEMS/COD devices, supports HJ212 protocol upload.',
                features: ['Resume on Break', 'Touch Screen', 'Multi-center']
              },
              {
                title: 'WW-D30 Energy Data Collector',
                desc: 'Collects water, electricity, gas, heat meter data for energy management.',
                features: ['M-Bus/RS485', 'Supports 64 Devs', 'Edge Computing']
              }
            ],
            gateway: [
              {
                title: 'WW-G01 Indoor LoRaWAN Lite',
                desc: 'Compact and aesthetic, suitable for indoor signal coverage in buildings.',
                features: ['8-Channel', 'WiFi/Eth', 'USB Power']
              },
              {
                title: 'WW-G05 Outdoor Industrial Base Station',
                desc: 'All-weather outdoor macro station, 15km radius, carrier-grade reliability.',
                features: ['IP67 Waterproof', 'Lightning Proof', 'GPS Sync']
              },
              {
                title: 'WW-G10 Edge Computing Gateway',
                desc: 'High-perf processor, supports Docker containers for local logic processing.',
                features: ['ARM Cortex-A53', 'Python Support', 'Offline Cache']
              },
              {
                title: 'WW-G20 5G Industrial Router',
                desc: 'Provides gigabit high-speed access, video backhaul and protocol conversion.',
                features: ['5G Full Net', 'Dual SIM', 'VPN']
              },
              {
                title: 'WW-G30 Solar Field Gateway Kit',
                desc: 'Integrated solar power and 4G backhaul for off-grid deployment.',
                features: ['Self-sufficient', 'Smart Charge', 'Wind Optimized']
              }
            ]
          }
        }
      };
      return data[props.language];
    });

    const tabs = computed(() => [
      { id: 'temp', label: content.value.tabs.temp, icon: Thermometer },
      { id: 'io', label: content.value.tabs.io, icon: Cpu },
      { id: 'gas', label: content.value.tabs.gas, icon: CloudFog },
      { id: 'pressure', label: content.value.tabs.pressure, icon: Gauge },
      { id: 'daq', label: content.value.tabs.daq, icon: Activity },
      { id: 'gateway', label: content.value.tabs.gateway, icon: Router },
    ]);

    // Helper to generate distinct images for categories
    const getImages = (category) => {
      const bases = {
        temp: 100, io: 200, gas: 300, pressure: 400, daq: 500, gateway: 600
      };
      const baseId = bases[category] || 100;
      return Array.from({ length: 5 }, (_, i) => `https://picsum.photos/400/300?random=${baseId + i}`);
    };

    const currentProducts = computed(() => {
      const prods = content.value.products[activeTab.value];
      const imgs = getImages(activeTab.value);
      return prods.map((p, i) => ({
        ...p,
        img: imgs[i]
      }));
    });

    return { activeTab, t: content, tabs, currentProducts };
  },
  template: `
    <div class="pt-24 pb-20 bg-slate-950 min-h-screen">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h1 class="text-4xl font-bold text-white mb-6">{{ t.title }}</h1>
          <p class="text-slate-400 max-w-2xl mx-auto">
            {{ t.desc }}
          </p>
        </div>

        <!-- Tabs -->
        <div class="flex flex-wrap justify-center gap-4 mb-16">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            @click="activeTab = tab.id"
            :class="[
              'flex items-center px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 border',
              activeTab === tab.id
                ? 'bg-tech-600 text-white border-tech-500 shadow-[0_0_15px_rgba(2,132,199,0.5)]'
                : 'bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-600 hover:text-white'
            ]"
          >
            <component :is="tab.icon" class="w-4 h-4 mr-2" />
            {{ tab.label }}
          </button>
        </div>

        <!-- Content Grid -->
        <Transition name="fade" mode="out-in">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" :key="activeTab">
            <div
              v-for="(product, idx) in currentProducts"
              :key="product.title"
              class="bg-slate-900 rounded-xl overflow-hidden border border-slate-800 group hover:border-tech-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all animate-fade-in-up"
              :style="{ animationDelay: idx * 100 + 'ms' }"
            >
              <div class="h-48 overflow-hidden relative">
                 <div class="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                 <img :src="product.img" :alt="product.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                 
                 <!-- Tag -->
                 <div class="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-sm px-2 py-1 rounded text-xs font-mono text-neon-cyan border border-tech-500/30">
                    {{ product.title.split(' ')[0] }}
                 </div>
              </div>
              <div class="p-6">
                <h3 class="text-lg font-bold text-white mb-3 group-hover:text-neon-cyan transition-colors line-clamp-1" :title="product.title">{{ product.title.split(' ').slice(1).join(' ') || product.title }}</h3>
                <p class="text-slate-400 text-sm mb-4 min-h-[40px] line-clamp-2" :title="product.desc">{{ product.desc }}</p>
                
                <div class="space-y-2 mb-6">
                  <div v-for="(feature, i) in product.features" :key="i" class="flex items-center text-xs text-slate-300">
                    <Check class="w-3 h-3 text-neon-green mr-2 flex-shrink-0" />
                    {{ feature }}
                  </div>
                </div>
                
                <button class="w-full py-2 bg-slate-800 hover:bg-tech-600 text-white rounded text-sm font-medium transition-colors border border-slate-700 hover:border-tech-500">
                  {{ t.btnDetail }}
                </button>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  `
};