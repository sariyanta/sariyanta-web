import switchTheme from "../../lib/switchTheme"
import { BrightnessHigh, Moon } from "react-bootstrap-icons";
export default function ThemeSwitcher(){
  const [colorTheme, setTheme] = switchTheme();
  return (
    <>
      {colorTheme === "light" ? (
        <button className="group cursor-pointer p-3 rounded-full transition-all duration-300 ring-1 hover:ring-2 hover:bg-white" onClick={() => setTheme("light")}>
          <BrightnessHigh c size={18} className="group-hover:text-black"  />
        </button>

      ) : (
        <button className="group cursor-pointer p-3 rounded-full transition-all duration-300 ring-1 hover:ring-2 hover:bg-black" onClick={() => setTheme("dark")}>
          <Moon  size={18} className="group-hover:text-white" />
        </button>


      )}
    </>

  )
}