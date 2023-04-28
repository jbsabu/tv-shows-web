import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddShow({ setShows }) {
  const [title, setTitle] = useState("");
  const [poster, setPoster] = useState("");
  const [seasons, setSeasons] = useState("");
  const navigate = useNavigate()

  const handleAddShow = (e) => {
    e.preventDefault();

    console.log(e.target.value)
    console.log({ title, poster, seasons })
    const body = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, poster, seasons }),
    }

    fetch("https://tv-shows-api-js.web.app/addshow", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, poster, seasons }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.message) {
          alert(data);
          return;
        }
        setShows(data)
      })
      .catch(alert);
      navigate("/")
  };

  return (
    <>
 
      <h2>Add Show</h2>
      <figure className="form">
      <form onSubmit={handleAddShow}>
        <label htmlFor="title">
          Title
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          ></input>
        </label>
        <br />
        <label htmlFor="poster">
          Poster
          <input
            type="text"
            value={poster}
            onChange={(e) => {
              setPoster(e.target.value);
            }}
          />
        </label>
        <br />
        <label htmlFor="seasons">
          Seasons
          <input
            type="text"
            value={seasons}
            onChange={(e) => {
              setSeasons(e.target.value);
            }}
          />
          <br />
          <input type="submit" value="Add Show" className="submitButton" />
        </label>
      </form>
      </figure>
    </>
  );
}
