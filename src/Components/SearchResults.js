import { render } from '@testing-library/react';

import React from 'react';

import './SearchResults.css';

import TrackList from "./TrackList"


const SearchResults = (props) => {
    return(
        <div className='SearchResults'>
            <h2>Results</h2>
            <TrackList tracks={props.searchResults} onAdd={props.onAdd}/>
        </div>
    );
};

export default SearchResults