import React from 'react'
import './App.css';
import Api from './Api';
import SearchBar from './Components/SearchBar';
import SearchResults from './Components/SearchResults';

function App() {
  return (
    <div className='App'>
      <h1>
        Ja<span className='highlight'>mmm</span>ing
      </h1>
      <body className='App'>
      <SearchBar />
      <div className='App-Playlist'>
        <SearchResults />
      </div>
      </body>
    </div>
  );
}

export default App;
