const {createBlog,findBlogByUser} = require('../Controller/blogController');
const express = require('express');
const authMiddleWare = require('../auth/auth');
const blog_router = express.Router();

blog_router.post('/:email',createBlog);
blog_router.get('/',authMiddleWare,findBlogByUser)
module.exports = blog_router;