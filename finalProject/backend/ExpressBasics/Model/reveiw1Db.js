const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewTypeSchema = new Schema({
 
    review_comment:{
        type : String,
        require : true
    },
    user_id : {
        type : Schema.Types.ObjectId,
        ref : "User"


    },
    rest_id : {
        type : Schema.Types.ObjectId,
        ref : "restaurant"
    }

})
module.exports = mongoose.model('Review',ReviewTypeSchema,'reviews');