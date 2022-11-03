const router = require("express").Router();

const mongoose = require('mongoose');
const { isAuthenticated } = require("../middleware/jwt.middleware");

const City = require('../models/City.model');
const Restaurant = require('../models/Restaurant.model');


router.post("/cities", isAuthenticated, (req,res,next) => {
    const {
        country,
        cityName,
        description,
    } = req.body; 
    if (country === "" || cityName === "" || description === "") {
        res.status(400).json({ message: "Please fill out all of the fields" });
        return;
      }
    City.create({country, cityName, description, restaurants:[]})
    .then(response => res.json(response))
    .catch(error => {res.status(500) .json({message: "error creating city", error})})
});

router.get("/cities", (req,res,next) =>{
    City.find()
    .populate("restaurants")
    .then(allCity => { 
        console.log(allCity)
        res.json(allCity)
    })
    .catch(error => {res.status(500).json({message: "error getting city", error})})
})

router.get('/cities/:cityId', (req, res, next) => {
    const { cityId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(cityId)) {
        res.status(400).json({ message: 'Specified id is not valid' });
        return;
    }

    // Each Project document has `tasks` array holding `_id`s of Task documents
    // We use .populate() method to get swap the `_id`s for the actual Task documents
    City.findById(cityId)
        .populate('restaurants')
        .then(city => res.json(city))
        .catch(err => {
            console.log("error getting city details...", err);
            res.status(500).json({
                message: "error getting city details...",
                error: err
            })
        });
});


module.exports = router;