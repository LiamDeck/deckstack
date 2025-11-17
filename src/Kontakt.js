function Kontakt() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12 md:px-6 md:py-20">
      <div className="grid gap-10 lg:grid-cols-[1.4fr,1fr] items-start">
        {/* Kontakt-Formular */}
        <section>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Lass uns in Kontakt bleiben
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-slate-600 mb-8 leading-relaxed">
            Du hast eine Frage, Feedback zu einem Artikel oder eine Idee für ein Thema,
            das hier nicht fehlen darf? Schreib mir einfach eine Nachricht – 
            ich freue mich über jedes konstruktive Signal im Posteingang.
          </p>

          <form className="bg-white rounded-2xl shadow-sm border border-indigo-100 p-6 md:p-7 space-y-5">
            <div className="space-y-1.5">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-slate-800"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Wie darf ich dich nennen?"
                className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/60 focus:border-indigo-500 transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-800"
              >
                E-Mail
              </label>
              <input
                id="email"
                type="email"
                placeholder="dein.name@example.com"
                className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/60 focus:border-indigo-500 transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="nachricht"
                className="block text-sm font-medium text-slate-800"
              >
                Nachricht
              </label>
              <textarea
                id="nachricht"
                rows={4}
                placeholder="Worum geht's?"
                className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/60 focus:border-indigo-500 transition-colors"
              />
            </div>

            <button
              type="button"
              className="w-full sm:w-auto inline-flex justify-center items-center px-5 py-2.5 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg"
            >
              Nachricht (noch) nicht senden
            </button>
          </form>
        </section>

        {/* Kontakt-Infos */}
        <aside className="bg-gradient-to-br from-slate-900 to-indigo-950 text-slate-50 rounded-2xl p-6 md:p-7 space-y-4 border border-indigo-900/50">
          <h2 className="text-lg font-semibold mb-2 text-indigo-100">
            Kontakt-Details
          </h2>
          <p className="text-sm text-slate-200">
            Aktuell ist das hier noch eine Spielwiese für Ideen – 
            die Kontaktfunktion ist also mehr Konzept als fertiges Produkt.
          </p>

          <div className="space-y-2 text-sm">
            <p>
              E-Mail (demnächst):<br />
              <span className="text-indigo-200 font-medium">hello@deckstack.dev</span>
            </p>
            <p>
              Typische Themen:<br />
              • Feedback zu Artikeln<br />
              • Themenvorschläge<br />
              • kleine Kollaborationen
            </p>
          </div>

          <p className="text-xs text-slate-300 pt-2 border-t border-indigo-900/30">
            Hinweis: Das Formular sendet aktuell noch nichts ab.
            Später wird hier eine echte Schnittstelle (z. B. API / Form-Service) eingebunden.
          </p>
        </aside>
      </div>
    </main>
  );
}

export default Kontakt;
