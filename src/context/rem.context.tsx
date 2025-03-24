import { FC, useState, useEffect, useMemo } from "react";
import { RemProviderProps, RemContext } from "../types/context";
import { useDarkMode } from "../hook";
import { SkipItemsType } from "../types/main";



export const RemProvider: FC<RemProviderProps> = ({children}) => {
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const [darkMode, setDarkMode] = useDarkMode();
    const [selectedSkip, setSelectedSkip] = useState<SkipItemsType| null>(null);


      //prevent scroll when dropdown menu is clicked
      useEffect(() => {
        const body = document.querySelector('body');
        if (openMenu) {
            body!.style.overflow = "hidden";
        }
        else {
            body!.style.overflowY = "scroll";
            body!.style.overflowX = "hidden";
        }
    }, [openMenu])



    //theme toggle
    const toggleDarkMode = (checked: boolean) => {
        setDarkMode(checked);
      };
    

    //menu button function
    const handleMenuOpen = (): void => {
        setOpenMenu((prev) => !prev);
      };



    const values = useMemo(
        () => ({ 
            openMenu, 
            darkMode, 
            setOpenMenu,
            toggleDarkMode, 
            setDarkMode,
            handleMenuOpen,
            selectedSkip, 
            setSelectedSkip
         }),
        [
            openMenu,
            darkMode, 
            setOpenMenu,
            setOpenMenu,
            toggleDarkMode,
            setDarkMode,
            handleMenuOpen,
            selectedSkip,
            setSelectedSkip
        ]);

    return (
        <RemContext.Provider value={values}>
            {children}
        </RemContext.Provider>
    )
}

export default RemProvider