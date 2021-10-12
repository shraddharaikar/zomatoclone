const { response } = require('express');
const UserDetail = require('../Model/userDB');

exports.getUserDetails = (req, res) => {

    const { username, password } = req.body;

    let userObj = {};
    userObj = {
        username,
        password
    }

    UserDetail.find(userObj)
        .then(response => {
            if (response.length > 0) {
                res.status(200)
                    .json({
                        message: "User is available",
                        isAuthenticated: true,
                        userObj: response
                    })
            } else {
                res.status(200)
                    .json({
                        message: "User not available",
                        isAuthenticated: false,
                    })
            }
        })
        .catch(error => {
            res.status(500).json({ err: error });
        }

        )



}
exports.saveUsersData = (req, res) => {
    const { username, password, phn_no, email_id } = req.body;
    const userObject = new UserDetail({username,password,phn_no,email_id});
    userObject.save()
        .then(response => {
            res.status(200).json({
                message: "User created successfully",
                isCreated: response
            })
        }

        )
        .catch(error => {
            res.status(500).json({ err: error });
        }

        )}
