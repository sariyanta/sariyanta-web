import useDarkMode from "utils/useDarkMode";
import { BrightnessHigh, Moon } from "react-bootstrap-icons";

export default function ThemeSwitcher() {
  const [colorTheme, setTheme] = useDarkMode();
  return (
    <>
      {colorTheme === "light" ? (
        <button
          className="group cursor-pointer rounded-full p-3 ring-1 transition-all duration-300 hover:bg-white hover:ring-2"
          onClick={() => setTheme("light")}
        >
          <BrightnessHigh size={18} className="group-hover:text-black" />
        </button>
      ) : (
        <button
          className="group cursor-pointer rounded-full p-3 ring-1 transition-all duration-300 hover:bg-black hover:ring-2"
          onClick={() => setTheme("dark")}
        >
          <Moon size={18} className="group-hover:text-white" />
        </button>
      )}
    </>
  );
}
