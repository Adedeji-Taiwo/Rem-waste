import { createContext, ReactNode } from "react";
import { SkipItemsType } from "./main";


export interface RemContextType {
    openMenu: boolean;
    setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>,
    handleMenuOpen: () => void;
    darkMode: boolean;
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
    toggleDarkMode: (checked: boolean) => void;
    selectedSkip: SkipItemsType | null;
    setSelectedSkip: React.Dispatch<React.SetStateAction<SkipItemsType | null>>;
  }


export interface RemProviderProps {
    children: ReactNode;
  }


export const RemContext = createContext<RemContextType | null>(null);
