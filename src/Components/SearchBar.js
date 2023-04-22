import React from 'react';
import './SearchBar.css'

function SearchBar(props) {
    return(
        <div className='SearchBar'>
            <input type='text' placeholder='Enter a Song Title'/>
            <button className='SearchButton'>
                Search
            </button>
        </div>
    );
};

export default SearchBar; 