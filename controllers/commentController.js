const Post=require("../models/postModel");
const Comment=require("../models/commentModel");


exports.createComment =async(req,res)=>{
    try{
       //fetch data from req body
       const{Post,user,body}=req.body;

       const comment=new Comment({
        post,user,body
       });

   const saveComment=await comment.save();


   const updatedPost =await Post.findByIdAndUpdate(Post,{$push:{comments:saveComment._id}},{new:true})  
                     .populate("comments")
                     .exec();
          res.json({
            Post:updatedPost,

          })
    }
    catch(error){
             return res.status(500).json({
                 error:"error while creating comment",
             });
    }
}
