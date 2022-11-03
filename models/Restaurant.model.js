const { Schema, model } = require("mongoose");

const restaurantSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    address: {
        type: String,
        required: true,
        unique: true,
        
    },
    rating: {
        type: Number,
        required: true,
    },
    cuisine: {
        type: String,
        enum: [
            "American",
            "Austrian",
            "Belgian",
            "British",
            "Carribean",
            "Chinese",
            "Dutch",
            "French",
            "Fusion",
            "German",
            "Greek",
            "Indian",
            "Italian",
            "Japanese",
            "Mexican",
            "Polish",
            "Portuguese",
            "Swiss",
            "Thai",
            "Vietnamese",
            "Other"
          ]
          ,
        required: true,
    },
    price: {
        type: String,
        enum: ['€', '€€', '€€€']
    },
    email:{
        type: String},
    city: 
    {
        type: Schema.Types.ObjectId, ref: "City"
    }
});

const Restaurant = model("Restaurant", restaurantSchema);

module.exports = Restaurant;