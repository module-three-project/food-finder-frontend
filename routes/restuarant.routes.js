const router = require("express").Router();

const mongoose = require('mongoose');
const { isAuthenticated } = require("../middleware/jwt.middleware");

const City = require('../models/City.model');
const Restaurant = require('../models/Restaurant.model');


router.post("/restuarants", isAuthenticated, (req,res,next) =>{
    const {
        name,
        address, 
        rating,
        cuisine,
        price,
    } = req.body;

    const newRestaurant = {
        name,
        address, 
        rating,
        cuisine,
        price,
    }; 

    Restaurant.create(newRestaurant)
    .then(response => res.json(response))
    .catch(error => {res.status(500) .json({message: "error creating restaurant", error})})
}); 

