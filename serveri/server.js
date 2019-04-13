const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const { createConnection, makeQuery, printAll } = require('./connectDb');

const port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

let userData = {};
let pool;

app.get('/', (req, res) => {
    res.send('Toimii!');
});

app.post('/form-data-url', async (req, res) => {
    const { host, user, password, database } = req.body;

    userData = {
        host,
        user,
        password,
        database
    };
    
    
    pool = await createConnection(userData.host, userData.user, userData.password, userData.database);
    const arr = await makeQuery(pool, `SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = '${database}'`);
    
    res.json(arr);
    
});

app.post('/query', async (req, res) => {
    const body = req.body;
    let arr = [];
   
    for (let string of body.string) {
        arr.push(...await makeQuery(pool, string));
    }
    
    res.json(arr);
});

app.get('/printAll', async (req, res) => {
    
    res.json(await printAll(pool, userData.database));

});

app.listen(port, () => {
    console.log('serveri palveluksessanne');
});

