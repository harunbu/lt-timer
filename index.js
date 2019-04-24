const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require('socket.io')(http);

app.use(express.static('public'));

const PORT = process.argv[2] | 3000;

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/operator', function(req, res){
    res.sendFile(__dirname + '/operator.html');
});

io.on('connection', function(socket){
    console.log('an user connected');

    //開始／停止
    socket.on('toggle', function(){
        console.log('toggle');
        io.emit('toggle');
    });

    //リセット
    socket.on('reset', function(){
        console.log('reset');
        io.emit('reset');
    });
});

http.listen(PORT, function(){
    console.log(`listening on *:${PORT}`);
});