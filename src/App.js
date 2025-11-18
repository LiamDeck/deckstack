// src/App.js
import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Layers, Mail, Linkedin, Instagram, Menu, X, LogOut } from 'lucide-react';
import { supabase } from './supabaseClient';
import Blog from './Blog';
import Home from './Home';
import Kontakt from './Kontakt';
import UeberMich from './UeberMich';
import Ressourcen from './Ressourcen';
import BlogPost from './BlogPost';
import LoginPage from './LoginPage';

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Session beim Start laden
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    // Auf Auth-Änderungen hören
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setSession(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="text-slate-600">Laden...</div>
      </div>
    );
  }

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
                <Link
                  to="/"
                  className="text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 px-3 py-2 rounded-md transition-colors focus:outline-none"
                >
                  Home
                </Link>
                <Link
                  to="/blog"
                  className="text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 px-3 py-2 rounded-md transition-colors focus:outline-none"
                >
                  Blog
                </Link>
                <Link
                  to="/ressourcen"
                  className="text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 px-3 py-2 rounded-md transition-colors focus:outline-none"
                >
                  Ressourcen
                </Link>
                <Link
                  to="/uebermich"
                  className="text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 px-3 py-2 rounded-md transition-colors focus:outline-none"
                >
                  Über mich
                </Link>
                <Link
                  to="/kontakt"
                  className="text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 px-3 py-2 rounded-md transition-colors focus:outline-none"
                >
                  Kontakt
                </Link>

                {/* Conditional Login/Logout Button */}
                {session ? (
                  <button
                    onClick={handleLogout}
                    className="bg-white text-indigo-600 border-2 border-indigo-600 hover:bg-indigo-50 px-4 py-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 font-medium ml-2 flex items-center gap-2"
                  >
                    <LogOut className="w-4 h-4" />
                    Logout
                  </button>
                ) : (
                  <Link
                    to="/login"
                    className="bg-indigo-600 text-white hover:bg-indigo-700 px-4 py-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 font-medium ml-2"
                  >
                    Login
                  </Link>
                )}
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
              <Link
                to="/"
                onClick={() => setMobileOpen(false)}
                className="py-2 px-3 rounded hover:bg-indigo-50 hover:text-indigo-600 transition-colors focus:outline-none"
              >
                Home
              </Link>
              <Link
                to="/blog"
                onClick={() => setMobileOpen(false)}
                className="py-2 px-3 rounded hover:bg-indigo-50 hover:text-indigo-600 transition-colors focus:outline-none"
              >
                Blog
              </Link>
              <Link
                to="/ressourcen"
                onClick={() => setMobileOpen(false)}
                className="py-2 px-3 rounded hover:bg-indigo-50 hover:text-indigo-600 transition-colors focus:outline-none"
              >
                Ressourcen
              </Link>
              <Link
                to="/uebermich"
                onClick={() => setMobileOpen(false)}
                className="py-2 px-3 rounded hover:bg-indigo-50 hover:text-indigo-600 transition-colors focus:outline-none"
              >
                Über mich
              </Link>
              <Link
                to="/kontakt"
                onClick={() => setMobileOpen(false)}
                className="py-2 px-3 rounded hover:bg-indigo-50 hover:text-indigo-600 transition-colors focus:outline-none"
              >
                Kontakt
              </Link>

              {/* Mobile Login/Logout */}
              {session ? (
                <button
                  onClick={() => {
                    handleLogout();
                    setMobileOpen(false);
                  }}
                  className="bg-white text-indigo-600 border-2 border-indigo-600 hover:bg-indigo-50 py-2 px-3 rounded text-center font-medium transition-colors focus:outline-none mt-2 flex items-center justify-center gap-2"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setMobileOpen(false)}
                  className="bg-indigo-600 text-white hover:bg-indigo-700 py-2 px-3 rounded text-center font-medium transition-colors focus:outline-none mt-2"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Routing-Bereich */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/ressourcen" element={<Ressourcen />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/uebermich" element={<UeberMich />} />
        <Route path="/login" element={<LoginPage />} />
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
