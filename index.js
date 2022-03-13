const _Port = process.env.PORT || 3000

const server  = require('./server/index')
const log     = require('morgan')
const policy  = require('cors')
const express = require('express')

const app = express()

app.use(log('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(policy({
    origin:'https://teste-cors-app.herokuapp.com',
    methods:['GET'],
    credentials:true
}))

app.use('/',server)

app.listen(_Port)
