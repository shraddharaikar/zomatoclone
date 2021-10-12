const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const LocationSchema = new Schema({
    id : {
        type : String,  
        required : true
    },
    name :{
        type : String,
        required : true
    },
    city_id :{
                type : Number,
                required : true
    },
     location_id : {
                type : Number,
                required : true
     },
      country_name:{
            type : String,
            required : true
      }
})

module.exports = mongoose.model('location',LocationSchema,'locations');