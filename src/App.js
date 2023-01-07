import React from "react";
import "./styles.css";
import { useState } from "react";

const songDB = {
  rock: [
    { name: "boulevard of broken dreams", artist: "Green Day" },
    { name: "highway to hell", artist: "AC/DC" },
    { name: "all along the watchtower", artist: "Jimi Hendrix" },
    { name: "hotel california", artist: "Eagles" }
  ],

  pop: [
    {
      name: "attention",
      artist: "Charlie Puth"
    },
    {
      name: "levitating",
      artist: "Dua Lipa"
    },
    {
      name: "save your tears",
      artist: "The Weeknd"
    },
    {
      name: "clam down",
      artist: "rema"
    }
  ],
  blues: [
    {
      name: "thrill is gone",
      artist: "BB King"
    },
    {
      name: "ain't no sunshine",
      artist: "Bill Withers"
    },
    {
      name: "i'm tore down",
      artist: "Freddie King"
    },
    {
      name: "cocain",
      artist: "Eric Clapton"
    }
  ],
  hiphop: [
    {
      name: "gangsta's paradise",
      artist: "Coolio"
    },
    {
      name: "still D.R.E.",
      artist: "Dr. Dre"
    },
    {
      name: "fast lane",
      artist: "Bad meets evil"
    },
    {
      name: "without me",
      artist: "Eminem"
    }
  ]
};

export default function App() {
  var [selectedGenre, setGenre] = useState("rock");
  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1> Song Recommendaions</h1>
      <p>List of songs that you must listen for each genre</p>

      <div>
        {Object.keys(songDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {songDB[selectedGenre].map((song) => (
            <li
              key={song.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              <div style={{ fontSize: "larger" }}> {song.name} </div>
              <div style={{ fontSize: "smaller" }}> {song.artist} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
