const express = require('express');

const port = 8000;



const app = express();

app.get('/', (request, response) => {
    response.send('Hi Welcome to my website')
})





app.listen(port, () => {
    console.log(`I am Listening at port ${port}`)
})



