var http = require('http');
var querystring = require('querystring');
var util = require('util');

http.createServer(function(req, res){
    var post = '';     //define a variable post to store the require

    req.on('data', function(chunk){    //use the listener for req.data ，wheneven their is a require put it in the post
        post += chunk;
    });

    req.on('end', function(){    //when the end event is emmite ,use querystring.parse to make POST then return it to customer
        post = querystring.parse(post);
        res.end(util.inspect(post));
    });
}).listen(3000);