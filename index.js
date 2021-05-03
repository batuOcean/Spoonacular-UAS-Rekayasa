const express = require('express');
const axios = require('axios');
const app = express();

app.get('/food', async (req, res) => {
    const response = await axios.get(
        'https://api.spoonacular.com/recipes/complexSearch?apiKey=496e5dd3967442249b99e538fa53ad04'
    )
    res.send(response.data)
})

app.get('/search', async (req, res) => {
    console.log('halo')
    const cari = req.query.cari;
    const response = await axios.get(
        'https://api.spoonacular.com/recipes/complexSearch?apiKey=496e5dd3967442249b99e538fa53ad04&query=' + cari,
    );
    res.send(response.data)
})

app.get('/ingre', async (req, res) => {
    const bahan = req.query.bahan;
    const response = await axios.get(
        'https://api.spoonacular.com/food/ingredients/search?apiKey=496e5dd3967442249b99e538fa53ad04&query=' + bahan,
    );
    res.send(response.data)
})

app.get('/grocery', async (req, res) => {
    const toko = req.query.toko;
    const response = await axios.get(
        'https://api.spoonacular.com/food/products/search?apiKey=496e5dd3967442249b99e538fa53ad04&query=' + toko,
    );
    res.send(response.data)
})

const server = app.listen(5050, function () {
    const host = server.address().address
    const port = server.address().port
    console.log("UAS Rekayasa Aplikasi Terdistribusi at http://%s:%s", host, port)
})