//È un esempio sul quale prendere spunto
import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../lib/db"; // connessione MySQL da lib/db.ts
import { QueryResult } from "mysql2";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (typeof id !== "string") {
    return res.status(400).json({ message: "Invalid ID" });
  }

  try {
    switch (req.method) {
      case "GET": {
        const [rows] = await db.execute("SELECT * FROM users WHERE id = ?", [id]);
        if ((rows as QueryResult[]).length <= 0) {
          return res.status(404).json({ message: "User not found" });
        }
        return res.status(200).json(rows);
      }

      case "PUT": {
        const { name, email } = req.body;
        await db.execute(
          "UPDATE users SET name = ?, email = ? WHERE id = ?",
          [name, email, id]
        );
        return res.status(200).json({ message: "User updated successfully" });
      }

      case "DELETE": {
        await db.execute("DELETE FROM users WHERE id = ?", [id]);
        return res.status(200).json({ message: "User deleted successfully" });
      }

      default:
        res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error("API error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
