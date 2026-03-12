import { neon } from "@neondatabase/serverless";

export default async function handler(req, res) {
  const sql = neon(process.env.DATABASE_URL);

  if (req.method === "GET") {
    const rows = await sql`SELECT id, data FROM custom_cards ORDER BY created_at ASC`;
    return res.json(rows.map((r) => ({ id: r.id, ...r.data })));
  }

  if (req.method === "POST") {
    const card = req.body;
    if (!card || !card.id) {
      return res.status(400).json({ error: "card with id required" });
    }
    const { id, ...data } = card;
    await sql`
      INSERT INTO custom_cards (id, data, created_at)
      VALUES (${id}, ${JSON.stringify(data)}, NOW())
      ON CONFLICT (id) DO UPDATE SET data = ${JSON.stringify(data)}
    `;
    return res.json({ ok: true });
  }

  if (req.method === "DELETE") {
    const { id } = req.body;
    if (!id) {
      return res.status(400).json({ error: "id required" });
    }
    await sql`DELETE FROM custom_cards WHERE id = ${id}`;
    return res.json({ ok: true });
  }

  res.status(405).json({ error: "Method not allowed" });
}
