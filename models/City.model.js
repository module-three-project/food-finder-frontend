const { Schema, model } = require("mongoose");

const citySchema = new Schema({
    country: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    restaurants: 
    [{
        type: Schema.Types.ObjectId, ref: "Restaurant"
    }] 
})

const City = model("City", citySchema)

module.exports = City