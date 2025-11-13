import { BookOpen} from 'lucide-react';


function UeberMich() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12 md:px-6 md:py-20">
      <div className="grid gap-10 md:grid-cols-[2fr,1.2fr] items-start">
        {/* Text-Bereich */}
        <section>
          <div className="inline-flex items-center space-x-2 bg-white px-3 py-1.5 rounded-full shadow-sm mb-6">
            <BookOpen className="w-4 h-4 text-slate-600" />
            <span className="text-xs sm:text-sm text-slate-600">
              Über mich
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Hinter DeckStack steht ein neugieriger Kopf
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-slate-600 mb-4 leading-relaxed">
            Hey, ich bin Liam – Tech-Enthusiast, neugieriger Tüftler und jemand,
            der gerne komplexe Themen verständlich macht. 
            Dieser Blog ist mein digitaler Denkraum für Ideen rund um Technologie, 
            KI und modernes Arbeiten.
          </p>

          <p className="text-sm sm:text-base md:text-lg text-slate-600 mb-4 leading-relaxed">
            Wenn ich nicht gerade an neuen Artikeln schreibe, experimentiere ich
            mit kleinen Projekten, teste Tools oder lerne neue Technologien kennen.
            DeckStack ist die Sammlung dieser gestapelten Gedanken – strukturiert,
            reflektiert und hoffentlich inspirierend.
          </p>

          <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed">
            Du darfst diesen Blog als Einladung verstehen, mitzudenken, zu
            diskutieren und eigene Perspektiven einzubringen. 
            Die besten Ideen entstehen selten im Alleingang.
          </p>
        </section>

        {/* Side-Card mit Facts */}
        <aside className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-7">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">
            Kurz & knapp
          </h2>
          <ul className="space-y-3 text-sm text-slate-700">
            <li>
              • Fokus: Webentwicklung, KI, Produktivität
            </li>
            <li>
              • Lieblings-Stack: React, Tailwind, Python
            </li>
            <li>
              • Schreibstil: verständlich, praxisnah, neugierig
            </li>
            <li>
              • Ziel: Inhalte, die dir wirklich weiterhelfen
            </li>
          </ul>
        </aside>
      </div>
    </main>
  );
}

export default UeberMich;
