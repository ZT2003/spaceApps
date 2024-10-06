import MainNav from "../components/mainNav";
import { useState } from "react";

function References({ english, setEnglish }) {
  return (
    <>
      <MainNav english={english} setEnglish={setEnglish} />
      {english ? (
        <div id="reference">
          <h1>references:</h1>
          <div className="content">
            <p>
              {" "}
              all references/data were taken from the official Nasa website
            </p>
            <p>
              {" "}
              you can find more info{" "}
              <a href="https://www.spaceappschallenge.org/nasa-space-apps-2024/challenges/uncover-the-role-of-greenhouse-gases-in-your-neighborhood/?tab=details">
                here
              </a>
            </p>
          </div>
        </div>
      ) : (
        <div id="reference" className="arabic">
          <h1>المصادر:</h1>
          <div className="content">
            <p>كل المصادر والمعلومات أُخذت من صفحة ناسا الرسمية</p>
            <p>
              {" "}
              للمزيد من المعلومات:{" "}
              <a href="https://www.spaceappschallenge.org/nasa-space-apps-2024/challenges/uncover-the-role-of-greenhouse-gases-in-your-neighborhood/?tab=details">
                اضغط هنا
              </a>
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default References;
