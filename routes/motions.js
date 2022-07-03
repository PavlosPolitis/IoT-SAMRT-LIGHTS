const express = require('express');
const { status } = require('express/lib/response');
const router = express.Router();
const Post = require('../models/Motions');

//mas girizei ta panta
router.get('/', async (req, res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message: err});
    }
});

//submit a post
router.post('/', async (req,res) =>{
    const post = new Post({
        id: req.body.id,
        type: req.body.type,
        controlledProperty: req.body.controlledProperty,
        value: req.body.value,
        location: req.body.location
        
    });
    try{
        const savedPost = await post.save();
        res.json(savedPost);
    }
    catch(err){
        res.json({message: err}); 
    }
});

//specific post
router.get('/:postId', async (req,res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch (err) {
        res.json({ message: err });
    }    
});

//delete post
router.delete('/:postId', async (req,res) => {
    try{
        const removedPost = await Post.remove({_id: req.params.postId });
        res.json(removedPost);
    } catch (err) {
        res.json({ message: err });
    }
   
})

//Update a post
router.patch('/:postId', async (req,res) => {
    try{
        const updatedPost = await Post.updateOne(
            { _id: req.params.postId }, 
            { $set: { value: req.body.value } }
            );

        res.json(updatedPost);
    } catch (err) {
        res.json({ message: err });
    }
   
})

module.exports = router;