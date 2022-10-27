const { Schema, model } = require("mongoose");

const citySchema = new Schema({
    country: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }

})

const City = model("City", citySchema);

module.exports = City;