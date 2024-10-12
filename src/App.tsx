import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CountryDetails from "./pages/CountryDetails";
import Favorites from "./pages/Favorites";
// import { useSelector } from "react-redux";
// import { RootState } from "./store/store";
import { useEffect } from "react";
import { useThemeStore } from "./store/useThemeStore";

function App() {
  // const { theme } = useSelector((state: RootState) => state.theme);
  const {theme,} = useThemeStore();

  useEffect(() => {
    document.body.className = theme === "dark" ? "dark" : "light";
  }, [theme]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/country/:name" element={<CountryDetails />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Router>
  );
}

export default App;
