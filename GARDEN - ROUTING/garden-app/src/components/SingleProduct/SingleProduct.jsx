import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";
import Counter from "./Counter";
import { SingleProductItem } from "./SingleProductItem";
import styles from "./singleProduct.module.css";

const calculateDiscountedPrice = (initialPrice, discountPercentage) => {
  const discount = discountPercentage / 100;
  return initialPrice * (1 - discount);
};

export const SingleProduct = ({
  image,
  title,
  price,
  discont_price,
  description,
}) => {
  const imageUrl = `http://127.0.0.1:3333${image}`;

  const priceWithDiscont = calculateDiscountedPrice(price, discont_price);

  const { theme } = useContext(ThemeContext);

  return (
    <>
      <SingleProductItem />

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
        <div className={styles.containerTitlePrice}>
          <h3
            className={theme === "dark" ? styles.h3TitleDark : styles.h3Title}
          >
            {title}
          </h3>
          <div className={styles.divPrices}>
            <p
              className={
                theme === "dark"
                  ? styles.priceWithDiscontDark
                  : styles.priceWithDiscont
              }
            >
              ${priceWithDiscont.toFixed(2)}
            </p>
            <p className={styles.initialPrice}>${price}</p>
            <div className={styles.discont_percent}>{discont_price}%</div>
          </div>

          <div className={styles.counterUndButton}>
            <div className={styles.counter}>
              <Counter />
            </div>
            <button className={styles.addButton}>Add to cart</button>
          </div>

          <div className={styles.productDescription}>
            <h6 className={theme === "dark" ? styles.h6Dark : styles.h6Light}>
              Description
            </h6>
            <p
              className={theme === "dark" ? styles.textDark : styles.textLight}
            >
              {description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
