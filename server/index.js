const db      = require('../db/index')
const express = require('express')
const server  = express.Router()

server.route('/').get(async(req,res)=>{
     await db.select(['id','username','email'])
             .from('users')
             .then(user => res.status(200).json(user))
             .catch(err => res.status(500).send(err))
})

module.exports = server