// src/App.js
import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Layers, Mail, Linkedin, Instagram, Menu, X } from 'lucide-react';
import Blog from './Blog';
import Home from './Home';
import Kontakt from './Kontakt';
import UeberMich from './UeberMich';
import BlogPost from './BlogPost';


function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation (immer sichtbar, mobile-first) */}
      <nav className="bg-white/80 backdrop-blur border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-4 md:px-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 group">
              <Layers className="w-7 h-7 text-slate-800 group-hover:text-indigo-600 transition-colors" />
              <span className="text-xl md:text-2xl font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">
                DeckStack
              </span>
            </Link>


            <div className="flex items-center space-x-2">
              {/* Desktop links (hidden on mobile) */}
              <div className="hidden md:flex items-center space-x-2 text-sm md:text-base">
                <Link to="/" className="text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 px-3 py-2 rounded-md transition-colors focus:outline-none">
                  Home
                </Link>
                <Link to="/blog" className="text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 px-3 py-2 rounded-md transition-colors focus:outline-none">
                  Blog
                </Link>
                <Link to="/uebermich" className="text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 px-3 py-2 rounded-md transition-colors focus:outline-none">
                  Über mich
                </Link>
                <Link to="/kontakt" className="text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 px-3 py-2 rounded-md transition-colors focus:outline-none">
                  Kontakt
                </Link>
              </div>


              {/* Mobile menu button */}
              <button
                onClick={() => setMobileOpen((s) => !s)}
                className="md:hidden p-2 rounded-md text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none transition-colors"
                aria-label={mobileOpen ? 'Schließe Menü' : 'Öffne Menü'}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>


      {/* Mobile dropdown menu (visible when mobileOpen) */}
      {mobileOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 py-3 md:px-6">
            <div className="flex flex-col gap-2 text-slate-700 text-base">
              <Link to="/" onClick={() => setMobileOpen(false)} className="py-2 px-3 rounded hover:bg-indigo-50 hover:text-indigo-600 transition-colors focus:outline-none">
                Home
              </Link>
              <Link to="/blog" onClick={() => setMobileOpen(false)} className="py-2 px-3 rounded hover:bg-indigo-50 hover:text-indigo-600 transition-colors focus:outline-none">
                Blog
              </Link>
              <Link to="/uebermich" onClick={() => setMobileOpen(false)} className="py-2 px-3 rounded hover:bg-indigo-50 hover:text-indigo-600 transition-colors focus:outline-none">
                Über mich
              </Link>
              <Link to="/kontakt" onClick={() => setMobileOpen(false)} className="py-2 px-3 rounded hover:bg-indigo-50 hover:text-indigo-600 transition-colors focus:outline-none">
                Kontakt
              </Link>
            </div>
          </div>
        </div>
      )}


      {/* Routing-Bereich */}
      <Routes>
        {/* Home unter / und /home erreichbar */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />


        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/uebermich" element={<UeberMich />} />
      </Routes>

      {/* Footer (immer sichtbar) */}
      <footer className="max-w-5xl mx-auto px-4 md:px-6 py-10 mt-16">
        <div className="border-t border-slate-200 pt-6 flex flex-col items-center gap-4 text-slate-600 text-sm">
          {/* Icon-Leiste */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:hello@deckstack.dev"
              className="text-slate-500 hover:text-indigo-600 transition-colors"
              aria-label="E-Mail an DeckStack"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/liam-deck/"
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 hover:text-indigo-600 transition-colors"
              aria-label="DeckStack auf LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 hover:text-indigo-600 transition-colors"
              aria-label="DeckStack auf Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>


          <p>© 2025 DeckStack. Alle Rechte vorbehalten.</p>
        </div>
      </footer>
    </div>
  );
}


export default App;
