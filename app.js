var express = require('express')
    , app = express()
    , port = process.env.PORT || 8080;

var http = require('http').Server(app);
var io = require('socket.io')(http);

var Phone = require('./routes');

app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');

io.on('connection',function(socket) {
    console.log('socket is connected');

    socket.on('message',function(data) {
        io.emit('new-message',data);
    })
});

app.get('/phone/:number',function(req,res){
    res.render('chat', {number: req.param('number')});
} );

app.get('/',function(req,res){
    res.render('chat');
} );

http.listen(port, function () {
    console.log('Listening on port ', port)
})