const customApiError = require('../error/customApiError');
const Blog = require('../model/blogModel');
const User = require('../model/UserModel');

const createBlog = async(req,res)=>{
    try{
        const email = req.params.email; 
        console.log(email);
        const blog  = req.body;
        let author = await User.findOne({email:email});
        blog.author = author;
        console.log(blog);
        const newBlog = await Blog.create(blog);
        res.status(200).json(newBlog);
    }catch(error){
        res.status(500).json(error);
    }
}
    const findBlogByUser = async (req, res,next) => {
        const user = req.user;
        try {
          const author = await User.findOne({ email: user.email });
          // console.log(author);
          const blogs = await Blog.find({ author: author._id });
          res.status(201).json({ blogs });
        } catch (error) {
          console.log(error);
          next(new customApiError(error.message, 500))
        }
      
}
module.exports = {createBlog,findBlogByUser}