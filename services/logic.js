const db=require('./db')

//get all users
const allUsers=()=>{
    return db.User.find().then((result)=>{
        if(result){
            return{
                statusCode:200,
                users:result
            }
        }
        else{
            return{
                statusCode:404,
                message:"no data is available"
            }
        }
    })
}

// signUp
const signUp=(name,email,password)=>{
    return db.User.findOne({email}).then((result)=>{
        if(result){
            return{
                statusCode:404,
                message:"User already exist!"
            }
        }
        else{
            const newUser=new db.User({
                name,
                email,
                password
            })
            newUser.save()
            return{
                statusCode:200,
                message:"Sign Up Successfull!"
            }
        }
    })
}

//login
const login=(email,password)=>{
    return db.User.findOne({email}).then((result)=>{
        if(result){
            if(result.password==password){
                return{
                    statusCode:200,
                    message:"Sign in Successfull!",
                    user:result
                }
            }
            else{
                return{
                    statusCode:404,
                    message:"Wrong password!"
                }
            }
        }
        else{
            
            return{
                statusCode:404,
                message:"User doesn't exist"
            }
        }
    })
}

//all blogs
const allBlogs=()=>{
    return db.Blog.find().then((result)=>{
        if(result){
            return{
                statusCode:200,
                blogs:result
            }
        }
        else{
            return{
                statusCode:404,
                message:"nothing to display"
            }
        }
    })
}

//addBlog
const addBlog=(id,title,description,image,email,user)=>{
    return db.User.findOne({email}).then((result)=>{
        if(!result){
            return {
                
                statusCode:404,
                message:"User not found"
            
        }
        }
        else{
            const newBlog=db.Blog({
                id,
                title,
                description,
                image,
                email,
                user
            })

            newBlog.save()
            return {
                
                    statusCode:200,
                    message:"Blog added successfully!"
                
            }
        }
    })
    
}

//updateBlog
const upDateBlog=(id,title,description,image)=>{
    return db.Blog.findOne({id}).then((result)=>{
        if(result){
            result.title=title
            result.description=description
            result.image=image
            result.save()
            return {
                
                statusCode:200,
                message:"Blog updated successfully!"
            
        }

        }
        else{
            return {
                
                statusCode:404,
                message:"Nothing to display!"
            
        }
        }

    })
}

//getAblog
const getAblog=(id)=>{
    return db.Blog.findOne({id}).then((result)=>{
        if(result){
            return {
                statusCode:200,
                blog:result
             }
        }
        else{
            return {
                 statusCode:404,
                 message:"Nothing to display!"
                }
        }
    })
}

//deleteBlog
const deleteblog=(id)=>{
    return db.Blog.deleteOne({id}).then((result)=>{
        if(result){
            return {
                statusCode:200,
                message:"Blog deleted Successfully!!"
               }
        }
        else{
            return {
                statusCode:404,
                message:"Nothing to delete!!"
               }
        }
    })
}

//myBlog
const myBlog=(email)=>{
    console.log(email)
    return db.Blog.find({email}).then((result)=>{
        if(result){
            return{
                statusCode:200,
                blogs:result

            }
          
        }
        else{
           return {
                statusCode:200,
                message:"Nothing to display"
               }
        }
    })
}

module.exports={
    allUsers,
    signUp,
    login,
    allBlogs,
    addBlog,
    upDateBlog,
    getAblog,
    deleteblog,
    myBlog
}