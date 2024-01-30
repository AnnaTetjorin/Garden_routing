import { Link } from "react-router-dom";
import discountBackground from "..//..//media/discountBackground.svg";
import styles from "./discount.module.css";

function Discount() {
  return (
    <>
      <div
        className={styles.divDiscount}
        style={{ backgroundImage: "url(" + discountBackground + ")" }}
      >
        <h1 className={styles.h1Amazing}>
          Amazing Discounts on Garden Products!
        </h1>
        <Link to="/products">
          <button className={styles.greenButton}>Check out</button>
        </Link>
      </div>
    </>
  );
}
export default Discount;
