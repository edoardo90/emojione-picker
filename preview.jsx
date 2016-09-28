import React from 'react';
import ReactDOM from 'react-dom';
import FavsLoader from './src/favs-loader';


ReactDOM.render( 
    <FavsLoader source="https://api.github.com/users/octocat/gists" />,
    document.getElementById('example1'));

ReactDOM.render(
    <FavsLoader source="https://api.github.com/users/octocat/gists" search={true} />,
    document.getElementById('example2'));


