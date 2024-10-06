import dashboard from "../assets/dashboard.svg";
import team from "../assets/team.svg";
import references from "../assets/references.svg";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
function MainNav({english, setEnglish}) {
  return (
    <>
      <nav className="navigation">
        <p className="logo">space technicians</p>
        {
          (english)? <button onClick={() => setEnglish(false)}>ع</button> : <button onClick={() => setEnglish(true)}>E</button>
        }
        <ul id="links-list">
          <li>
            <NavLink to="/">
              <img src={dashboard} /> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              <img src={team} />
              the team
            </NavLink>
          </li>
          <li>
            <NavLink to="/ref">
              <img src={references} />
              references
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default MainNav;
