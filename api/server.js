// BUILD YOUR SERVER HERE
const express = require('express');
const Users = require('./users/model')

const server = express();

server.use(express.json());

//ENDPOINTS

//GET
server.get('/api/users', async (req,res)=> {
    try{
        const users = await Users.find()
        res.json(users)
    }
    catch{
        res.status(500).json({ message: "The user information could not be retrieved" })
    }
})

module.exports = server; // EXPORT YOUR SERVER instead of {}
