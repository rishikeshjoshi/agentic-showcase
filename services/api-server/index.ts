
import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';

const app = express();
const PORT = 3001;

app.use(cors());

app.get('/api/tasks', async (req, res) => {
    try {
        const data = fs.readFileSync(path.join(__dirname, '../../data/tasks.json'), 'utf8');
        res.json(JSON.parse(data));
    } catch (error) {
        res.status(500).json({ error: 'Failed to read tasks' });
    }
});

app.listen(PORT, () => {
    console.log(`API Server listening on port ${PORT}`);
});
