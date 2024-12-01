import fs from 'fs';
import path from 'path';

export function getData() {
  const filePath = path.join(process.cwd(), 'data', 'articles.json');
  try {
    const jsonData = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(jsonData);
  } catch (error) {
    console.error('Error reading data:', error);
    return [];
  }
}