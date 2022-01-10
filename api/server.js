// BUILD YOUR SERVER HERE
const express = require('express');
const Users = require('./users/model')

const server = express();

server.use(express.json());

//ENDPOINTS
//POST
server.post('/api/users',async(req,res) => {
    try{
        const { name,bio } = req.body
        console.log(name,bio)
        if(!name || !bio){
            res.status(400).json({ message: "Please provide name and bio for the user" })
        }else{
            const newUser = await Users.insert({ name,bio })
            console.log(newUser)
            res.status(201).json(newUser)
        }

    }
    catch{
        res.status(500).json({ message: "There was an error while saving the user to the database" })
    }
})

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
