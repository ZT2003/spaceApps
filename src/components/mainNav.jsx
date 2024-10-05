import dashboard from "../assets/dashboard.svg";
import team from "../assets/team.svg";
import references from "../assets/references.svg";
function MainNav() {
  return (
    <>
      <nav className="navigation">
        <p className="logo">space technicians</p>
        <ul id="links-list">
          <li>
            <a href="#">
              <img src={dashboard} /> Dashboard
            </a>
          </li>
          <li>
            <a href="#">
              <img src={team} />
              the team
            </a>
          </li>
          <li>
            <a href="#">
              <img src={references} />
              references
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default MainNav;
