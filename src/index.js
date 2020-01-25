

const path=require("path")
const http=require("http")
const express=require("express")
const app=express()
const socketio=require("socket.io")
const server=http.createServer(app)

const io=socketio(server)

const port=process.env.PORT||7211

const publicDirectoryPath=path.join(__dirname,"../public")

app.use(express.static(publicDirectoryPath))

io.on("connection",()=>{
    console.log("New web socket connection");
    
})

server.listen(port,()=>{
    console.log(`Server is on port ${port}`);
    
})