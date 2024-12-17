const express = require('express')
const db = require('./db')
const app = express()
const port = 8181
const bodyParser = require("body-parser");
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// GET
app.get('/hello_world', async (req, res) => {
    try {
        res.send("hello world");
    } catch (err) {
        throw err;
    }
});

app.get('/users', async (req, res) => {
    try {
        const result = await db.pool.query("select * from users");
        res.send(result);
    } catch (err) {
        throw err;
    }
});

app.listen(port, () => console.log(`Listening on port ${port}`));
