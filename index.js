import express from 'express';

const app = express();

app.get('/', (req, res) => res.send('hello world'));
app.get('/hv', (req, res) => res.send('hello from hv'));

app.listen(3000, () => { console.log('Listening on port 3000'); });