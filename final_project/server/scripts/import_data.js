import '../src/db/mongodb.js';
import Vocabulary from '../src/models/vocabulary.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const data = fs.readFileSync(path.resolve(__dirname, '../data/englishdictionary.json'));

const vocabularies = JSON.parse(data).entries;

console.log('Importing data...')
Vocabulary.collection.insertMany(vocabularies, (err, result) => {
    console.log(`Inserted ${result.insertedCount} documents`)
})
