import './App.css';
import Header from './Header';
import Body from './Body';

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
        <Body />
      </header>
    </div>
  );
}

export default App;
