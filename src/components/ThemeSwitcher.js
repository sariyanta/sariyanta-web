import { motion } from "framer-motion";
import { useState } from "react";
import useDarkMode from "@/utils/useDarkMode";


export default function ThemeSwitcher({ className }) {

  const [checked, setChecked] = useState(false);
  const [mode, setMode] = useDarkMode();

  const toggleSwitch = () => {
    setChecked(!checked);
    checked ? setMode("light") : setMode("dark");
  };




  return (
    <>
      <div className={`group border-2 border-gray-500 dark:border-gray-100 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-14 h-9 rounded-l-full rounded-r-full flex items-center justify-start data-[ison=false]:bg-white data-[ison=false]:justify-end p-1 cursor-pointer  ${className} `} data-ison={checked} onClick={toggleSwitch} >
        <motion.div className="h-7 w-7 bg-white rounded-full " layout transition={{ type: "spring", stiffness: 700, damping: 30 }} />
      </div >

    </>
  )
}

