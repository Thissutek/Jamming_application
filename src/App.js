import React from 'react'
import './App.css';
import Header from './Header';
import Api from './Api';
import SearchBar from './Components/SearchBar';
import SearchResults from './Components/SearchResults';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <a
          className="App-link"
          href="https://accounts.spotify.com/en/login?continue=https%3A%2F%2Fopen.spotify.com%2F__noul__%3Fl2l%3D1%26nd%3D1&_locale=en-CA"
          target="_blank"
          rel="noopener noreferrer"
        >
          Spotity Playlist Creator
        </a>
        
      </header>
      <body className='App-Body'>
        <SearchBar className='Search'/>
        <SearchResults />
      </body>
    </div>
  );
}

export default App;
