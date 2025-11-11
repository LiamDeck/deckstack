import React from 'react';
import { BookOpen, Layers, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Layers className="w-8 h-8 text-slate-800" />
            <span className="text-2xl font-bold text-slate-800">DeckStack</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link to = "/blog">Blog</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm mb-8">
            <BookOpen className="w-4 h-4 text-slate-600" />
            <span className="text-sm text-slate-600">Wissen gestapelt, Ideen entfaltet</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            Dein Blog für<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-500">
              gestapelte Gedanken
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
            DeckStack bringt Ideen, Wissen und Inspiration zusammen. 
            Entdecke Artikel, die zum Nachdenken anregen und deine Perspektive erweitern.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-slate-800 text-white px-8 py-4 rounded-lg hover:bg-slate-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
              <span className="font-medium">Artikel entdecken</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white text-slate-800 px-8 py-4 rounded-lg hover:bg-slate-50 transition-all shadow-md border border-slate-200">
              <span className="font-medium">Newsletter abonnieren</span>
            </button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-24">
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
              <Layers className="w-6 h-6 text-slate-700" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Vielfältige Themen</h3>
            <p className="text-slate-600">
              Von Tech bis Lifestyle - entdecke Artikel aus verschiedenen Bereichen.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
              <BookOpen className="w-6 h-6 text-slate-700" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Tiefgründig</h3>
            <p className="text-slate-600">
              Artikel, die mehr als nur die Oberfläche kratzen und echten Mehrwert bieten.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
              <ArrowRight className="w-6 h-6 text-slate-700" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Regelmäßig</h3>
            <p className="text-slate-600">
              Neue Inhalte jeden Monat - bleib informiert und inspiriert.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 mt-20">
        <div className="border-t border-slate-200 pt-8 text-center text-slate-600">
          <p>© 2024 DeckStack. Alle Rechte vorbehalten.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
