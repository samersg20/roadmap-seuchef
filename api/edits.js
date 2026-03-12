import { neon } from "@neondatabase/serverless";

export default async function handler(req, res) {
  const sql = neon(process.env.DATABASE_URL);

  if (req.method === "GET") {
    const rows = await sql`SELECT feature_id, data FROM feature_edits`;
    const map = {};
    rows.forEach((r) => (map[r.feature_id] = r.data));
    return res.json(map);
  }

  if (req.method === "PUT") {
    const { featureId, data } = req.body;
    if (!featureId || !data) {
      return res.status(400).json({ error: "featureId and data required" });
    }
    await sql`
      INSERT INTO feature_edits (feature_id, data, updated_at)
      VALUES (${featureId}, ${JSON.stringify(data)}, NOW())
      ON CONFLICT (feature_id) DO UPDATE SET data = ${JSON.stringify(data)}, updated_at = NOW()
    `;
    return res.json({ ok: true });
  }

  res.status(405).json({ error: "Method not allowed" });
}
