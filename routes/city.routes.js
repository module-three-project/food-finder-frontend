const router = require("express").Router();

const mongoose = require('mongoose');
const { isAuthenticated } = require("../middleware/jwt.middleware");

const City = require('../models/City.model');
const Restaurant = require('../models/Restaurant.model');


router.post("/cities", (req,res,next) => {
    const {
        country,
        cityName,
        description,
    } = req.body; 

    City.create({country, cityName, description, restaurants:[]})
    .then(response => res.json(response))
    .catch(error => {res.status(500) .json({message: "error creating city", error})})
});

router.get("/cities", (req,res,next) =>{
    City.find()
    // .populate("restaurants")
    .then(allCity => res.json(allCity))
    .catch(error => {res.status(500).json({message: "error getting city", error})})
})


module.exports = router;