var express = require('express');
var app = express();
var request = require('request');
// var keys = require('./secret');
// var spotify = require('spotify');
var port = process.env.PORT || 8080;
var favicon = require('serve-favicon');

var Spotify = require('node-spotify-api');

var spotify = new Spotify({
  id: '670239ee509646ceb90b5b6846ed4881',
  secret: '76778e6db2a34f0e96a0fbbd25535f42'
});

var unsplash = require('unsplash-api');
var clientId = '9a1bf40a801d3f2f21cc400f8a491768723587a6231dede6a4eef13056ed8ffe'; //this is required to verify your application's requests
unsplash.init(clientId);

// unsplash.photos.getRandomPhoto({ featured: true })
//     .then(toJson)
//     .then(json => {
//       console.log(json.links.html);
//     });



app.get('/music-for-mood/:mood', function (req, res) {
  spotify.search({
    type: 'album',
    query: req.params.mood
  }, function (err, data) {
    if (data) {
      res.send(data);
      return;
    }
  });
});

// unsplash.getPhotos(null, null, function (error, photos, link) {
//   //Access 20 photos from second page of results here
//   if (photos) {
//     // console.log('photos', photos);
//     return photos;
//   } 
// });

app.get('/imags-for-mood/:mood', function(req,res){
  unsplash.searchPhotos({
    query: req.params.mood
  }, function(err,data){
    if (data) {
      res.send(data);
      return;
    }
  });
});

// app.get('/images-for-mood/:mood', function(req, res) {
//     var options = {
//         url: 'https://api.unsplash.com/search/photos?page=1&query=' + req.params.mood + '&per_page=30&page=2',
//         headers: {
//             'Api-Key': '9a1bf40a801d3f2f21cc400f8a491768723587a6231dede6a4eef13056ed8ffe'
//         }
//     };

//     request(options, function(error, response, body) {
//         if (!error && response.statusCode == 200) {
//           console.log('PHOTOS', body);
//             res.send(body);
//         } else {
//             res.send(error);
//         }
//     });
// });

// app.get('/images-for-mood/:mood', function(req, res) {
//     var options = {
//         url: 'https://api.gettyimages.com/v3/search/images?fields=id,title,thumb,referral_destinations&phrase=' + req.params.mood,
//         headers: {
//             'Api-Key': '732j6vdrs2jg4xttgggcwbhw'
//         }
//     };

//     request(options, function(error, response, body) {
//         if (!error && response.statusCode == 200) {
//             res.send(body);
//         } else {
//             res.send(error);
//         }
//     });
// });


app.use('/', express.static(__dirname + '/app'));
app.use(favicon(__dirname + '/app/favicon.ico'));
app.listen(port);
console.log('App listening on port ' + port);
