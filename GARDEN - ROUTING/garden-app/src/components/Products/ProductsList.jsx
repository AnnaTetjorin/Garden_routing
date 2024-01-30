import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/themeContext";
import { Product } from "./Product";
import styles from "./products.module.css";

export const ProductsList = ({ content }) => {
  const { theme } = useContext(ThemeContext);
  const [productsList, setProductsList] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("http://127.0.0.1:3333/products/all");
      const data = await response.json();
      const productsWithoutDiscount = data.filter(
        (product) => product.discont_price === null
      );
      setProductsList(() => [...productsWithoutDiscount]);
    };
    fetchProducts();
  }, []);

  return (
    <div
      className={theme === "dark" ? styles.divProductsDark : styles.divProducts}
    >
      <div className={theme === "dark" ? styles.h1ToolsDark : styles.h1Tools}>
        <h1 className={theme === "dark" ? styles.h1Dark : styles.h1Light}>
          Tools and equipment
        </h1>
      </div>
      <div
        className={
          theme === "dark" ? styles.showAllProductsDark : styles.showAllProducts
        }
      >
        {content === "main"
          ? productsList
              .map((product) => <Product key={product.id} {...product} />)
              .splice(0, 8)
          : productsList.map((product) => (
              <Link to={`/products/${product.id}`} key={product.id}>
                <Product {...product} />
              </Link>
            ))}
      </div>
    </div>
  );
};
