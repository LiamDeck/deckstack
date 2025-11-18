import React, { useState } from 'react';
import { Mail, MessageSquare, Send, CheckCircle2, AlertCircle } from 'lucide-react';

function Kontakt() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showNotice, setShowNotice] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowNotice(true);
    setTimeout(() => setShowNotice(false), 4000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="max-w-5xl mx-auto px-4 py-12 md:px-6 md:py-20">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6 border border-indigo-100">
          <Mail className="w-4 h-4 text-indigo-600" />
          <span className="text-sm text-indigo-600">
            Lass uns connecten
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-4">
          Kontakt
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
          Fragen, Feedback oder Themenvorschläge? Ich freue mich über jede Nachricht!
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.5fr,1fr] items-start">
        {/* Kontakt-Formular */}
        <section>
          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg border border-slate-100 p-6 md:p-8 space-y-6">
            {/* Success Notice */}
            {showNotice && (
              <div className="flex items-start gap-3 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-amber-900">
                    Formular noch nicht aktiv
                  </p>
                  <p className="text-sm text-amber-700 mt-1">
                    Die Kontaktfunktion wird bald implementiert. Aktuell werden keine Nachrichten versendet.
                  </p>
                </div>
              </div>
            )}

            <div className="space-y-2">
              <label
                htmlFor="name"
                className="flex items-center gap-2 text-sm font-semibold text-slate-800"
              >
                <MessageSquare className="w-4 h-4 text-indigo-600" />
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Wie darf ich dich nennen?"
                required
                className="w-full rounded-lg border-2 border-slate-200 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="flex items-center gap-2 text-sm font-semibold text-slate-800"
              >
                <Mail className="w-4 h-4 text-indigo-600" />
                E-Mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="dein.name@example.com"
                required
                className="w-full rounded-lg border-2 border-slate-200 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="flex items-center gap-2 text-sm font-semibold text-slate-800"
              >
                <Send className="w-4 h-4 text-indigo-600" />
                Nachricht
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                placeholder="Worum geht's? Teile mir deine Gedanken mit..."
                required
                className="w-full rounded-lg border-2 border-slate-200 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="group w-full sm:w-auto inline-flex justify-center items-center gap-2 px-8 py-3.5 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span>Nachricht senden</span>
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </section>

        {/* Kontakt-Infos Cards */}
        <aside className="space-y-6">
          {/* Info Card */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-indigo-100 rounded-lg">
                <Mail className="w-5 h-5 text-indigo-600" />
              </div>
              <h2 className="text-lg font-bold text-slate-900">
                E-Mail Kontakt
              </h2>
            </div>
            
            <a 
              href="mailto:Liam.Deck@gmx.de"
              className="text-indigo-600 hover:text-indigo-700 font-semibold text-lg transition-colors"
            >
              Liam.Deck@gmx.de
            </a>
            
            <p className="text-sm text-slate-600 mt-3">
              Für direkte Anfragen kannst du mir auch eine E-Mail schreiben.
            </p>
          </div>

          {/* Topics Card */}
          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-purple-100 rounded-lg">
                <MessageSquare className="w-5 h-5 text-purple-600" />
              </div>
              <h2 className="text-lg font-bold text-slate-900">
                Typische Themen
              </h2>
            </div>
            
            <ul className="space-y-2.5 text-sm text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                Feedback zu Artikeln
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                Themenvorschläge für den Blog
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                Fragen zu Technologien
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                Kollaborationsmöglichkeiten
              </li>
            </ul>
          </div>

          {/* Notice Card */}
          <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-semibold text-slate-800 mb-1">
                  In Entwicklung
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Das Formular sendet aktuell noch nichts ab. Später wird hier eine echte 
                  Schnittstelle implementiert.
                </p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}

export default Kontakt;
