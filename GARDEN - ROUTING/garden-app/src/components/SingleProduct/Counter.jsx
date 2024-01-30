import { useState } from 'react';
import styles from './singleProduct.module.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className={styles.divCounter}>
   
       <button className={styles.minusButton} onClick={handleDecrement}>-</button>
       <button  className={styles.countButton} >{count}</button>
       <button  className={styles.plusButton} onClick={handleIncrement}>+</button>
    </div>
  );
};

export default Counter;