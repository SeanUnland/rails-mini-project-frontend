import React from "react";
import FaveIcon from "./FaveIcon";

const Playlist = (props) => {
  //   let songs = props.songs.data;
  let songs = props.songs;
  console.log("songs", songs);

  return (
    <>
      {songs ? (
        <div id="song-list">
          {songs.map((song) => (
            <article>
              <section className="song-title">
                <span id="title-playlist">Title: </span>
                {song.title}
              </section>
              <section>
                <span id="artist-playlist">Artist: </span> {song.artist}
              </section>
              <section>
                <span id="time-playlist">Time: </span> {song.time}
              </section>

              <button
                className="delete"
                onClick={() => {
                  props.removeSong(song);
                  props.history.push("/delete");
                }}
              >
                Delete
              </button>

              <FaveIcon />
            </article>
          ))}
        </div>
      ) : (
        <h1>Add Some Songs!</h1>
      )}
    </>
  );
};

export default Playlist;
