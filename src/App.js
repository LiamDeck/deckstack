// src/App.js
import { Routes, Route, Link } from 'react-router-dom';
import { Layers, Mail, Linkedin, Instagram } from 'lucide-react';
import Blog from './Blog';
import Home from './Home';
import Kontakt from './Kontakt';
import UeberMich from './UeberMich';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation (immer sichtbar, mobile-first) */}
      <nav className="bg-white/80 backdrop-blur border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-4 md:px-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Layers className="w-7 h-7 text-slate-800" />
              <span className="text-xl md:text-2xl font-bold text-slate-800">
                DeckStack
              </span>
            </Link>

            {/* Links sind nun auch mobil sichtbar */}
            <div className="flex space-x-4 text-sm md:text-base">
              <Link
                to="/"
                className="text-slate-700 hover:text-slate-900"
              >
                Home
              </Link>
              <Link
                to="/blog"
                className="text-slate-700 hover:text-slate-900"
              >
                Blog
              </Link>
              <Link
                to="/uebermich"
                className="text-slate-700 hover:text-slate-900"
              >
                Über mich
              </Link>
              <Link
                to="/kontakt"
                className="text-slate-700 hover:text-slate-900"
              >
                Kontakt
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Routing-Bereich */}
      <Routes>
        {/* Home unter / und /home erreichbar */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        <Route path="/blog" element={<Blog />} />
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
              className="text-slate-500 hover:text-slate-900 transition-colors"
              aria-label="E-Mail an DeckStack"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/liam-deck/"
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 hover:text-slate-900 transition-colors"
              aria-label="DeckStack auf LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 hover:text-slate-900 transition-colors"
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
