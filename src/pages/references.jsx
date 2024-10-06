import MainNav from "../components/mainNav";
import { useState } from "react";

function References({english, setEnglish}) {
  return (
    <>
      <MainNav english={english} setEnglish={setEnglish} />
      <h1>references:</h1>
      <p></p>
    </>
  );
}

export default References;
