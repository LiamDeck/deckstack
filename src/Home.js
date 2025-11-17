// src/Home.js
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight, X } from 'lucide-react';

function Home() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleNewsletterClick = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    setTimeout(() => {
      setIsAnimating(false);
      setShowModal(true);
    }, 900);
  };

  return (
    <>
      <main className="max-w-5xl mx-auto px-4 py-12 md:px-6 md:py-20">
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm mb-8 border border-indigo-100">
            <BookOpen className="w-4 h-4 text-indigo-600" />
            <span className="text-sm text-indigo-600">
              Wissen gestapelt, Ideen entfaltet
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            Dein Blog für<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-indigo-500">
              gestapelte Gedanken
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            DeckStack bringt Ideen, Wissen und Inspiration zusammen.
            Entdecke Artikel, die zum Nachdenken anregen und deine Perspektive erweitern.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Blog-Link */}
            <Link
              to="/blog"
              className="group bg-indigo-700 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg hover:bg-indigo-600 transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 text-sm md:text-base"
            >
              <span className="font-medium">Artikel entdecken</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Newsletter Button */}
            <div className="relative inline-flex">
              {isAnimating && (
                <>
                  <span className="pointer-events-none absolute -inset-1 rounded-xl bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-400 opacity-80 animate-ping" />
                  <span className="pointer-events-none absolute -top-2 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-pink-400 animate-bounce" />
                  <span className="pointer-events-none absolute -right-2 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-purple-400 animate-bounce" />
                  <span className="pointer-events-none absolute -bottom-2 left-1/3 h-2 w-2 rounded-full bg-indigo-400 animate-bounce" />
                </>
              )}

              <button
                type="button"
                onClick={handleNewsletterClick}
                className="relative bg-white text-indigo-700 px-6 py-3 md:px-8 md:py-4 rounded-lg hover:bg-indigo-50 transition-all shadow-md border border-indigo-200 text-sm md:text-base"
              >
                <span className="font-medium">Newsletter abonnieren</span>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-indigo-900/40">
          <div className="relative bg-white rounded-2xl shadow-xl max-w-sm w-full mx-4 p-6">
            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="absolute right-4 top-4 text-indigo-300 hover:text-indigo-600"
              aria-label="Popup schließen"
            >
              <X className="w-4 h-4" />
            </button>

            <h2 className="text-lg font-semibold text-slate-900 mb-2">
              Newsletter kommt noch
            </h2>
            <p className="text-sm text-slate-600 mb-4">
              Die Newsletter-Funktion ist noch nicht live.
              Aber du bist schon mal bereit dafür – das ist ein guter Anfang.
            </p>

            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="mt-1 inline-flex items-center justify-center rounded-lg bg-indigo-700 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-600 transition-colors"
            >
              Alles klar
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
