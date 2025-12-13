import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Company } from './pages/Company';
import { Advantages } from './pages/Advantages';
import { Products } from './pages/Products';
import { Scenarios } from './pages/Scenarios';
import { Support } from './pages/Support';
import { Contact } from './pages/Contact';
import { Page, Language } from './types';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);
  const [language, setLanguage] = useState<Language>('zh');

  const renderPage = () => {
    switch (currentPage) {
      case Page.Home:
        return <Home setPage={setCurrentPage} language={language} />;
      case Page.Company:
        return <Company language={language} />;
      case Page.Advantages:
        return <Advantages language={language} />;
      case Page.Products:
        return <Products language={language} />;
      case Page.Scenarios:
        return <Scenarios language={language} />;
      case Page.Support:
        return <Support language={language} />;
      case Page.Contact:
        return <Contact language={language} />;
      default:
        return <Home setPage={setCurrentPage} language={language} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-neon-cyan selection:text-slate-900">
      <Navigation 
        currentPage={currentPage} 
        setPage={setCurrentPage} 
        language={language}
        setLanguage={setLanguage}
      />
      
      <main className="min-h-[calc(100vh-300px)]">
        {renderPage()}
      </main>

      <Footer setPage={setCurrentPage} language={language} />
    </div>
  );
}

export default App;