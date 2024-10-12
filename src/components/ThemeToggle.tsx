// import { useDispatch, useSelector } from "react-redux";
// import { AppDispatch, RootState } from "../store/store";
// import { toggleTheme } from "../store/slices/themeSlice";
import { LuSunMoon } from "react-icons/lu";
import { FaRegMoon } from "react-icons/fa";
import { useThemeStore } from "../store/useThemeStore";

const ThemeToggle = () => {
    // const { theme } = useSelector((state:RootState) => state.theme);
    // const dispatch = useDispatch<AppDispatch>();

    const {theme, toggleTheme} = useThemeStore();

    const changeTheme = () => {
        // dispatch(toggleTheme());
        toggleTheme();
    }

  return (
    <button onClick={changeTheme} className="p-3 flex justify-center items-center rounded-full" >
        {theme === "light" ? <FaRegMoon size={24} /> : <LuSunMoon size={24}  />}
    </button>
  );
};

export default ThemeToggle;
