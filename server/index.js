const express = require('express')
const path = require('path')

const app = express()

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/index.html'));
})

app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/main.js'))
})

app.get('/css', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/style.css'))
})

const port = process.env.PORT || 4005;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});