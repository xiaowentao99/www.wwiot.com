import { ref, computed } from 'vue';
import Navigation from './components/Navigation.js';
import Footer from './components/Footer.js';
import Home from './pages/Home.js';
import Company from './pages/Company.js';
import Advantages from './pages/Advantages.js';
import Products from './pages/Products.js';
import Scenarios from './pages/Scenarios.js';
import Support from './pages/Support.js';
import Contact from './pages/Contact.js';
import { Page } from './constants.js';

export default {
  components: {
    Navigation,
    Footer,
    Home,
    Company,
    Advantages,
    Products,
    Scenarios,
    Support,
    Contact
  },
  setup() {
    const currentPage = ref(Page.Home);
    const language = ref('zh');

    const setPage = (page) => {
      currentPage.value = page;
      window.scrollTo(0, 0);
    };

    const setLanguage = (lang) => {
      language.value = lang;
    };

    const currentComponent = computed(() => {
      switch (currentPage.value) {
        case Page.Home: return Home;
        case Page.Company: return Company;
        case Page.Advantages: return Advantages;
        case Page.Products: return Products;
        case Page.Scenarios: return Scenarios;
        case Page.Support: return Support;
        case Page.Contact: return Contact;
        default: return Home;
      }
    });

    return {
      currentPage,
      language,
      setPage,
      setLanguage,
      currentComponent
    };
  },
  template: `
    <div class="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-neon-cyan selection:text-slate-900">
      <Navigation 
        :currentPage="currentPage" 
        @update:currentPage="setPage" 
        :language="language"
        @update:language="setLanguage"
      />
      
      <main class="min-h-[calc(100vh-300px)]">
        <Transition name="fade" mode="out-in">
          <component 
            :is="currentComponent" 
            :language="language" 
            @setPage="setPage"
          />
        </Transition>
      </main>

      <Footer @setPage="setPage" :language="language" />
    </div>
  `
};