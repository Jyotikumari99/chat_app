/*//const io=require('socket.io')
const socket=io("http://localhost:5000")
const form=document.getElementById('send-container')
const messageInput=document.getElementById('messageInp')
const MessageContainer=document.querySelector(".container")//all message will be droped to conatainer
const append= (message,position)=>{
     const messageElement=document.createElement('div')
     messageElement.innerText=message;
     messageElement.classList.add('message')
     messageElement.classList.add(position)
     MessageContainer.append(messageElement);
}
const name=prompt("enter your name to join");
/*socket.emit('new-user-joined', name);//newuser joinde should be same as socket.on
socket.emit('new-user-joined',name)

socket.on("user-joined",name=>{
    append(`${name} joined the chat`,'right')
 })*/


const socket=io();
let name;
let textarea=document.querySelector('#textarea')
let messageArea=document.querySelector('.message_area')
do{
  name =prompt('please enter your name')
}while(!name)

textarea.addEventListener('keyup',(e)=>{
     if(e.key==='Enter'){
          sendMessage(e.target.value)
     }
})

function sendMessage(message){
let msg={
     user:name,
     message:message.trim()
}
//append
appendMessage(msg,'outgoing')
textarea.value=''
scrollToBottom()
//SEND TO SERVER
 socket.emit('message',msg) 


}

function appendMessage(msg,type){
      let mainDiv=document.createElement('div')
      let className=type
      mainDiv.classList.add(className,'message')
      let markup=`
      <h4>${msg.user}</h4>
      <p>${msg.message}</p>`

      mainDiv.innerHTML=markup
    
      messageArea.appendChild(mainDiv)
}

//recieve message

socket.on('message',(msg)=>{
     //console.log(msg)
     appendMessage(msg,'incoming')
     scrollToBottom();
})

function scrollToBottom(){
     messageArea.scrollTop=messageArea.scrollHeight
}
/*
const socket = io()
let name;
let textarea = document.querySelector('#textarea')
let messageArea = document.querySelector('.message__area')
do {
    name = prompt('Please enter your name: ')
} while(!name)

textarea.addEventListener('keyup', (e) => {
    if(e.key === 'Enter') {
        sendMessage(e.target.value)
    }
})

function sendMessage(message) {
    let msg = {
        user: name,
        message: message.trim()
    }
    // Append 
    appendMessage(msg, 'outgoing')
    textarea.value = ''
    scrollToBottom()

    // Send to server 
    socket.emit('message', msg)

}

function appendMessage(msg, type) {
    let mainDiv = document.createElement('div')
    let className = type
    mainDiv.classList.add(className, 'message')

    let markup = `
        <h4>${msg.user}</h4>
        <p>${msg.message}</p>
    `
    mainDiv.innerHTML = markup
    messageArea.appendChild(mainDiv)
}

// Recieve messages 
socket.on('message', (msg) => {
    appendMessage(msg, 'incoming')
    scrollToBottom()
})

function scrollToBottom() {
    messageArea.scrollTop = messageArea.scrollHeight
}
*/