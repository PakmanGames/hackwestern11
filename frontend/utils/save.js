import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const data = req.body;

      if (!data) {
        return res.status(400).json({ error: "No data received" });
      }

      // Save the data to a file
      const filePath = path.join(process.cwd(), 'data', 'articles.json');
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

      return res.status(200).json({ message: "Data saved successfully" });
    } catch (error) {
      console.error('Error saving data:', error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}