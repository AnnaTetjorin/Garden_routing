import { useContext } from "react";
import { Link, useRouteError } from "react-router-dom";
import { ThemeContext } from "../../context/themeContext";
import fourGreen from "../../media/fourGreen.svg";
import kaktus from "../../media/kaktus.svg";
import styles from "./error.module.css";

export default function Error() {
  const { theme } = useContext(ThemeContext);

  const error = useRouteError();
  console.error(error);

  return (
    <div
      className={
        theme === "dark" ? styles.divErrorPageDark : styles.divErrorPage
      }
    >
      <div className={styles.errorPicture}>
        <img className={styles.fourGreen} src={fourGreen} />
        <img className={styles.kaktus} src={kaktus} />
        <img className={styles.fourGreen} src={fourGreen} />
      </div>
      <div className={styles.errorMessage}>
        <h1
          className={
            theme === "dark" ? styles.h1PageNotFoundDark : styles.h1PageNotFound
          }
        >
          Page Not Found
        </h1>
        <p className={styles.pMessage}>
          Sorry, an unexpected error has occurred.
        </p>

        <Link to="/">
          <button className={styles.buttonGoHome}>Go Home</button>
        </Link>
      </div>
    </div>
  );
}

// <p><i>{error.statusText || error.message}</i>   </p>
