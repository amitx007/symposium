import classes from "./header.module.css";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => {
                return (
                  classes.link + " " + (isActive ? classes.active : undefined)
                );
              }}
              end={true}
            >
              &#60; Model /&#62;
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/algorithm"
              className={({ isActive }) => {
                return (
                  classes.link + " " + (isActive ? classes.active : undefined)
                );
              }}
              end={true}
            >
              &#60; BTS /&#62;
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/abstract"
              className={({ isActive }) => {
                return (
                  classes.link + " " + (isActive ? classes.active : undefined)
                );
              }}
              end={true}
            >
              &#60; ABSTRACT /&#62;
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
