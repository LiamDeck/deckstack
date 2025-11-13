// src/Home.js
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight, X } from 'lucide-react';

function Home() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleNewsletterClick = () => {
    if (isAnimating) return; // mehrfaches Klicken während der Animation verhindern
    setIsAnimating(true);

    // Nach kurzer "Feuerwerk"-Animation das Modal anzeigen
    setTimeout(() => {
      setIsAnimating(false);
      setShowModal(true);
    }, 900); // Dauer der Animation in ms
  };

  return (
    <>
      <main className="max-w-5xl mx-auto px-4 py-12 md:px-6 md:py-20">
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm mb-8">
            <BookOpen className="w-4 h-4 text-slate-600" />
            <span className="text-sm text-slate-600">
              Wissen gestapelt, Ideen entfaltet
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            Dein Blog für<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-500">
              gestapelte Gedanken
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            DeckStack bringt Ideen, Wissen und Inspiration zusammen.
            Entdecke Artikel, die zum Nachdenken anregen und deine Perspektive erweitern.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Artikel entdecken: Link zum Blog */}
            <Link
              to="/blog"
              className="group bg-slate-800 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg hover:bg-slate-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 text-sm md:text-base"
            >
              <span className="font-medium">Artikel entdecken</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Newsletter-Button mit Animation */}
            <div className="relative inline-flex">
              {isAnimating && (
                <>
                  {/* Farbiger Ring */}
                  <span className="pointer-events-none absolute -inset-1 rounded-xl bg-gradient-to-r from-indigo-500 via-pink-500 to-amber-400 opacity-80 animate-ping" />
                  {/* Kleine "Feuerwerk"-Punkte rund um den Button */}
                  <span className="pointer-events-none absolute -top-2 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-pink-400 animate-bounce" />
                  <span className="pointer-events-none absolute -right-2 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-amber-400 animate-bounce" />
                  <span className="pointer-events-none absolute -bottom-2 left-1/3 h-2 w-2 rounded-full bg-sky-400 animate-bounce" />
                </>
              )}

              <button
                type="button"
                onClick={handleNewsletterClick}
                className="relative bg-white text-slate-800 px-6 py-3 md:px-8 md:py-4 rounded-lg hover:bg-slate-50 transition-all shadow-md border border-slate-200 text-sm md:text-base"
              >
                <span className="font-medium">Newsletter abonnieren</span>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Modal / Popup */}
      {showModal && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-slate-900/40">
          <div className="relative bg-white rounded-2xl shadow-xl max-w-sm w-full mx-4 p-6">
            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="absolute right-4 top-4 text-slate-400 hover:text-slate-700"
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
              className="mt-1 inline-flex items-center justify-center rounded-lg bg-slate-800 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700 transition-colors"
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
