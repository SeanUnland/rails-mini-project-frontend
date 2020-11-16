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
              <section className="song-title">{song.title}</section>
              <section>{song.time}</section>
              <section>{song.artist}</section>
              <section
                className="delete"
                onClick={() => {
                  props.removeSong(song);
                  props.history.push("/");
                }}
              >
                X
              </section>
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
