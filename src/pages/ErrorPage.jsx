import classes from "../style/Error.module.css";
import { NavLink } from "react-router-dom";
import image from "../assets/house-chimney.png";
export default function ErrorPage() {
  return (
    <div className={classes.errorContainer}>
      <p className={classes.errorMessage}>&#60;Error 404/&#62;</p>
      <p className={classes.errorText}>
        Sorry we couldn&#39;t find a page you are looking for .
      </p>
      <p className={classes.text}>Try going back to our HomePage</p>
      <button className={classes.backButton}>
        <NavLink to="/">
          <img src={image} alt="home" />
        </NavLink>
      </button>
    </div>
  );
}
