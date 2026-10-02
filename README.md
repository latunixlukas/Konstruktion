# Werkstatt-Zeichenbrett

Einfaches Konstruktions-Werkzeug im Browser für Schlosser- und Metallbau-Azubis.

- **Projekte**: Startmenü mit Projektliste, neues Projekt nur mit Projektname und Azubi-Name
- Rechtecke (Bleche, Flachstahl, Laschen) mit Dicke und Werkstoff
- **Profile**: Winkelstahl (EN 10056-1), U-Stahl (DIN 1026-1), Quadrat- und Rechteckrohr (EN 10219), Rundrohr (EN 10220), Rundstahl (EN 10060), als Längsansicht oder Querschnitt
- **Schweißnähte**: Kehlnaht, V-, HV- und I-Naht mit Symbol nach ISO 2553 (a-Maß, Länge, ringsum)
- **Wellen**: abgesetzte Wellen (Ø×Länge je Absatz), Fasen, Passfedernut nach DIN 6885, Werkstoffe C45 / 42CrMo4 / 11SMnPb30
- **Beispiel-Projekte**: Wandkonsole, Antriebswelle mit Lagerböcken, Tischgestell aus Quadratrohr
- Bohrungen: Durchgangsbohrungen nach ISO 273 oder Gewinde mit Kernloch
- Schrauben, Muttern und Scheiben (ISO 4017, ISO 4762, ISO 4032, ISO 7089), von oben oder von der Seite
- Linien, Mittellinien und Maße
- Umschaltbar zwischen 2D (Zeichnen) und 3D (Ansehen, Drehen, Zoomen), mit Maß-Knopf: Teil anklicken zeigt Länge × Breite × Höhe
- **CAD-Modelle** (STEP, .stp/.step): werden nur im Browser gelesen, nicht hochgeladen und nicht gespeichert. In 2D als grauer Hintergrund (Draufsicht/Vorderansicht/Seitenansicht) mit Kantenfang, in 3D zusammen mit den eigenen Teilen
- Einheiten mm / cm / m umschaltbar, Eingaben wie `25cm` oder `0,3m` möglich
- Automatische Stückliste mit Masse (kg) und Nahtlängen, Schriftfeld, Export als PNG/SVG

## Speichern

| Wo läuft die Seite?             | Wo landen die Projekte?                          |
| ------------------------------- | ------------------------------------------------ |
| Netlify                         | Online in Netlify Blobs, für alle Azubis sichtbar |
| Datei lokal geöffnet / anderswo | Nur im Browser des jeweiligen Geräts             |

Die Seite erkennt das automatisch.

## Auf Netlify veröffentlichen

1. Repo in Netlify importieren, Branch `main`.
2. Build command leer lassen, Publish directory `.` (steht schon in `netlify.toml`).
3. Deployen. Netlify installiert `@netlify/blobs` und richtet die Funktion `/api/projects` selbst ein.

### Optional: Werkstatt-Code

Damit nicht jeder mit dem Link Projekte sehen oder löschen kann:
In Netlify unter **Site configuration → Environment variables** die Variable `WERKSTATT_CODE` anlegen
(z. B. `stahl2026`) und neu deployen. Die Azubis geben den Code einmal im Startmenü ein.

## Dateien

- `index.html` – die ganze Seite
- `netlify/functions/projects.mjs` – Speichern, Laden, Löschen der Projekte
- `netlify.toml`, `package.json` – Einstellungen für Netlify
