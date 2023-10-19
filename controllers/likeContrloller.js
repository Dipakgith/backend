const post=require("../models/postModel")
const Like=require("../models/likeModel")



exports.likepost=async(req,res)=>
{
    try{
const{post,user}=req.body;
const like=new Like ({
    post,user,
});
const savedLike=awaitlike.save();

const updatedPost=await Post.findByIdAndipdate(post,{$push:{likes:savedLike._id}},{new:true});
req.json({
    post:updatedPost,
});
    }
    catch(error)
    {
return res.status(400).json({
    error:"erroe while fetching post",
});
    }
}


exports.dummyLink=(req,res)=>{
    res.send("this id your dummy link");
};