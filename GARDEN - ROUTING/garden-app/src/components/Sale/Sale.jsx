import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";
import styles from "./sale.module.css";

const calculateDiscountedPrice = (initialPrice, discountPercentage) => {
  const discount = discountPercentage / 100;
  return initialPrice * (1 - discount);
};

export const Sale = ({ image, title, price, discont_price }) => {
  const imageUrl = `http://127.0.0.1:3333${image}`;

  const { theme } = useContext(ThemeContext);

  const priceWithDiscont = calculateDiscountedPrice(price, discont_price);

  return (
    <div className={styles.fourSale}>
      <div className={styles.saleItem}>
        <div>
          <img className={styles.imgSale} src={imageUrl} alt={title} />
          <div className={styles.discont_percent}>{discont_price}%</div>
        </div>
        <div className={styles.twoP}>
          <p className={theme === "dark" ? styles.pSaleDark : styles.pSale}>
            {title}
          </p>
          <div className={styles.prices}>
            <p
              className={
                theme === "dark"
                  ? styles.priceWithDiscontDark
                  : styles.priceWithDiscont
              }
            >
              ${priceWithDiscont.toFixed(2)}
            </p>
            <p
              className={
                theme === "dark" ? styles.initialPriceDark : styles.initialPrice
              }
            >
              ${price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
