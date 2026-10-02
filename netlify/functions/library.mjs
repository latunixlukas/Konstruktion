// Gemeinsame Teile-Bibliothek (Netlify Blobs). Gleicher Werkstatt-Code wie bei den Projekten.
import { getStore } from "@netlify/blobs";

const ID = /^[a-z0-9]{6,40}$/;
const MAX_BYTES = 300_000;

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

  const store = getStore({ name: "bibliothek", consistency: "strong" });
  const id = new URL(req.url).searchParams.get("id");
  if (id !== null && !ID.test(id)) return json({ error: "Ungültige ID" }, 400);

  if (req.method === "GET" && id === null) {
    const { blobs } = await store.list();
    const items = (await Promise.all(blobs.map((b) => store.get(b.key, { type: "json" })))).filter(Boolean);
    items.sort((a, b) => (b.updated || 0) - (a.updated || 0));
    return json(items);
  }

  if (id === null) return json({ error: "ID fehlt" }, 400);

  if (req.method === "PUT") {
    const text = await req.text();
    if (text.length > MAX_BYTES) return json({ error: "Eintrag ist zu groß" }, 413);
    let rec;
    try { rec = JSON.parse(text); } catch { return json({ error: "Ungültige Daten" }, 400); }
    if (!rec || !Array.isArray(rec.shapes) || !rec.shapes.length || rec.shapes.length > 500) {
      return json({ error: "Ungültige Daten" }, 400);
    }
    const item = {
      id,
      name: String(rec.name || "Ohne Namen").slice(0, 80),
      cat: String(rec.cat || "Sonstiges").slice(0, 40),
      desc: String(rec.desc || "").slice(0, 200),
      by: String(rec.by || "").slice(0, 60),
      updated: Date.now(),
      shapes: rec.shapes,
    };
    await store.setJSON(id, item);
    return json({ ok: true });
  }

  if (req.method === "DELETE") {
    await store.delete(id);
    return json({ ok: true });
  }

  return json({ error: "Methode nicht erlaubt" }, 405);
};

export const config = { path: "/api/library" };
