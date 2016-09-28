import React from 'react';
import EmojiPicker from './picker';
import $ from 'jquery';

const logChoice = function(emoji) {
    console.log(emoji);
};

const FavsLoader = React.createClass({

    getInitialState: function() {
        return {
            favsEmoticons: {}
        };
    },

    componentDidMount: function() {
        this.serverRequest = $.get(this.props.source, function (result) {
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

            this.setState({
                favsEmoticons: strategy1
            });
        }.bind(this));


    },

    componentWillUnmount: function() {
        this.serverRequest.abort();
    },

    render: function() {
        var favvvss = this.state.favsEmoticons;
        return (
            <div>
                username: {this.state.username}
                gist : {this.state.username} <br/>
                
                <EmojiPicker search={this.props.search} onChange={logChoice} favourites={this.state.favsEmoticons} />
            </div>
        );
    }

});

module.exports = FavsLoader;
