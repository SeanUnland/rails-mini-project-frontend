import React from "react";
import { Route, Link } from "react-router-dom";
import Playlist from "./Components/Playlist";
// import Favorites from "./Components/Favorites";
import Form from "./Components/Form";
import "./App.css";

function App() {
  const url = "http://localhost:3000/";

  const [songs, setSongs] = React.useState([]);

  const emptySong = {
    title: "",
    artist: "",
    time: "",
  };

  const [selectedSong, setSelectedSong] = React.useState(emptySong);

  const getSongs = () => {
    fetch(url + "/songs/")
      .then((res) => res.json())
      .then((data) => setSongs(data));
  };

  React.useEffect(() => {
    getSongs();
  }, []);

  const handleCreate = (newSong) => {
    console.log(newSong);
    fetch(url + "/songs/", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSong),
    });
  };

  const updateSong = (song) => {
    fetch(url + "/songs/" + song.id, {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(song),
    }).then(() => {
      getSongs();
    });
  };

  const removeSong = (song) => {
    fetch(url + "/songs/" + song.id, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      getSongs();
    });
  };

  // selects song
  const selectSong = (song) => {
    setSelectedSong(song);
  };

  return (
    <div className="App">
      <header>
        <Link to="/">
          <h1 id="head-title">Tunr.</h1>
        </Link>
        <h2 id="head-subtitle">For all your playlist needs</h2>
        <hr id="red-divider" />
      </header>

      <div id="playlist-div">
        <h1 id="playlist-head">Playlist</h1>
        <Route
          exact
          path="/"
          render={(rp) => (
            <Playlist
              {...rp}
              songs={songs}
              removeSong={removeSong}
              selectSong={selectSong}
            />
          )}
        />
      </div>
      {/* <Route path="/favorites">
        <Favorites faves={faves} onFaveToggle={handleFaveToggle} />
      </Route> */}

      <Route
        exact
        path="/"
        render={(rp) => (
          <Form
            {...rp}
            label="create"
            song={emptySong}
            handleSubmit={handleCreate}
            // updateSong={updateSong}
          />
        )}
      />

      <Route
        exact
        path="/edit"
        render={(rp) => (
          <Form
            {...rp}
            label="update"
            handleSubmit={updateSong}
            song={selectedSong}
          />
        )}
      />
    </div>
  );
}

export default App;
