const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserDetailsSchema = new Schema({

    username : {
        type : String,
        require : true
    },
    password : {
        type : String,
        require : true
    },
    address : {
        type : String,
        require : true

    },
    email_id : {
        type : String,
        require : true 
    },
    phn_no : {
        type : String,
        require : true 
    }


})
module.exports = mongoose.model('User',UserDetailsSchema,'users');