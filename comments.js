// Create a web server
// Get the comments from the database
// Send the comments back to the client
// Load the comments on the client side

// Import the express module
const express = require('express');
// Create a router object
const router = express.Router();
// Import the Comment model
const Comment = require('../models/comment');

// Create a route for getting all comments
router.get('/comments', function(req, res, next){
    // Query the database
    Comment.find(function(err, comments){
        // If there is an error, send the error
        if (err) {
            res.send(err);
        }
        // If there is no error, send the comments
        else {
            res.json(comments);
        }
    });
});

// Create a route for saving a comment
router.post('/comment', function(req, res, next){
    // Create a new comment using the Comment model
    let newComment = new Comment({
        username: req.body.username,
        comment: req.body.comment
    });
    // Save the comment to the database
    newComment.save(function(err, comment){
        // If there is an error, send the error
        if (err) {
            res.send(err);
        }
        // If there is no error, send the comment
        else {
            res.json(comment);
        }
    });
});

// Export the router
module.exports = router;