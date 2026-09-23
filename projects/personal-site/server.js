const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.get('/health', (_req, res) => res.json({ ok: true, site: 'Sachin Kumar portfolio' }));
const port = process.env.PORT || 3000;
app.listen(port, '0.0.0.0', () => console.log(`Portfolio is live on port ${port}`));
