const express=require("express");

const router=express.Router();


const{dummyLink,likepost}=require("../controllers/LikeContrloller");
const {createComment}=require("../controllers/commentController");
const{createpost,getAllPosts}=require("../controllers/PostController");

router.get("/dummyroute",dummyLink);
router.post("/comments/create",createComment);
router.post("/posts/create",createpost);
router.get("/posts",getAllPosts);
router.post("/likes/like",likepost);

module.exports=router;