import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/themeContext";
import { Category } from "./Category";
import styles from "./categories.module.css";

export const CategoriesList = ({ content, style }) => {
  const { theme } = useContext(ThemeContext);
  const [categoriesList, setCategoriesList] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch("http://127.0.0.1:3333/categories/all");
      const data = await response.json();
      setCategoriesList(() => [...data]);
    };
    fetchCategories();
  }, []);

  const [category, setCategory] = useState([]);

  const categoryId = 1;

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:3333/categories/${categoryId}`
        );
        const data = await response.json();
        setCategory(data);
      } catch (error) {
        console.error("Error fetching a category:", error);
      }
    };

    fetchCategory();
  }, [categoryId]);

  return (
    <div
      className={
        theme === "dark" ? styles.divCategoriesDark : styles.divCategories
      }
    >
      <div className={styles.h1SpanCategories}>
        <h1 className={theme === "dark" ? styles.h1Dark : styles.h1Light}>
          Categories
        </h1>
        <div className={styles.line} style={style}></div>
        <Link to="/categories">
          <span
            style={style}
            className={theme === "dark" ? styles.spanDark : styles.spanLight}
          >
            All categories
          </span>
        </Link>
      </div>
      <div className={styles.showAllCategories}>
        {content === "main"
          ? categoriesList
              .map((category) => (
                <Link
                  to={`/categories/${category.id}`}
                  key={category.id}
                  className={({ isActive, isPending }) =>
                    isPending ? styles.pending : isActive ? styles.active : ""
                  }
                >
                  <Category {...category} />
                </Link>
              ))
              .splice(0, 4)
          : categoriesList.map((category) => (
              <Link to={`/categories/${category.id}`} key={category.id}>
                <Category {...category} />
              </Link>
            ))}
        <button className={styles.hidden_button}>All categories</button>
      </div>
    </div>
  );
};
