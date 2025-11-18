import { BookOpen, Sparkles, Code2, Target, Lightbulb } from 'lucide-react';

function UeberMich() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12 md:px-6 md:py-20">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6 border border-indigo-100">
          <BookOpen className="w-4 h-4 text-indigo-600" />
          <span className="text-sm text-indigo-600">
            Über mich
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-4">
          Über mich
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
          Hinter DeckStack steht ein neugieriger Kopf
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.5fr,1fr] items-start">
        {/* Text-Bereich */}
        <section className="space-y-6">
          <div className="bg-white rounded-xl shadow-lg border border-slate-100 p-6 md:p-8">
            <div className="prose prose-slate max-w-none">
              <p className="text-base md:text-lg text-slate-700 leading-relaxed mb-4">
                Hey, ich bin <span className="font-semibold text-slate-900">Liam</span> – Tech-Enthusiast, neugieriger Tüftler und jemand,
                der gerne komplexe Themen verständlich macht. 
                Dieser Blog ist mein digitaler Denkraum für Ideen rund um Technologie, 
                KI und modernes Arbeiten.
              </p>

              <p className="text-base md:text-lg text-slate-700 leading-relaxed mb-4">
                Wenn ich nicht gerade an neuen Artikeln schreibe, experimentiere ich
                mit kleinen Projekten, teste Tools oder lerne neue Technologien kennen.
                DeckStack ist die Sammlung dieser gestapelten Gedanken – strukturiert,
                reflektiert und hoffentlich inspirierend.
              </p>

              <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                Du darfst diesen Blog als Einladung verstehen, mitzudenken, zu
                diskutieren und eigene Perspektiven einzubringen. 
                Die besten Ideen entstehen selten im Alleingang.
              </p>
            </div>
          </div>
        </section>

        {/* Side Cards */}
        <aside className="space-y-6">
          {/* Fokus Card */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-indigo-100 rounded-lg">
                <Target className="w-5 h-5 text-indigo-600" />
              </div>
              <h2 className="text-lg font-bold text-slate-900">
                Fokus
              </h2>
            </div>
            
            <p className="text-slate-700 font-medium">
              KI, Data Science, Software Engineering
            </p>
            
            <p className="text-sm text-slate-600 mt-3">
              Themen, die die digitale Zukunft prägen und mich täglich inspirieren.
            </p>
          </div>

          {/* Schreibstil Card */}
          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Code2 className="w-5 h-5 text-purple-600" />
              </div>
              <h2 className="text-lg font-bold text-slate-900">
                Schreibstil
              </h2>
            </div>
            
            <ul className="space-y-2.5 text-sm text-slate-700">
              <li className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                Verständlich & zugänglich
              </li>
              <li className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                Praxisnah & umsetzbar
              </li>
              <li className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                Neugierig & forschend
              </li>
            </ul>
          </div>

          {/* Ziel Card */}
          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-green-100 rounded-lg">
                <Lightbulb className="w-5 h-5 text-green-600" />
              </div>
              <h2 className="text-lg font-bold text-slate-900">
                Mein Ziel
              </h2>
            </div>
            
            <p className="text-sm text-slate-700 leading-relaxed">
              Inhalte schaffen, die dir wirklich weiterhelfen und neue Perspektiven eröffnen.
            </p>
          </div>
        </aside>
      </div>
    </main>
  );
}

export default UeberMich;
