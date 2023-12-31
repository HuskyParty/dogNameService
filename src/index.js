const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

require('dotenv').config();

const listNames = require('./routes/listNames');
const addName = require('./routes/addName');
const updateName = require('./routes/updateName');
const deleteName = require('./routes/deleteName');

//express initialization
app.use(express.json());
app.use(express.static(__dirname + '/static'));

//set routes
app.get('/listDogNames', listNames);
app.post('/dogName', addName);
app.put('/dogName', updateName);
app.delete('/dogName', deleteName);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
