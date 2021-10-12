const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewTypeSchema = new Schema({
 
    comment:{
        type : String,
        require : true
    },
    user_id : {
        type : String,
        require : true


    },
    user_name : {
        type : String,
        require : true


    },
    restro_id : {
        type : String,
        require : true
    }

})
module.exports = mongoose.model('Review',ReviewTypeSchema,'reviews');