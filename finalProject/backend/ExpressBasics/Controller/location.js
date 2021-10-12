
const Location = require('../Model/locationDB');

exports.getLocation = (req,res) => {
    Location.find().then(
        response =>{
            
            res.status(200).json({message : "Locations fetched successfully" , location : response});
        }
    ).catch(
        error =>{
        
            res.status(500).json({err : error});
        }
    )
    
}

exports.getLocationById = (req,res) => {
    const { locId } = req.params;
   
    Location.find({location_id : locId}).then(
        response =>{
            
            res.status(200).json({message : "Locations fetched successfully" , location : response});
        }
    ).catch(
        err => {
            response.status(500).json({error : err})
        }
    )   
}