# Werkstatt-Zeichenbrett

Einfaches Konstruktions-Werkzeug im Browser für Schlosser- und Metallbau-Azubis.

- **Projekte**: Startmenü mit Projektliste, neues Projekt nur mit Projektname und Azubi-Name
- **Zeichnen**: Mehrfachauswahl (Rahmen, Shift + Klick), Strg+C/V/X/A, Fangen an Ecken/Mitten/Bohrungen, Drehen in jedem Winkel
- Rechtecke (Bleche, Flachstahl, Laschen) mit Dicke und Werkstoff, frei drehbar, Ecken scharfkantig, mit Fase oder Radius
- **Spiegeln** (↔ / ↕, an Ort und Stelle oder als Kopie) und **Muster** (n × m Kopien mit Abstand)
- **Ebenen**: anlegen, umbenennen, ein-/ausblenden, sperren, Teile verschieben; ausgeblendete Ebenen fehlen auch in 3D
- **Beschriftung**: freier Text, Positionsnummern (zählen automatisch hoch) und Hinweispfeile mit Text
- **Ronden/Flansche**, Kreise, Bögen und Lochkreise
- **Profile**: Winkelstahl (EN 10056-1), U-Stahl (DIN 1026-1), Quadrat- und Rechteckrohr (EN 10219), Rundrohr (EN 10220), Rundstahl (EN 10060), als Längsansicht oder Querschnitt
- **Schweißnähte**: Kehlnaht, V-, HV- und I-Naht mit Symbol nach ISO 2553 (a-Maß, Länge, ringsum)
- **Wellen**: abgesetzte Wellen (Ø×Länge je Absatz), Fasen, Passfedernut nach DIN 6885, Werkstoffe C45 / 42CrMo4 / 11SMnPb30
- **Biegeteile**: Schenkel (Außenmaße), Biegewinkel, Dicke, Innenradius, Breite; gestreckte Länge (Zuschnitt) nach DIN 6935
- **Zuschnitt**: Profile/Wellen auf Stangen (z. B. 6 m) und Bleche/Biegeteile auf Tafeln verteilen, mit Schnittbreite, Reststücken und Belegungsskizze
- **Bibliothek** mit über 300 eingebauten Standardteilen (Schrauben, Muttern, Scheiben, Stifte, Sicherungsringe, Kugellager, Flacheisen, Bleche, alle Profile, Ronden, Flansche, Wellen) und Suche mit mehreren Wörtern (z. B. „M8 30“); dazu eigene Teile (z. B. eine Welle) oder ganze Projekte als Baugruppe speichern, mit Kategorie, Suche und Vorschau; auf Netlify für alle sichtbar und mit einem Klick einfügbar
- **Beispiel-Projekte**: Wandkonsole, Antriebswelle mit Lagerböcken, Tischgestell aus Quadratrohr
- Bohrungen: Durchgangsbohrungen nach ISO 273 oder Gewinde mit Kernloch, außerdem Langlöcher und Rechteck-Ausschnitte (gehen in 3D, Masse und DXF-Laserzuschnitt durch)
- Normteile: Sechskant-, Zylinder-, Senkschraube, Gewindestift, Mutter, Sicherungsmutter, Scheibe, Zylinderstift, Sicherungsring DIN 471, Rillenkugellager 62xx – von oben oder von der Seite
- **Passungen** nach ISO 286 (Abmaße, Spiel/Übermaß), Allgemeintoleranz ISO 2768, Oberflächenangabe Ra
- Linien, Mittellinien und Maße
- Umschaltbar zwischen 2D (Zeichnen) und 3D (Ansehen, Drehen, Zoomen, Teile verschieben und anheben, Schnittansicht), mit Maß-Knopf (Teil anklicken zeigt Länge × Breite × Höhe) und Messen (zwei Punkte anklicken, Ecken rasten ein, auch am CAD-Modell)
- **CAD-Modelle** (STEP, .stp/.step): werden nur im Browser gelesen, nicht hochgeladen und nicht gespeichert. In 2D als grauer Hintergrund (Draufsicht/Vorderansicht/Seitenansicht) mit Kantenfang, in 3D zusammen mit den eigenen Teilen
- Einheiten mm / cm / m umschaltbar, Eingaben wie `25cm` oder `0,3m` möglich
- Automatische Stückliste mit Masse (kg) und Nahtlängen, Schriftfeld
- **Technische Zeichnung** als PDF: Vorder-, Drauf- und Seitenansicht nach Projektionsmethode 1 (europäisch), automatisch aus dem 3D-Modell mit sichtbaren und verdeckten Kanten, Mittellinien, Gesamtmaßen, Rahmen, Schriftfeld (Werkstoff, Allgemeintoleranz, Maßstab, Benennung, Gezeichnet, Datum, Projektionssymbol), Blatt automatisch (A4, bei Bedarf A3) oder fest A4/A3 quer, Hinweise an einer freien Stelle, Maßstab automatisch oder fest (20:1 bis 1:200), Stückliste als zweite Seite
- **3D-Lage**: Teile um X oder Y kippen, z. B. ein Blech aufstellen (Knöpfe „Aufstellen ↥ X / Y“, „Flach legen“ oder Tasten X / Y)
- **Einzelteil-Zeichnung**: Teil auswählen → „Zeichnung“. Das Teil wird gerade hingelegt und bemaßt: Kettenmaße der Bohrungsmitten, „4× Ø11“-Hinweise, Lochkreis, Durchmesser und Absatzlängen bei Wellen, Hinweise wie Zuschnitt, Rohteil, Passfedernut, gestreckte Länge
- **STEP-Export** (AP214): alle oder nur ausgewählte Teile als Volumenkörper in mm für CATIA, SolidWorks, Inventor, Fusion, FreeCAD. Ein geladenes CAD-Modell wird nie mit exportiert
- **Tastenkürzel-Übersicht** mit „?“ oder dem Tastatur-Knopf; am Tablet: lange drücken auf ein Teil = zur Auswahl dazu, auf leerer Fläche = Rahmen aufziehen
- **Demo-Ansicht** (Knopf neben 2D/3D): bunte 3D-Ansicht mit Schatten zum Vorzeigen. Jedes verschiedene Teil bekommt automatisch eine eigene Farbe; Farben je Teil, für gleiche Teile oder je Teil-Art einstellbar, langsam drehen, Bild speichern. Dort wird nur gefärbt, nichts verändert
- Gekippte Bleche nehmen Schrauben und aufliegende Teile mit
- **Gehrung** an Profilen: Enden links/rechts gerade oder 15°–60° (z. B. 45° für Rahmen), sichtbar in 2D, 3D, Zeichnung, STEP; Länge = längste Kante, Gehrung in Stückliste und Zuschnitt
- **Baugruppen**: Teile zusammenfassen (Strg+G), benennen, gemeinsam verschieben, kopieren, spiegeln, kippen; Klick wählt die ganze Gruppe, Alt+Klick oder Doppelklick ein einzelnes Teil; Stückliste gegliedert (1, 1.1, 1.2 …)
- **Baukasten**: Podest mit Gitterrost, Tischgestell, Regal, ortsfeste Leiter (DIN EN ISO 14122-4), Wandkonsole mit Strebe, Treppe wahlweise mit Geländer (Knieleisten oder Stäbe); außerdem Rahmen (Gehrung oder stumpf, Querstreben, Nähte), Geländer (Pfosten, Handlauf, Untergurt, Füllstäbe mit Prüfung lichter Abstand ≤ 12 cm, Fußplatten), Tor (Rahmen auf Gehrung, Füllstäbe, Mittelriegel), Treppe (Schrittmaßregel 2h + a = 630 mm, Wangen, Stufen) per Formular
- **Kommentare** (Werkzeug C): Notiz an ein Teil heften, wandert mit; in 2D als Pin, in 3D als Fähnchen; Liste mit „erledigt“-Haken; in Exporten nicht enthalten
- **Demo „Echt (Material)“**: Stahl roh (Walzhaut), blank, geschliffen, feuerverzinkt, Edelstahl mit Spiegelung, Holz, Gitterrost, Pulverbeschichtung mit RAL-Farben; Umgebung mit Hallenboden, Fliesen, Parkett oder Wiese, Wand hinten/links und Person 1,80 m zum Größenvergleich
- **Kamerafahrt** einmal rundherum und **Video speichern** (WebM)
- **Maße in 3D**: Maßlinien mit Pfeilen für Länge, Breite und Höhe der Auswahl oder des ganzen Modells
- **Startseite mit Vorschaubildern** der Projekte und Beispiele
- **Eingabezeile** (oben rechts, Taste `/`): einfach tippen oder sagen, was man braucht, z. B. „Blech 200x100x10“, „Rechteck 3 cm“, „4 Bohrungen M10 Lochkreis 100“, „Schraube M12x40“, „Rohr 40x40x3 1 m“, „Welle 25x40 35x100“, „Geländer 3 m“; Vorschau vor dem Zeichnen, Rückfragen mit Optionen zum Antippen, wenn etwas fehlt oder unklar ist (Größe, Dicke, Länge, Gewinde, Anordnung, Normgröße), „Meintest du …?“ bei Tippfehlern, Mikrofon für Spracheingabe
- **Aus Foto oder 3D-Scan** (Startseite, Projekt wird automatisch angelegt; auch über Datei-Menü): Foto als Vorlage hinter der Zeichnung, Maßstab über zwei Punkte mit bekannter Länge, verschieben, drehen, Deckkraft; 3D-Scans von Handy-Apps (OBJ, STL, GLB, PLY) mit automatischer Einheit (Meter → mm) und Aufrichtung, in 2D als Ansicht im Hintergrund; Scans werden nur im Browser gemerkt (IndexedDB), nie hochgeladen
- **Explosionsansicht** in der Demo-Ansicht: Teile fahren per Knopf oder Schieberegler auseinander
- **Bauanleitung Schritt für Schritt** (Stückliste → „Bauanleitung“): 3D zeigt nacheinander, welches Teil wann angelegt, geheftet, geschweißt oder verschraubt wird – neue Teile fliegen farbig ein, verbaute Teile werden grau; Teileliste je Schritt, Abspielen, Pfeiltasten, PDF mit einer Seite je Schritt
- **Arbeitsplan automatisch** (Stückliste → „Arbeitsplan“): Sägen (mit Gehrung), Blech schneiden (Schere/Laser), Drehen, Fräsen, Bohren (Ø, Anzahl, Tiefe), Gewinde, Senken, Entgraten, Kanten, Heften, Schweißen (Nahtlängen, a-Maß), Richten, Lackieren/Pulvern/Verzinken, Montage, Endkontrolle – mit groben Rüst- und Stückzeiten, Stückzahl, Stundensatz und PDF
- **3D-Maße** liegen immer sichtbar über dem Modell
- **Foto entzerren** (Foto-Leiste → „Entzerren“): Teil auf A4/A3-Blatt, Scheckkarte oder eigenes Rechteck legen, 4 Ecken antippen – das Foto wird per Homografie gerade gerechnet und maßstäblich 1:1 (flache Teile ca. ±1 mm)
- **Messen in 3D / an Scans**: Abstand, Durchmesser aus 3 Randpunkten, Winkel, Dicke (Fläche → Punkt), Blech aus 3 Ecken; Ergebnis als Bohrung, Ronde oder Blech übernehmen; „Maßstab setzen“ für Scans ohne LiDAR
- **Export** als PDF (A4 quer, je eine Seite 2D-Zeichnung, 3D-Ansicht, Stückliste) oder als ein PNG-Bild; Inhalte frei wählbar; **DXF** als Laser-Zuschnitt (Bleche, Ronden, Abwicklungen mit Biegelinien, 1:1) oder ganze Zeichnung; außerdem SVG

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
- `netlify/functions/library.mjs` – gemeinsame Teile-Bibliothek
- `netlify.toml`, `package.json` – Einstellungen für Netlify
