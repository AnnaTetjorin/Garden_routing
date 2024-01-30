import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/themeContext";
import { Sale } from "./Sale";
import styles from "./sale.module.css";

export const SaleList = () => {
  const { theme } = useContext(ThemeContext);
  const [saleList, setSaleList] = useState([]);
  useEffect(() => {
    const fetchSale = async () => {
      const response = await fetch("http://127.0.0.1:3333/products/all");
      const data = await response.json();
      const discontedProducts = data.filter(
        (product) => product.discont_price !== null
      );
      setSaleList(() => [...discontedProducts.slice(0, 4)]);
    };
    fetchSale();
  }, []);
  return (
    <div className={theme === "dark" ? styles.divSaleDark : styles.divSale}>
      <div className={styles.h1SpanSale}>
        <h1 className={theme === "dark" ? styles.h1SaleDark : styles.h1Sale}>
          Sale
        </h1>
        <div className={styles.line}></div>
        <Link to="/products">
          <span>All sales</span>
        </Link>
      </div>
      <div className={styles.showAllSale}>
        {saleList.map((product) => (
          <Sale key={product.id} {...product} />
        ))}
      </div>
      <button className={styles.hidden_button}>All sales</button>
    </div>
  );
};
