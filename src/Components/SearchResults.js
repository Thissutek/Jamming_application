import { render } from '@testing-library/react';
import React from 'react';
import '../App.css'



function SearchResults() {
    return(
        <div className='Search-Results-Container'>
            <h2>Results</h2>
            <div >
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    );
};

export default SearchResults