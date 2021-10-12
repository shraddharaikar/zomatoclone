

const MenuItem = require('../Model/menuItemsDB');

exports.getMenuItems = (req,res) => {
    const { restroId } =req.params;
    MenuItem.find({restaurantId : restroId }).then(
      response => {
         res.status(200).json({message:"Menu Items fetched successfully" , menuitem : response});
      }
   ).catch(
      err => {
         res.status(500).json({error : err});
      }
   )
   
}