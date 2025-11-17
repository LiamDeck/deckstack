# Was sind LLMs und wie funktionieren diese?

**Veröffentlicht:** 18. November 2025  
**Autor:** Liam Deck  
**Lesezeit:** 3 Minuten

Large Language Models (LLMs) wie ChatGPT, Claude oder Gemini sind in aller Munde. Aber was steckt eigentlich hinter diesen beeindruckenden KI-Systemen? In diesem Artikel erkläre ich die Grundlagen – ohne unnötigen Fachjargon.

## Was sind Large Language Models?

LLMs sind künstliche neuronale Netzwerke, die darauf trainiert wurden, menschliche Sprache zu verstehen und zu generieren. "Large" bezieht sich dabei auf die schiere Größe: Moderne Modelle haben Milliarden bis Billionen von Parametern – das sind die internen Einstellungen, die das Verhalten des Modells bestimmen.

**Die drei Kernfähigkeiten:**
- **Textverstehen**: Kontext, Bedeutung und Zusammenhänge erkennen
- **Textgenerierung**: Kohärente, relevante Antworten formulieren
- **Aufgabenlösung**: Von Übersetzungen bis hin zu Code-Generierung

## Wie funktioniert das Training?

Das Training eines LLMs läuft in mehreren Phasen ab:

### 1. Pre-Training (Vortraining)

Das Modell lernt zunächst aus riesigen Textmengen – Bücher, Websites, wissenschaftliche Artikel, Code und mehr. Dabei wird es auf eine einfache Aufgabe trainiert: **das nächste Wort vorherzusagen**.

Beispiel: Bei der Eingabe "Der Himmel ist..." lernt das Modell, dass "blau" eine wahrscheinliche Fortsetzung ist.

#### Vereinfachtes Konzept
input_text = "Künstliche Intelligenz wird"
predicted_next

#### Output: "in Zukunft", "immer wichtiger", "entwickelt"...


### 2. Fine-Tuning (Feinabstimmung)

Nach dem Pre-Training wird das Modell auf spezifische Aufgaben spezialisiert:
- **Supervised Fine-Tuning**: Lernen aus Beispieldialogen
- **RLHF** (Reinforcement Learning from Human Feedback): Menschen bewerten Antworten, das Modell lernt daraus

### 3. Alignment (Ausrichtung)

Hier lernt das Modell, hilfreiche, ehrliche und harmlose Antworten zu geben. Es soll nicht nur korrekte Informationen liefern, sondern auch ethisch verantwortungsvoll agieren.

## Die Transformer-Architektur

Das Herzstück moderner LLMs ist die **Transformer-Architektur** (2017 von Google eingeführt). Der wichtigste Mechanismus: **Self-Attention**.

### Was ist Self-Attention?

Self-Attention erlaubt es dem Modell, verschiedene Teile eines Textes unterschiedlich stark zu gewichten. Ein vereinfachtes Beispiel:

**Satz:** "Die Bank am Fluss war geschlossen, weil sie renoviert wurde."

Das Modell erkennt:
- "Bank" bezieht sich auf ein Geldinstitut (nicht auf eine Sitzbank)
- "sie" bezieht sich zurück auf "Bank"
- Der Kontext "Fluss" ist weniger relevant für "geschlossen"

## Wie groß sind LLMs wirklich?

| Modell | Parameter | Trainingskosten |
|--------|-----------|-----------------|
| GPT-3 | 175 Milliarden | ~$4.6 Millionen |
| GPT-4 | ~1.76 Billionen (geschätzt) | >$100 Millionen |
| LLaMA 2 (70B) | 70 Milliarden | ~$2 Millionen |
| Claude 3 | Unbekannt | Unbekannt |

Ein einzelnes Training von GPT-3 verbrauchte so viel Energie wie etwa 120 Haushalte in einem Jahr.

## Limitierungen und Herausforderungen

Trotz ihrer Beeindruckung haben LLMs klare Grenzen:

**Halluzinationen**: Modelle können überzeugend klingende, aber falsche Informationen generieren.

**Kein echtes Verständnis**: LLMs simulieren Verständnis durch statistische Muster, haben aber kein "Bewusstsein" oder echtes Weltwissen.

**Trainingsdaten-Bias**: Vorurteile und Verzerrungen aus den Trainingsdaten werden reproduziert.

**Aktualität**: Das Wissen ist auf den Trainingszeitpunkt beschränkt (es sei denn, sie haben Zugriff auf Echtzeit-Daten).

## Praktische Anwendungen heute

LLMs werden bereits vielfältig eingesetzt:

- **Content-Erstellung**: Blog-Entwürfe, Marketing-Texte, Social Media
- **Programmierung**: Code-Generierung, Debugging, Dokumentation
- **Kundenservice**: Chatbots und virtuelle Assistenten
- **Bildung**: Tutoring-Systeme, Lernhilfen
- **Forschung**: Literatur-Zusammenfassungen, Datenanalyse

## Die Zukunft von LLMs

**Wohin geht die Reise?**

1. **Multimodalität**: Modelle, die Text, Bilder, Audio und Video verstehen (wie GPT-4V oder Gemini)
2. **Kleinere, effizientere Modelle**: Weniger Energie, lokale Ausführung möglich
3. **Spezialisierung**: Modelle für bestimmte Branchen oder Aufgaben
4. **Bessere Reasoning-Fähigkeiten**: Logisches Denken und Problemlösung

## Fazit

LLMs sind faszinierende Werkzeuge, die auf statistischen Mustern in riesigen Textmengen basieren. Sie sind weder magisch noch perfekt, aber sie verändern bereits heute, wie wir mit Technologie interagieren.

**Das Wichtigste in Kürze:**
- LLMs lernen durch Vorhersage des nächsten Wortes
- Die Transformer-Architektur mit Self-Attention ist der Schlüssel
- Sie sind mächtig, aber haben klare Grenzen
- Die praktischen Anwendungen wachsen rasant

Verstehst du die Grundlagen, kannst du LLMs bewusster und effektiver einsetzen – und weißt, wann Vorsicht geboten ist.

---

*Hast du Fragen zu LLMs oder Ideen für weitere Artikel? Schreib mir gerne!*
