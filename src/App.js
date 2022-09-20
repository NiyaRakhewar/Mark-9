import React from "react";
import "./styles.css";
import { useState } from "react";

const movieList = {
  HORROR: [
    { name: "Rings", rating: "5/5 ⭐⭐⭐⭐⭐" },
    { name: "Sinister", rating: "4/5 ⭐⭐⭐⭐" },
    { name: "Wrong Turn", rating: "4/5 ⭐⭐⭐⭐" }
  ],

  ROMCOM: [
    {
      name: "Hello, Goodbye, and Everything in Between",
      rating: "4/5 ⭐⭐⭐⭐⭐"
    },
    { name: "No Strings Attached", rating: "3/5 ⭐⭐⭐" },
    { name: "To All The Boys I've Loved Before", rating: "4/5 ⭐⭐⭐⭐" }
  ],
  ACTION: [
    { name: "The Matrix", rating: "5/5 ⭐⭐⭐⭐⭐" },
    { name: "John Wick", rating: "4/5 ⭐⭐⭐⭐" },
    { name: "Batman", rating: "4/5 ⭐⭐⭐⭐" }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("ACTION");
  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1> 🎬 Movies 🎬 </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite Movies. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(movieList).map((genre) => (
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
          {movieList[selectedGenre].map((movie) => (
            <li
              key={movie.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {movie.name} </div>
              <div style={{ fontSize: "smaller" }}> {movie.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
