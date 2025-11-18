// src/Ressourcen.js
import React, { useState } from 'react';
import { BookOpen, Video, Code, Lightbulb, Brain, Star } from 'lucide-react';
import './Ressourcen.css';

function Ressourcen() {
  const [activeFilter, setActiveFilter] = useState('Alle');

  const resources = [
    {
      category: "Tutorials",
      icon: <BookOpen className="w-6 h-6" />,
      items: [
        {
          title: "React Dokumentation",
          description: "Die offizielle React-Dokumentation mit allen Grundlagen",
          url: "https://react.dev",
          type: "Dokumentation"
        },
        {
          title: "Supabase Docs",
          description: "Vollständige Dokumentation für Supabase Auth, Database und mehr",
          url: "https://supabase.com/docs",
          type: "Dokumentation"
        },
        {
          title: "MDN Web Docs",
          description: "Umfassende Webentwicklungs-Ressourcen von Mozilla",
          url: "https://developer.mozilla.org",
          type: "Referenz"
        }
      ]
    },
    {
      category: "Video-Kurse",
      icon: <Video className="w-6 h-6" />,
      items: [
        {
          title: "JavaScript Mastery",
          description: "Moderne JavaScript und React Tutorials auf YouTube",
          url: "https://www.youtube.com/@javascriptmastery",
          type: "YouTube"
        },
        {
          title: "Fireship",
          description: "Kurze, prägnante Tech-Videos zu verschiedenen Themen",
          url: "https://www.youtube.com/@Fireship",
          type: "YouTube"
        }
      ]
    },
    {
      category: "Code & Tools",
      icon: <Code className="w-6 h-6" />,
      items: [
        {
          title: "Tailwind CSS",
          description: "Utility-First CSS Framework für modernes Design",
          url: "https://tailwindcss.com",
          type: "Tool"
        },
        {
          title: "Lucide Icons",
          description: "Schöne Open-Source Icon-Bibliothek für React",
          url: "https://lucide.dev",
          type: "Icons"
        },
        {
          title: "React Router",
          description: "Deklaratives Routing für React-Anwendungen",
          url: "https://reactrouter.com",
          type: "Library"
        }
      ]
    },
    {
      category: "Large Language Models",
      icon: <Brain className="w-6 h-6" />,
      items: [
        {
          title: "ChatGPT",
          description: "OpenAIs Conversational AI mit GPT-4o - multimodal, Voice Mode und fortgeschrittenes Reasoning für Text, Code und Bildanalyse",
          url: "https://chat.openai.com",
          type: "LLM",
          premium: true
        },
        {
          title: "Perplexity AI",
          description: "KI-gestützte Suchmaschine mit Real-time Citations - kombiniert Websuche mit AI-Antworten und belegt alle Aussagen mit Quellen",
          url: "https://www.perplexity.ai",
          type: "LLM",
          premium: true
        },
        {
          title: "Google Gemini",
          description: "Googles fortschrittliches AI-Modell mit 1M Token Context Window, Deep Think Mode und nahtloser Integration in Google Workspace",
          url: "https://gemini.google.com",
          type: "LLM",
          premium: true
        },
        {
          title: "Claude",
          description: "Anthropics AI-Assistent mit Fokus auf hilfreiche, harmlose und ehrliche Antworten - besonders stark in Analyse und langen Kontexten",
          url: "https://claude.ai",
          type: "LLM",
          premium: true
        },
        {
          title: "GitHub Copilot",
          description: "AI-Pair-Programmer von GitHub - unterstützt beim Schreiben von Code mit Kontext-bewussten Vorschlägen in Echtzeit",
          url: "https://github.com/features/copilot",
          type: "LLM"
        },
        {
          title: "Mistral AI",
          description: "Open-Source und proprietäre LLMs aus Europa - effizient, mehrsprachig und mit starkem Fokus auf Transparenz",
          url: "https://mistral.ai",
          type: "LLM"
        }
      ]
    },
    {
      category: "Inspiration",
      icon: <Lightbulb className="w-6 h-6" />,
      items: [
        {
          title: "Dribbble",
          description: "Design-Inspiration und UI/UX Konzepte",
          url: "https://dribbble.com",
          type: "Design"
        },
        {
          title: "Dev.to",
          description: "Community-getriebene Entwickler-Plattform mit Artikeln",
          url: "https://dev.to",
          type: "Community"
        }
      ]
    }
  ];

  // Kategorien für Filter-Buttons
  const categories = ['Alle', ...resources.map(r => r.category)];

  // Gefilterte Ressourcen basierend auf aktivem Filter
  const filteredResources = activeFilter === 'Alle' 
    ? resources 
    : resources.filter(r => r.category === activeFilter);

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 md:px-6 md:py-20">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          Ressourcen
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Hilfreiche Tools, Tutorials und Inspirationen für deine Entwicklungsreise. 
          Eine kuratierte Sammlung der besten Ressourcen.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`filter-button ${activeFilter === category ? 'active' : ''}`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Ressourcen Grid */}
      <div className="space-y-12">
        {filteredResources.map((category, index) => (
          <section key={index}>
            {/* Kategorie Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="text-indigo-600">
                {category.icon}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                {category.category}
              </h2>
            </div>

            {/* Ressourcen Cards */}
            <div className="grid gap-6 md:grid-cols-2">
              {category.items.map((item, itemIndex) => (
                <a
                  key={itemIndex}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 border ${
                    item.premium 
                      ? 'premium-card relative' 
                      : 'border-slate-100'
                  }`}
                >
                  {/* Empfehlung Badge */}
                  {item.premium && (
                    <div className="recommendation-badge">
                      <Star className="w-3 h-3" />
                      <span>Empfehlung</span>
                    </div>
                  )}

                  {/* Titel ohne ExternalLink Icon */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors mb-3">
                    {item.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-4">
                    {item.description}
                  </p>
                  
                  <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-medium">
                    {item.type}
                  </span>
                </a>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default Ressourcen;
