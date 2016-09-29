import React from 'react';
import EmojiPicker from './picker';
import $ from 'jquery';


const FavsLoader = React.createClass({

    getInitialState: function() {
        return {
            favsEmoticons: {}
        };
    },

    componentDidMount: function() {
        this.serverRequest = $.get(this.props.source, function (result) {
            this.setState({
                favsEmoticons: result
            });
        }.bind(this));
    },

    componentWillUnmount: function() {
        this.serverRequest.abort();
    },

    render: function() {
        return (
            <EmojiPicker search={this.props.search} favourites={this.state.favsEmoticons} />
        );
    }

});

module.exports = FavsLoader;
