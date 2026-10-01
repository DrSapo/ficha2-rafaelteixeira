const express = require('express');
const app = express();

app.get('/', (req,res) =>  {
    res.send('Hello, Wolrd!');
});

app.use('/', (req,res) =>  {
    res.status(404).send('404 Not Found');
});

app.listen(3000, () => {
    console.log('server is runing on http://localhost:3000');
});

