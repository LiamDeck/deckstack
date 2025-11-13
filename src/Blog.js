// src/Blog.js
import { useState } from 'react';
import { ArrowUp, ArrowDown, X } from 'lucide-react';

function Blog() {
  const [sortOrder, setSortOrder] = useState('desc'); // 'asc' oder 'desc'
  const [searchTerm, setSearchTerm] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: "LLMs im Alltag: Vom Hype zum Werkzeug",
      preview:
        "Große Sprachmodelle wie GPT verändern, wie wir schreiben, recherchieren und Software entwickeln. Doch was bedeutet das konkret im Alltag?",
      date: "2025-11-10",
      dateLabel: "10. November 2025",
      tags: ["LLMs", "Generative KI", "Produktivität"],
    },
    {
      id: 2,
      title: "KI-Agenten: Wenn Tools eigenständig handeln",
      preview:
        "Agenten orchestrieren Tools, APIs und Modelle, um komplexe Aufgaben weitgehend autonom zu erledigen. Ein Blick auf Chancen, Grenzen und Use Cases.",
      date: "2025-11-08",
      dateLabel: "8. November 2025",
      tags: ["KI-Agenten", "Automation", "Tool-Use"],
    },
    {
      id: 3,
      title: "Copilot Studio: Dein eigener KI-Assistent",
      preview:
        "Mit Plattformen wie Copilot Studio lassen sich maßgeschneiderte Assistenten für Business-Workflows bauen – ganz ohne riesiges ML-Team.",
      date: "2025-11-05",
      dateLabel: "5. November 2025",
      tags: ["Copilot Studio", "Business-KI", "Workflows"],
    },
  ];

  // Suche in Titel ODER Preview
  const filteredPosts = blogPosts.filter((post) => {
    const term = searchTerm.toLowerCase();
    return (
      post.title.toLowerCase().includes(term) ||
      post.preview.toLowerCase().includes(term)
    );
  });

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
  });

  const handleSearchKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setSearchTerm('');
    }
  };

  const clearSearch = () => setSearchTerm('');

  return (
    <main className="max-w-5xl mx-auto px-4 py-12 md:px-6 md:py-20">
      {/* Header / Intro */}
      <header className="mb-8 md:mb-10">
        <div className="text-center mb-6 md:mb-8">
          <div className="inline-flex items-center space-x-2 bg-white px-3 py-1.5 rounded-full shadow-sm mb-5">
            <span className="w-2 h-2 rounded-full bg-slate-900" />
            <span className="text-xs sm:text-sm text-slate-600">
              KI-Themen, die gerade bewegen
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-3">
            Blog rund um moderne KI
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
            Von großen Sprachmodellen über Agenten bis hin zu Copilot-Tools:
            Hier werden aktuelle Entwicklungen eingeordnet und mit Beispielen aus der Praxis verknüpft.
          </p>
        </div>

        {/* Suchleiste + Sortier-Icon */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          {/* Suchleiste */}
          <div className="w-full sm:max-w-xs">
            <label
              htmlFor="search"
              className="block text-xs sm:text-sm text-slate-600 mb-1"
            >
              Suche in Titel & Preview
            </label>
            <div className="relative">
              <input
                id="search"
                type="text"
                placeholder="z.B. LLMs, Agenten, Copilot..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleSearchKeyDown}
                className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 pr-9 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-500/60 focus:border-slate-500"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={clearSearch}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 hover:text-slate-700"
                  aria-label="Suchfeld leeren"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Sortier-Button */}
          <div className="flex items-end justify-between sm:justify-end gap-3">
            <p className="text-xs sm:text-sm text-slate-500">
              {sortedPosts.length} Beiträge – sortiert nach Datum
            </p>

            <button
              type="button"
              onClick={() =>
                setSortOrder((prev) => (prev === 'desc' ? 'asc' : 'desc'))
              }
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white p-2 text-slate-700 hover:bg-slate-800 hover:text-white transition-colors shadow-sm"
              aria-label={
                sortOrder === 'desc'
                  ? 'Neueste zuerst (klicken für Älteste zuerst)'
                  : 'Älteste zuerst (klicken für Neueste zuerst)'
              }
            >
              {sortOrder === 'desc' ? (
                <ArrowDown className="w-4 h-4" />
              ) : (
                <ArrowUp className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Liste der Blogposts */}
      <section className="space-y-5">
        {sortedPosts.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow px-5 py-4 sm:px-6 sm:py-5"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 sm:gap-3 mb-2">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-900">
                {post.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-400">
                Veröffentlicht am {post.dateLabel}
              </p>
            </div>

            <p className="text-sm sm:text-base text-slate-600 mb-3">
              {post.preview}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-3">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                >
                  {tag}
                </span>
              ))}
            </div>

            <button
              type="button"
              className="inline-flex items-center text-sm font-medium text-slate-800 hover:text-slate-950"
            >
              Weiterlesen (bald verfügbar)
            </button>
          </article>
        ))}

        {sortedPosts.length === 0 && (
          <p className="text-sm sm:text-base text-slate-500">
            Keine Einträge gefunden. Passe deine Suche an.
          </p>
        )}
      </section>
    </main>
  );
}

export default Blog;
