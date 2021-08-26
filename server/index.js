const express = require('express')
const path = require('path')

const app = express()

// app.use('/css', express.static(__dirname, 'client/style.css'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'));
})

app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/main.js'))
});



const port = process.env.PORT || 4005;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});