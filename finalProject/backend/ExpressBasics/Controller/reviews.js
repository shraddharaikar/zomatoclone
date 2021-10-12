const { response } = require('express');
const ReiviewComment = require('../Model/reviewDB');

exports.getReviewsByRestroId = (req, res) => {

    const { restroId } = req.params;
   console.log("restroId : "+restroId);
    ReiviewComment.find({ restro_id: restroId })
        .then(
            response => {
                console.log("respnse"+response);
                res.status(200).json({ message: "reviews fetched", reviews: response });
            }
        )
        .catch(
            err => {
                res.status(500).json({ error: err });
            }
        )
}

exports.getCommentsByUserId = (req, res) => {
    const { userId } = req.params;

    ReiviewComment.find({ user_id: userId })
        .then(
            response => {
                console.log("respnse"+response);
                res.status(200).json({ message: "reviews fetched", reviews: response });
            }
        )
        .catch(
            err => {
                res.status(500).json({ error: err });
            }
        )


    //it will display all comments of that particular user


}

exports.saveUserReviews = (req, res) => {
    const { rest_id, user_id, review_comment } = req.body;

    const reveiwObj = new ReiviewComment({ rest_id, user_id, review_comment });
    reveiwObj.save()
        .then(response => {
            res.status(200).json({
                message: "Comment posted successfully",
                isCreated: response
            })
        }

        )
        .catch(
            err => {
                res.status(500).json({ error: err });
            }
        )

}



