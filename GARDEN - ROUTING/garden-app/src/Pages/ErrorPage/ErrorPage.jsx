import { useState } from "react";
import Error from "../../components/Error/Error";
import { ThemeContext } from "../../context/themeContext";
import Footer from "../../layout/Footer/Footer";
import Header from "../../layout/Header/Header";
import Map from "../../layout/Map/Map";
//import { ThemeContext } from "./context/themeContext";

function ErrorPage() {
  const [theme, setTheme] = useState("light");

  function changeTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <div>
        <Header />
        <Error />
        <Footer />
        <Map />
      </div>
    </ThemeContext.Provider>
  );
}

export default ErrorPage;
