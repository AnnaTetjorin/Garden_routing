import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/themeContext";
import styles from "./products.module.css";

export const ProductItemPage = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={
        theme === "dark"
          ? styles.mainCategoriesToolsButtonsDark
          : styles.mainCategoriesToolsButtons
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
      <Link to="/categories">
        <button
          className={
            theme === "dark" ? styles.categoryButtonDark : styles.categoryButton
          }
        >
          Categories
        </button>
      </Link>
      <div
        className={theme === "dark" ? styles.shortLineDark : styles.shortLine}
      ></div>
      <button
        className={
          theme === "dark" ? styles.toolsButtonDark : styles.toolsButton
        }
      >
        Tools and euqipment
      </button>
    </div>
  );
};
