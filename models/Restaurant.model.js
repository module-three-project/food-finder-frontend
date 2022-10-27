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
    Cuisine: {
        type: String,
        enum: ['Japanese', 'Italian', 'Mexican'],
        required: true,
    },
    Price: {
        type: String,
        enum: ['€', '€€', '€€€']
    },
    // user:{
    //     type: String}
})