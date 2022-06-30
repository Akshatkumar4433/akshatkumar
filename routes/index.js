const express = require('express')

const router = express.Router();


module.exports = () => {
    router.get('/', (request, response) => {
        response.send('index.html')
    })
    
    return router
}