const router = require("express").Router();

const mongoose = require('mongoose');
const User = require("../models/User.model");

router.get("/profile/:profileId", (req,res,next) =>{
   
    const {profileId} = req.params

    User.findById(profileId)
    .then(foundUser => res.json (foundUser))
    .catch(error => {res.status(500).json({message: "error finding your user", error})})

});

module.exports = router;
