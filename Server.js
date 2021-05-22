const express = require('express')
const app = express()
const data = require('./data.json')


app.get('/',(req, res) => {
    res.send("Nani")
})

app.post('/data', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(data)
})

app.post('/data/root', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(data.root)
})

app.post('/data/root/:name',  (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(data.root.find(data => data.name === req.params.name))
})

app.post('/data/matrix', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(data.matrix)
})

app.post('/data/matrix/:name', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(data.matrix.find(data => data.name === req.params.name))
})

app.post('/data/interpolation',  (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(data.interpolation)
})

app.post('/data/interpolation/:name',  (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(data.interpolation.find(data => data.name === req.params.name))
})

app.listen(4040, () => {
    console.log("port 4040")
})