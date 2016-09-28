var express = require('express');
var app = express();

var oo =
    {"dancers2":
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
    };

var o1 =
    {"joy2":
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
        }
    };

var strategy1 = Object.assign({}, oo, o1);
var exampleFavourites = strategy1;

app.get('/', function (req, res) {
    res.json(exampleFavourites);
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});