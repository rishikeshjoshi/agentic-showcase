const express = require('express'); const app = express(); app.get('/', (req, res) => res.json({ status: 'ok' })); app.listen(3001, () => console.log('API Server running on port 3001'));
