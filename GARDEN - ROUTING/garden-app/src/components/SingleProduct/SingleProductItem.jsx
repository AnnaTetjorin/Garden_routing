import styles from './singleProduct.module.css'


export const SingleProductItem = () => {
   
    return (
    <div className={styles.mainCategoriesToolsButtons}>
        <button className={styles.mainButton}>Main Page</button>
        <div className={styles.shortLine}></div>
        <button className={styles.categoryButton}>Categories</button>
        <div className={styles.shortLine}></div>
        <button className={styles.toolsButton}>Tools and euqipment</button>
        <div className={styles.shortLine}></div>
        <button className={styles.secateursButton}>Secateurs</button>
    </div>
    )
}