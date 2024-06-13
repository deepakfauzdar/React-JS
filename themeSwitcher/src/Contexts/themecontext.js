import React from 'react'
import { useContext } from 'react'
export const ThemeContext=React.createContext(
    {
        themeMode:"Light",
        lightMode: function (){},
        darkMode: function (){}
    }
)


export const ThemeProvider=ThemeContext.Provider;

//export custom hook as well

export default function useTheme(){
    return useContext(ThemeContext);
}



