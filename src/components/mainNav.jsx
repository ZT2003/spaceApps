import dashboard from "../assets/icon/dashboard.svg";
import team from "../assets/icon/team.svg";
import references from "../assets/icon/references.svg";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";

function MainNav({ english, setEnglish }) {
  return (
    <>
      <nav className="navigation">
        {english ? (
          <p className="logo">space technicians</p>
        ) : (
          <p className="logo">فنيات الفضاء</p>
        )}
        {english ? (
          <button onClick={() => setEnglish(false)}>ع</button>
        ) : (
          <button onClick={() => setEnglish(true)}>E</button>
        )}
        <ul id="links-list">
          <li>
            <NavLink to="/">
              <img src={dashboard} /> {english ? "Dashboard" : "لوحة البيانات"}
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              <img src={team} /> {english ? "The Team" : "الفريق"}
            </NavLink>
          </li>
          <li>
            <NavLink to="/ref">
              <img src={references} /> {english ? "References" : "المصادر"}
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default MainNav;
