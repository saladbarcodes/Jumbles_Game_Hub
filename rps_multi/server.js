const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static("public"));

io.on("connection", (socket) => 
{
    console.log("User has connected!");
    
    socket.on("disconnect", () => 
    {
        console.log("User has disconnected");
    });
});

server.listen(3000, () => 
{
    console.log("Server running on http://localhost:3000");
});