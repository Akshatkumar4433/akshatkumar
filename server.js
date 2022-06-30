const express = require('express');
const routes = require('./routes')
const port = 8000;
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));


app.use('/',routes())




app.listen(port, () => {
    console.log(`I am Listening at port ${port}`)
})



