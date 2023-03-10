const express = require('express');
const { contactoForm } = require('../controllers/contactoForm');

const router = express.Router();

router.get('/donaciones', (req, res)=>{
    res.render('donaciones')
})

router.get('/plantillas', (req, res)=>{
    res.render('plantillas')
})

router.get('/acercaDe', (req, res)=>{
    res.render('acercaDe')
})

router.get('/contacto', (req, res)=>{
    res.render('contacto')
})

router.post('/sendEmail', contactoForm)

router.get('/terminosYcondiciones', (req, res)=>{
    res.render('terminosYcondiciones')
})

router.get('/politicas', (req, res)=>{
    res.render('politicas')
})


module.exports = router