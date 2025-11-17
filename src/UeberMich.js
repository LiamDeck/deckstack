import { BookOpen } from 'lucide-react';

function UeberMich() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12 md:px-6 md:py-20">
      <div className="grid gap-10 md:grid-cols-[2fr,1.2fr] items-start">
        {/* Text-Bereich */}
        <section>
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-50 to-white px-3 py-1.5 rounded-full shadow-sm border border-indigo-100 mb-6">
            <BookOpen className="w-4 h-4 text-indigo-600" />
            <span className="text-xs sm:text-sm text-indigo-600 font-medium">
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
        <aside className="bg-white rounded-2xl shadow-sm border border-indigo-100 p-6 md:p-7">
          <h2 className="text-lg font-semibold text-slate-900 mb-4 pb-3 border-b border-indigo-50">
            Kurz & knapp
          </h2>
          <ul className="space-y-3 text-sm text-slate-700">
            <li className="flex items-start">
              <span className="text-indigo-500 mr-2 font-bold">•</span>
              <span>Fokus: Webentwicklung, KI, Produktivität</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-500 mr-2 font-bold">•</span>
              <span>Lieblings-Stack: React, Tailwind, Python</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-500 mr-2 font-bold">•</span>
              <span>Schreibstil: verständlich, praxisnah, neugierig</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-500 mr-2 font-bold">•</span>
              <span>Ziel: Inhalte, die dir wirklich weiterhelfen</span>
            </li>
          </ul>
        </aside>
      </div>
    </main>
  );
}

export default UeberMich;
