const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MenuItemsSchema = new Schema({
    
    name :{
        type : String,
        required : true
    },
    description :{
                type : String,
                required : true
    },
     image:{
            type : String,
            required : true
      },
      price:{
          type : String,
          required : true

      },
      restaurantId:{
        type : String,
        required : true
      }
})

module.exports = mongoose.model('Items',MenuItemsSchema,'items');