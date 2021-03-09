const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000; // Can also set to 443 or 80

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html'); // Used to load the site
});

// Used to open resume
app.get('/resume', (req, res) => {
    res.sendFile(__dirname + '/resume.pdf');
});

app.get('/pictures', (req, res) => {
    res.sendFile(__dirname + '/pictures.html');
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));