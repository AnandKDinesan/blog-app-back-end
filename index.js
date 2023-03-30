const express=require('express')
const logic=require('./services/logic')
const server=express()
const cors=require('cors')

server.listen(8000,()=>{
    console.log('Server started at port number 8000');
})
//front end connection
server.use(cors({
    origin:'http://localhost:3000'
}))
//coverting json to javascript
server.use(express.json())

//get all users
server.get('/get-all-users',(req,res)=>{
    logic.allUsers().then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

//signUP
server.post('/signUp',(req,res)=>{
    logic.signUp(req.body.name,req.body.email,req.body.password).then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

//signIn
server.post('/signIn',(req,res)=>{
    logic.login(req.body.email,req.body.password).then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

//allBlogs
server.get('/all-blogs',(req,res)=>{
    logic.allBlogs().then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

//addBlog
server.post('/addBlog',(req,res)=>{
    logic.addBlog(req.body.id,req.body.title,req.body.description,req.body.image,req.body.email,req.body.user).then((result)=>{
        res.status(result.statusCode).json(result)
    })
})
//updateBlog
server.put('/upDateBlog/:id',(req,res)=>{
    logic.upDateBlog(req.params.id,req.body.title,req.body.description,req.body.image).then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

//getAblog
server.get('/getAblog/:id',(req,res)=>{
    logic.getAblog(req.params.id).then((result)=>{
        res.status(result.statusCode).json(result)
    })
})
//deleteblog
server.delete('/deleteBlog/:id',(req,res)=>{
    logic.deleteblog(req.params.id).then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

//myBlog
server.post('/myBlog',(req,res)=>{
    logic.myBlog(req.body.email).then((result)=>{
            console.log(req.body)
        res.status(result.statusCode).json(result)
        console.log(result)
    })
})




