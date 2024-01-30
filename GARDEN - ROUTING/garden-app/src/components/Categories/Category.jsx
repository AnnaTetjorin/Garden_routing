import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";
import styles from "./categories.module.css";

export const Category = ({ image, title }) => {
  const { theme } = useContext(ThemeContext);
  const imageUrl = `http://127.0.0.1:3333${image}`;

  return (
    <div className={styles.fourCategories}>
      <div className={styles.categoryItem}>
        <img className={styles.imgCategory} src={imageUrl} alt={title} />

        <p
          className={theme === "dark" ? styles.pCategoryDark : styles.pCategory}
        >
          {title}
        </p>
      </div>
    </div>
  );
};
