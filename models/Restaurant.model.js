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
        enum: ['Japanese', 'Italian', 'Mexican'],
        required: true,
    },
    price: {
        type: String,
        enum: ['€', '€€', '€€€']
    },
    // user:{
    //     type: String}
    city: 
    {
        type: Schema.Types.ObjectId, ref: "City"
    }
});

const Restaurant = model("Restaurant", restaurantSchema);

module.exports = Restaurant;