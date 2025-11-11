// src/App.js
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { BookOpen, Layers, ArrowRight } from 'lucide-react';
import Blog from './Blog';

// Home-Komponente für die Startseite
function Home() {
  return (
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
          <button className="group bg-slate-800 text-white px-8 py-4 rounded-lg hover:bg-slate-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-2" type="button">
            <span className="font-medium">Artikel entdecken</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="bg-white text-slate-800 px-8 py-4 rounded-lg hover:bg-slate-50 transition-all shadow-md border border-slate-200" type="button">
            <span className="font-medium">Newsletter abonnieren</span>
          </button>
        </div>
      </div>

      {/* Feature Cards und weitere Home-Inhalte können hier ebenfalls rein */}
    </main>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation (immer sichtbar) */}
      <nav className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Layers className="w-8 h-8 text-slate-800" />
            <span className="text-2xl font-bold text-slate-800">DeckStack</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link to="/">Home</Link> {/* Link zur Startseite */}
            <Link to="/blog">Blog</Link> {/* Link zum Blog */}
          </div>
        </div>
      </nav>

      {/* Routing-Bereich */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>

      {/* Footer (immer sichtbar) */}
      <footer className="container mx-auto px-6 py-12 mt-20">
        <div className="border-t border-slate-200 pt-8 text-center text-slate-600">
          <p>© 2025 DeckStack. Alle Rechte vorbehalten.</p>
        </div>
      </footer>
    </div>

  );
}

export default App;
