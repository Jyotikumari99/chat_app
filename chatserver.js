
//const io=require('socket.io')

const express=require('express');
const app=express()
const http=require('http').createServer(app)
const PORT=process.env.PORT||3000

http.listen(PORT,()=>{
     console.log(`listening to port ${PORT}`)

})
app.use(express.static(__dirname+'/public'))
//app.use(express.static("public"));
app.get('/',(req,res)=>{
     //res.send("hello")
     res.sendFile(__dirname+"/index.html")
})


//socket
const io=require('socket.io')(http)
io.on('connection',(socket)=>{
     console.log('connected...')
     socket.on('message',(msg)=>{
        // console.log(msg)
        socket.broadcast.emit('message',msg)//to send msg to all server browser connected to the socket

     })
})


