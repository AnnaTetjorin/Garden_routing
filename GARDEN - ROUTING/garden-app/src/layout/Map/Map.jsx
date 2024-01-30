import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";
import styles from "./map.module.css";

function Map() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme === "dark" ? styles.divMapDark : styles.divMap}>
      <iframe
        className={styles.mapBild}
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9713.636886541603!2d13.3750447!3d52.5079329!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8515353a68755%3A0xd0866511db4f838f!2sStarta%20Institute%20by%20Tel-Ran!5e0!3m2!1sde!2sde!4v1703078741252!5m2!1sde!2sde"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Map;
