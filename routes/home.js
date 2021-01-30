const express = require('express');
const router = express.Router();

//Conexión a Home

router.get('/home', (req, res) => {
    res.render('home');
})

module.exports = router;