import { neon } from "@neondatabase/serverless";

export default async function handler(req, res) {
  const sql = neon(process.env.DATABASE_URL);

  if (req.method === "GET") {
    const rows = await sql`SELECT feature_id, status FROM feature_statuses`;
    const map = {};
    rows.forEach((r) => (map[r.feature_id] = r.status));
    return res.json(map);
  }

  if (req.method === "PUT") {
    const { featureId, status } = req.body;
    if (!featureId || !status) {
      return res.status(400).json({ error: "featureId and status required" });
    }
    await sql`
      INSERT INTO feature_statuses (feature_id, status, updated_at)
      VALUES (${featureId}, ${status}, NOW())
      ON CONFLICT (feature_id) DO UPDATE SET status = ${status}, updated_at = NOW()
    `;
    return res.json({ ok: true });
  }

  if (req.method === "DELETE") {
    const { featureId } = req.body;
    if (!featureId) {
      return res.status(400).json({ error: "featureId required" });
    }
    await sql`DELETE FROM feature_statuses WHERE feature_id = ${featureId}`;
    return res.json({ ok: true });
  }

  res.status(405).json({ error: "Method not allowed" });
}
