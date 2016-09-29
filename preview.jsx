import React from 'react';
import ReactDOM from 'react-dom';
import FavsLoader from './src/favs-loader';

const applicationServer = "http://localhost:3000";

ReactDOM.render( 
    <FavsLoader source={applicationServer} />,
    document.getElementById('example1'));

ReactDOM.render(
    <FavsLoader source={applicationServer} search={true}  />,
    document.getElementById('example2'));


