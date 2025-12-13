import { computed } from 'vue';
import { Signal, Battery, Layers, Globe2 } from 'lucide-vue-next';

export default {
  props: ['language'],
  setup(props) {
    const content = computed(() => {
      const data = {
        zh: {
          title: '核心优势',
          sub: '技术驱动创新，十年磨一剑，打造工业物联网领域的硬核竞争力',
          items: [
            {
              title: '深厚 LoRa 技术',
              desc: '10年无线通信与设备开发经验。自研协议栈，优化抗干扰能力，确保数据在复杂工业环境中稳定传输。'
            },
            {
              title: '极致低功耗感知',
              desc: '采用先进的电源管理算法。传感器电池寿命可达3-10年，大幅降低运维成本，适合难以供电的偏远地区。'
            },
            {
              title: '端到端整体闭环',
              desc: '从传感器硬件、网关设备到云平台、移动APP，提供一站式全栈解决方案，无缝兼容，部署零门槛。'
            },
            {
              title: '广泛行业覆盖',
              desc: '成功案例覆盖水务、能源、仓储、环境监测等多个垂直领域。成熟的场景化方案，即插即用。'
            }
          ],
          tableTitle: '技术优势对比',
          tableHeaders: ['技术指标', '万维物联网方案', '传统有线方案', '其他无线方案'],
          tableRows: [
            { label: '部署成本', v1: '低 (无线免布线)', v2: '高 (施工复杂)', v3: '中' },
            { label: '传输距离', v1: '1-15 公里', v2: '受线缆限制', v3: '短 (0.1-1公里)' },
            { label: '电池寿命', v1: '3-10 年', v2: '需外接电源', v3: '0.5-2 年' },
            { label: '抗干扰能力', v1: '强 (扩频技术)', v2: '强', v3: '中' },
          ]
        },
        en: {
          title: 'Core Advantages',
          sub: 'Innovation driven by technology, building hardcore competitiveness in the Industrial IoT field.',
          items: [
            {
              title: 'Deep LoRa Tech',
              desc: '10 years wireless dev experience. Self-developed stack, optimized anti-interference for stable data transmission in industry.'
            },
            {
              title: 'Ultra-low Power',
              desc: 'Advanced power algorithms. 3-10 years battery life, lowering maintenance costs, perfect for remote areas.'
            },
            {
              title: 'End-to-End Loop',
              desc: 'Sensors, Gateways, Cloud Platform, Mobile App. One-stop full-stack solution, seamless compatibility.'
            },
            {
              title: 'Wide Industry Coverage',
              desc: 'Success cases in Water, Energy, Storage, Environment monitoring. Mature scenario solutions, plug and play.'
            }
          ],
          tableTitle: 'Technical Comparison',
          tableHeaders: ['Indicator', 'Wanwei Solution', 'Wired Solution', 'Other Wireless'],
          tableRows: [
            { label: 'Deployment Cost', v1: 'Low (Wireless)', v2: 'High (Complex)', v3: 'Medium' },
            { label: 'Range', v1: '1-15 km', v2: 'Cable Limited', v3: 'Short (0.1-1km)' },
            { label: 'Battery Life', v1: '3-10 Years', v2: 'External Power', v3: '0.5-2 Years' },
            { label: 'Anti-interference', v1: 'Strong (Spread Spectrum)', v2: 'Strong', v3: 'Medium' },
          ]
        }
      };
      return data[props.language];
    });

    const icons = [Signal, Battery, Layers, Globe2];
    
    const advantageItems = computed(() => {
      return content.value.items.map((item, i) => ({
        ...item,
        icon: icons[i]
      }));
    });

    return { t: content, advantageItems };
  },
  template: `
    <div class="pt-24 pb-20 bg-slate-950 min-h-screen">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h1 class="text-4xl font-bold text-white mb-6">{{ t.title }}</h1>
          <p class="text-slate-400 max-w-2xl mx-auto">
            {{ t.sub }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div v-for="(adv, i) in advantageItems" :key="i" class="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-tech-500/50 hover:shadow-[0_0_20px_rgba(14,165,233,0.15)] transition-all group">
            <div class="w-16 h-16 bg-tech-900/50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <component :is="adv.icon" class="w-8 h-8 text-tech-400" />
            </div>
            <h3 class="text-2xl font-bold text-white mb-4">{{ adv.title }}</h3>
            <p class="text-slate-400 leading-relaxed">
              {{ adv.desc }}
            </p>
          </div>
        </div>

        <!-- Comparison Table -->
        <div class="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden">
          <div class="p-8 border-b border-slate-800">
            <h3 class="text-2xl font-bold text-white text-center">{{ t.tableTitle }}</h3>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full text-left text-sm text-slate-400">
              <thead class="bg-slate-950 text-xs uppercase text-slate-300">
                <tr>
                  <th v-for="(h, i) in t.tableHeaders" :key="i" :class="['px-6 py-4', i === 1 ? 'text-neon-cyan' : '']">{{ h }}</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-800">
                <tr v-for="(row, i) in t.tableRows" :key="i">
                  <td class="px-6 py-4 font-medium text-white">{{ row.label }}</td>
                  <td class="px-6 py-4 text-neon-green font-bold">{{ row.v1 }}</td>
                  <td class="px-6 py-4 text-red-400">{{ row.v2 }}</td>
                  <td class="px-6 py-4 text-yellow-500">{{ row.v3 }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  `
};