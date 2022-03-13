const _Port = 3000

const server  = require('./server/index')
const log     = require('morgan')
const policy  = require('cors')
const express = require('express')

const app = express()

app.use(log('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(policy({
    origin:'http://192.168.100.20:3003',
    methods:['GET'],
    credentials:true
}))

app.use('/',server)

app.listen(_Port)
