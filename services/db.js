const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/blogApp')

//model
const User=mongoose.model('User',{
    name:String,
    email:String,
    password:String
})
const Blog=mongoose.model('Blog',{
    id:String,
    title:String,
    description:String,
    image:String,
    email:String,
    user:String

})
module.exports={
    User,
    Blog
}