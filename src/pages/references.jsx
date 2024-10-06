import MainNav from "../components/mainNav";
import { useState } from "react";

function References({ english, setEnglish }) {
  return (
    <>
      <MainNav english={english} setEnglish={setEnglish} />
      <div id="dashboard">
        <h1>references:</h1>
        <p> all references/data were taken from the oficial Nasa website</p>
        <p>
          {" "}
          you can find more info{" "}
          <a href="https://www.spaceappschallenge.org/nasa-space-apps-2024/challenges/uncover-the-role-of-greenhouse-gases-in-your-neighborhood/?tab=details">
            here
          </a>
        </p>
      </div>
    </>
  );
}

export default References;
