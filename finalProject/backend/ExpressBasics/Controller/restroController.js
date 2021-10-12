
const RestroData = require('../Model/restaurantData');
/**
 *  Auther : Shraddha Raikar
 * Date Modified : 26/9/21
 * It is the most important API of this application. It recieves the parameters through the request body and depending on the criteria will fetch the restro list from the database.
 * It comprises Filttration and Pagination  two main API's
 
 */


//filter function to filter data based on multiple params
exports.filterRestaurant = (req,res) => {

    let { mealtype_Id, cuisine_Id, location_Id, lcost, hcost, page, sort } = req.body;

    page = page ? page : 1;
    sort = sort ?sort : 1;

    let filterPayload = {};
    const itemsPerPage = 2;

    counter = itemsPerPage - 1;

  
    let startIndex = (page - 1)*itemsPerPage;;
    let endIndex = startIndex + itemsPerPage ;
     
    if(mealtype_Id){
        filterPayload = {
            mealtype_id : mealtype_Id
            
        }
        
    }
 
    if(mealtype_Id && cuisine_Id){
        filterPayload = {
            mealtype_id : mealtype_Id,
            cuisine_id : {$in : cuisine_Id } 
        }
       
    }
    
    if(mealtype_Id && hcost && lcost){
        filterPayload = {
            mealtype_id : mealtype_Id,
            min_price : { $lte : hcost , $gte : lcost }
          
        }
        }
  
    if(mealtype_Id && cuisine_Id && lcost && hcost){
        filterPayload = {
            mealtype_id : mealtype_Id,
            cuisine_id : { $in : cuisine_Id },
            min_price : { $lte : hcost , $gte : lcost }
          
        }
        
        }
       
    if(mealtype_Id && location_Id){

        filterPayload = {

            mealtype_id : mealtype_Id,
            location_id : location_Id
        }
    }
  
    if(mealtype_Id && location_Id && cuisine_Id)
    {
        filterPayload = {
           mealtype_id : mealtype_Id,
           location_id : location_Id,
           cuisine_id : { $in : cuisine_Id}

        }
    }
    if(mealtype_Id && cuisine_Id && location_Id && lcost && hcost){
        filterPayload = {
            mealtype_id : mealtype_Id,
            location_id : location_Id,
            cuisine_id : { $in : cuisine_Id},
            min_price : { $lte : hcost , $gte : lcost }
 
         }
    }
    RestroData.find(filterPayload).sort({min_price : sort})
        .then(
        response =>{      
            const count = Math.ceil(response.length/itemsPerPage);
            const pageCountArr = [];
          
            const filterdItems = response.slice(startIndex,endIndex);//excludes item at endIndex
            for(var i =1; i <= count;i++){
                pageCountArr.push(i);
            }
            res.status(200).json({ message : "Restaurant fetched successfully" , restaurants: filterdItems,pageCount : pageCountArr })
        }
    ).catch( error => {
        res.status(500).json({ err : error });
    })
  
}
//Details page

 exports.getRestroById = (req,res) => {
    const { restroId } = req.params;
    RestroData.findById(restroId)
    .then(
        response => {
            res.status(200).json({message : "Restaurant Data Fetched Successfully", restaurant : response });
        }

    ).catch(
        error =>{
        
            res.status(500).json({err : error});
        }
    )

 }
 
exports.getRestroBylocId = (req, res) =>{
    const { locationId } = req.params;
    RestroData.find({ location_id : locationId }).then(
        response => {
            res.status(200).json({message : "Restaurant Data Fetched Successfully", restaurants : response});
        }
    ).catch(

        error =>{
        
            res.status(500).json({err : error});
        }
    )
   
}

   