import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";
import styles from "./products.module.css";

const calculateDiscountedPrice = (initialPrice, discountPercentage) => {
  const discount = discountPercentage / 100;
  return initialPrice * (1 - discount);
};

export const Product = ({ image, title, price, discont_price }) => {
  const imageUrl = `http://127.0.0.1:3333${image}`;

  const priceWithDiscont = calculateDiscountedPrice(price, discont_price);

  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div
        className={
          theme === "dark"
            ? styles.divSingleProductDark
            : styles.divSingleProduct
        }
      >
        <div className={styles.productItemImage}>
          <img className={styles.imgProduct} src={imageUrl} alt={title} />
        </div>

        <div className={styles.greenAddButton}>
          <button className={styles.addButton}>Add to cart</button>
        </div>

        <div className={styles.containerTitlePrice}>
          <h3
            className={theme === "dark" ? styles.h3TitleDark : styles.h3Title}
          >
            {title}
          </h3>
          <div className={styles.divPrices}>
            <div className={styles.priceWithDiscountAndInitial}>
              <p
                className={
                  theme === "dark"
                    ? styles.priceWithDiscontDark
                    : styles.priceWithDiscont
                }
              >
                ${priceWithDiscont.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
