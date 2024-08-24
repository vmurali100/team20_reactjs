import React from "react";
import { useState } from "react";

const Gallery = () => {
  const [userinput, setUserinput] = useState("");
  const [photos, setPhotos] = useState([]);

  const searchPhotos = async () => {
    const { results } = await (
      await fetch(
        `https://api.unsplash.com/search/photos?query=${userinput}&client_id=-rZ9Hyx27sJiorOQEpZCH-ExarlbnyOntL8ALB8S6Mk`
      )
    ).json();
    console.log(results);
    setPhotos(results);
  };
  return (
    <div>
      <form>
        <input
          type="text"
          value={userinput}
          onChange={(e) => {
            setUserinput(e.target.value);
          }}
          name="userinput"
          id=""
        />{" "}
        <button type="button" onClick={searchPhotos}>
          Search
        </button>
      </form>

      <ul>
        {photos.map((obj,i)=> <li key={i}>
            <img src={obj.urls.thumb} alt="" />
        </li> )}
      </ul>
    </div>
  );
};

export default Gallery;
