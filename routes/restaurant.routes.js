const router = require("express").Router();

const mongoose = require('mongoose');
const { isAuthenticated } = require("../middleware/jwt.middleware");

const City = require('../models/City.model');
const Restaurant = require('../models/Restaurant.model');


router.post("/restaurants", (req,res,next) =>{
    const {
        name,
        address, 
        rating,
        cuisine,
        price,
        cityId,
    } = req.body;

    const newRestaurant = {
        name,
        address, 
        rating,
        cuisine,
        price,
        city: cityId
    }; 

    Restaurant.create(newRestaurant)
    .then(response => {
        return City.findByIdAndUpdate (cityId, {$push: {restaurants: response._id } } );
})
.then(response => res.json(response))
.catch(error => {res.status(500) .json({message: "error creating restaurant", error})})});






router.get("/restaurants", (req,res,next) =>{
    Restaurant.find()
    .then(allRestaurants => res.json (allRestaurants))
    .catch(error => {res.status(500).json({message: "error getting restaurant", error})})
})

router.get("/restaurants/:restaurantId", (req,res,next) =>{
   
    const {restaurantId} = req.params

    if (!mongoose.Types.ObjectId.isValid(restaurantId)) {
        res.status(400).json({ message: 'Specified id is not valid' });
        return;
    };

    Restaurant.findById(restaurantId)
    .then(foundRestaurant => res.json (foundRestaurant))
    .catch(error => {res.status(500).json({message: "error getting restaurant", error})})

});

router.put("/restaurants/:restaurantId", (req,res,next) =>{
    
    const {restaurantId} = req.params

    if (!mongoose.Types.ObjectId.isValid(restaurantId)) {
        res.status(400).json({ message: 'Specified id is not valid' });
        return;
    };

    Restaurant.findByIdAndUpdate(restaurantId, req.body, {new:true})
    .then(updatedRestaurant => res.json(updatedRestaurant))
    .catch(error => {res.status(500).json({message: "error updating restaurant", error})})

});

router.delete("/restaurants/:restaurantId", (req,res,next) => {
    
    const {restaurantId} = req.params

    if (!mongoose.Types.ObjectId.isValid(restaurantId)) {
        res.status(400).json({ message: 'Specified id is not valid' });
        return;
    };

    Restaurant.findByIdAndDelete(restaurantId)
    .then (() => res.json ({message: "Restaurant removed"}))
    .catch(error => {res.status(500).json({message: "error deleting restaurant", error})})
});


module.exports = router;