/*//node server which will handle socket io connection
//const express=require('express')

const io=require('socket.io')(5000)
const users={};
io.on('connection',socket=>{//io.on is instance of socket.io listen to everyone who joins the chat
     socket.on('new-user-joined',name=>{//socket.on handles what ehould happen to a particular connection new user joined will append to users and others a event user joined
        console.warn("New user",name);
          users[socket.id]=name;
        socket.broadcast.emit('user-joined',name)
     })
     socket.on('send',message=>{
          socket.broadcast.emit('receive',{message:message,name:user[socket.id]})
     })
})*/
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


/*
const express = require('express')
const app = express()
const http = require('http').createServer(app)

const PORT = process.env.PORT || 3000

http.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/chat.html')
})

// Socket 
const io = require('socket.io')(http)

io.on('connection', (socket) => {
    console.log('Connected...')
    socket.on('message', (msg) => {
        socket.broadcast.emit('message', msg)
    })

})
*/
