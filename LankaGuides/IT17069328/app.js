var fs = require('fs');
var file = 'TourGuideList.txt';
var http = require ('http');
var server = http.createServer(function (req, res){
    res.writeHead(200);

    fs.readFile(file, 'utf8', function (err, data) {
        if (err) {
            console.log('Error: ' + err);
            return;
        }

        data = JSON.parse(data);

        res.end(JSON.stringify(data));
    });


});
server.listen(8000);