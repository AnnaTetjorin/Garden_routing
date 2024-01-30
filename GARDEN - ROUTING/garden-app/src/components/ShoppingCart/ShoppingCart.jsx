import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/themeContext";
import styles from "./shoppingCart.module.css";

export const ShoppingCart = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={
        theme === "dark" ? styles.divShoppingCartDark : styles.divShoppingCart
      }
    >
      <div
        className={theme === "dark" ? styles.h1AndSpanDark : styles.h1AndSpan}
      >
        <h1
          className={
            theme === "dark" ? styles.h1ShoppingCartDark : styles.h1ShoppingCart
          }
        >
          Shopping cart
        </h1>
        <div className={styles.line}></div>
        <Link to="/products">
          <span>Back to the store</span>
        </Link>
      </div>
    </div>
  );
};
