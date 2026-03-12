import { neon } from "@neondatabase/serverless";

export default async function handler(req, res) {
  const sql = neon(process.env.DATABASE_URL);

  await sql`
    CREATE TABLE IF NOT EXISTS feature_statuses (
      feature_id TEXT PRIMARY KEY,
      status TEXT NOT NULL,
      updated_at TIMESTAMP DEFAULT NOW()
    )
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS custom_cards (
      id TEXT PRIMARY KEY,
      data JSONB NOT NULL,
      created_at TIMESTAMP DEFAULT NOW()
    )
  `;

  res.json({ ok: true, message: "Tables created" });
}
