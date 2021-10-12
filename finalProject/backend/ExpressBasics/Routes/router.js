/**
 * Auther : Shraddha Raikar
 * 
 * API Endpoints has to be unique
 */
const express = require('express');
const rout = express.Router();

const locationcontroller = require('../Controller/location');
const mealTypeController = require('../Controller/mealtype');
const restaurantController = require('../Controller/restroController');
const menuItemController = require('../Controller/menuItems');
const paymentController = require('../Controller/payment');
const reviewController = require('../Controller/reviews');
const userController = require('../Controller/users')



rout.get('/locations',locationcontroller.getLocation);
rout.get('/widgit',mealTypeController.getMealType);

rout.get('/restaurants/:locationId',restaurantController.getRestroBylocId);

//Restaurant Details page
rout.get('/restaurant/:restroId',restaurantController.getRestroById);

//Filter API
rout.post('/filter',restaurantController.filterRestaurant);
rout.get('/menuitems/:restroId',menuItemController.getMenuItems);

rout.post("/payment",paymentController.payment);
rout.post("/callback",paymentController.callback);


//User API Login and signup
rout.post('/authenticate',userController.getUserDetails);
rout.post('/userSignUp',userController.saveUsersData);

//reviews

rout.get('/reviewsByRestroId/:restroId',reviewController.getReviewsByRestroId);
rout.get('/usercomments/:userId',reviewController.getCommentsByUserId);
rout.post('/postUserReview',reviewController.saveUserReviews);

module.exports = rout;

