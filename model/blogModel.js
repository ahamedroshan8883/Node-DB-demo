const mongoose = require('mongoose');
const BlogSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true,
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
    tags:{
        type:[String],
        default:[],
    },
    createdAt:{
        type:Date
    },updatedAt:{
        type:Date
    },
    likes:{
        type:Number
    }
});
const Blog = mongoose.model('Blog',BlogSchema);
module.exports = Blog;