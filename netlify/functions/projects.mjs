// Speichert die Projekte der Azubis in Netlify Blobs.
// Optional: Umgebungsvariable WERKSTATT_CODE setzen, dann braucht man den Code zum Öffnen und Speichern.
import { getStore } from "@netlify/blobs";

const ID = /^[a-z0-9]{6,40}$/;
const MAX_BYTES = 2_000_000;

const json = (data, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" },
  });

export default async (req) => {
  const code = globalThis.Netlify?.env.get("WERKSTATT_CODE") ?? process.env.WERKSTATT_CODE;
  if (code && req.headers.get("x-werkstatt-code") !== code) {
    return json({ error: "Werkstatt-Code fehlt oder ist falsch" }, 401);
  }

  const store = getStore({ name: "projekte", consistency: "strong" });
  const id = new URL(req.url).searchParams.get("id");
  if (id !== null && !ID.test(id)) return json({ error: "Ungültige Projekt-ID" }, 400);

  if (req.method === "GET" && id === null) {
    const { blobs } = await store.list();
    const list = await Promise.all(
      blobs.map(async (b) => {
        const m = await store.getMetadata(b.key);
        return { id: b.key, ...(m?.metadata || {}) };
      })
    );
    list.sort((a, b) => (b.updated || 0) - (a.updated || 0));
    return json(list);
  }

  if (id === null) return json({ error: "Projekt-ID fehlt" }, 400);

  if (req.method === "GET") {
    const rec = await store.get(id, { type: "json" });
    return rec ? json(rec) : json({ error: "Projekt nicht gefunden" }, 404);
  }

  if (req.method === "PUT") {
    const text = await req.text();
    if (text.length > MAX_BYTES) return json({ error: "Projekt ist zu groß" }, 413);
    let rec;
    try { rec = JSON.parse(text); } catch { return json({ error: "Ungültige Daten" }, 400); }
    if (!rec || typeof rec !== "object" || !rec.data || !Array.isArray(rec.data.shapes)) {
      return json({ error: "Ungültige Daten" }, 400);
    }
    const name = String(rec.name || "Ohne Namen").slice(0, 80);
    const by = String(rec.by || "").slice(0, 60);
    const updated = Date.now();
    await store.setJSON(id, { id, name, by, updated, data: rec.data }, { metadata: { name, by, updated } });
    return json({ ok: true, updated });
  }

  if (req.method === "DELETE") {
    await store.delete(id);
    return json({ ok: true });
  }

  return json({ error: "Methode nicht erlaubt" }, 405);
};

export const config = { path: "/api/projects" };
