var express = require('express');
var app = express();
var request = require('request');
var spotify = require('spotify');


var port = process.env.PORT || 8080;

app.get('/music-for-mood/:mood', function(req, res) {
    spotify.search({
        type: 'album',
        query: req.params.mood
    }, function(err, data) {
        if (data) {
            res.send(data);
            return;
        }
    });
});

app.get('/images-for-mood/:mood', function(req, res) {
    var options = {
        url: 'https://api.gettyimages.com/v3/search/images?fields=id,title,thumb,referral_destinations&phrase=' + req.params.mood,
        headers: {
            'Api-Key': 'b4734jk5yhgqgv9v4grh923q'
        }
    };

    request(options, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(body);
        } else {
            res.send(error);
        }
    });
});


app.use('/', express.static(__dirname + ''));
app.listen(port);
console.log('App listening on port ' + port);
