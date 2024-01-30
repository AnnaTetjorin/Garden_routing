import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import { ThemeContext } from "./context/themeContext";
import Footer from "./layout/Footer/Footer";
import Header from "./layout/Header/Header";
import Map from "./layout/Map/Map";

const App = () => {
  const [theme, setTheme] = useState("light");

  function changeTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <div className="app">
        <Header />
        <Outlet />
        <Footer />
        <Map />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
