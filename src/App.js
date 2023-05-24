import React, { useCallback, useState } from 'react'
import './App.css';
import SearchBar from './Components/SearchBar';
import SearchResults from './Components/SearchResults';
import Playlist from './Components/Playlist';
import Spotify from './Components/Spotify';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const search = useCallback((term) => {
    Spotify.search(term).then(setSearchResults);
  }, []);

  const addTrack = useCallback(
    (track) => {
      if(playlistTracks.some((savedTrack) => savedTrack.id ===track.id))
        return;

      setPlaylistTracks((prevTracks) => [...prevTracks, track]);
    },
    [playlistTracks]
  );

    const removeTrack = useCallback((track) => {
      setPlaylistTracks((prevTracks) => 
        prevTracks.filter((currentTrack) => currentTrack.id !== track.id)
      );
    }, []);

    const updatePlaylistName = useCallback((name) => {
      setPlaylistName(name);
    }, []);

    const savePlaylist = useCallback(() => {
      const trackUris = playlistTracks.map((track) => track.uri);
      Spotify.savePlaylist(playlistName, trackUris).then(() => {
        setPlaylistName("New Playlist");
        setPlaylistTracks([])
      });
    }, [playlistName, playlistTracks]);

  return (
    <div className='App'>
      <h1>
        Ja<span className='highlight'>mmm</span>ing
      </h1>
      <body className='App'>
      <SearchBar onSearch={search}/>
      <div className='App-Playlist'>
        <SearchResults searchResults={searchResults} onAdd={addTrack} />
        <Playlist 
        playlistName={playlistName}
        playlistTracks={playlistTracks}
        onNameChange={updatePlaylistName}
        onRemove={removeTrack}
        onSave={savePlaylist}
        />
      </div>
      </body>
    </div>
  );
}

export default App;
