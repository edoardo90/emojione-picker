var express = require('express');
var cors = require('cors');

var app = express();
app.use(cors());


var o =
  {
    "dancers":
        {
            "unicode":"1f46f",
            "unicode_alternates":"",
            "name":"woman with bunny ears",
            "shortname":":dancers:",
            "category":"favourites",
            "emoji_order":"142",
            "aliases":[],
            "aliases_ascii":[],
            "keywords":["people","women","sexy","girls night","girls night","boys night","boys night","parties","parties","dance","dance"]
        }
    ,
    "joy":
        {
            "unicode":"1f602",
            "unicode_alternates":"",
            "name":"face with tears of joy",
            "shortname":":joy:",
            "category":"favourites",
            "emoji_order":"4",
            "aliases":[],
            "aliases_ascii":[":')",":'-)"],
            "keywords":["happy","silly","smiley","cry","laugh","laugh","emotion","emotion","sarcastic","sarcastic"]
        },
      "kissing_heart":
        {
          "unicode":"1f618",
          "unicode_alternates":"",
          "name":"face throwing a kiss",
          "shortname":":kissing_heart:",
          "category":"favourites",
          "emoji_order":"18",
          "aliases":[],
          "aliases_ascii":[":*",":-*","=*",":^*"],
          "keywords":["smiley","love","sexy"]
        },
      "smiling_imp":
      {
          "unicode":"1f608",
          "unicode_alternates":"",
          "name":"smiling face with horns",
          "shortname":":smiling_imp:",
          "category":"favourites",
          "emoji_order":"71",
          "aliases":[],
          "aliases_ascii":[],
          "keywords":["silly","smiley","angry","monster","devil","devil","boys night","boys night"]
      }
  };


var strategy1 = Object.assign({}, o);
var exampleFavourites = strategy1;

app.get('/', function (req, res) {
    res.json(exampleFavourites);
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});