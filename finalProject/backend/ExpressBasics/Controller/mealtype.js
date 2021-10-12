

const Mealtype = require('../Model/mealtypeDB');

exports.getMealType = (req,res) => {
   Mealtype.find().then(
      response => {
         res.status(200).json({message:"Mealtypes fetched successfully" , mealtype : response});
      }
   ).catch(
      err => {
         res.status(500).json({error : err});
      }
   )
   
}