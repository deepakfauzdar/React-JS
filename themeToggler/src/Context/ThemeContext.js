import React from "react";
import { useContext, createContext } from "react";

export const ThemeContext= createContext({
    thememode:"light",
    colorMode:(flag)=>{}
})


export const ThemeProvider=ThemeContext.Provider; 


export default function useTheme(){
   return useContext(ThemeContext);
}