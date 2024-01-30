import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/themeContext";
import styles from "./categories.module.css";

export const CategoryItemPage = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme === "dark" ? styles.buttonsDark : styles.buttons}>
      <div
        className={
          theme === "dark"
            ? styles.mainUndCategoryButtonsDark
            : styles.mainUndCategoryButtons
        }
      >
        <Link to="/">
          <button
            className={
              theme === "dark" ? styles.mainButtonDark : styles.mainButton
            }
          >
            Main Page
          </button>
        </Link>
        <div
          className={theme === "dark" ? styles.shortLineDark : styles.shortLine}
        ></div>

        <button
          className={
            theme === "dark" ? styles.categoryButtonDark : styles.categoryButton
          }
        >
          Categories
        </button>
      </div>
    </div>
  );
};
