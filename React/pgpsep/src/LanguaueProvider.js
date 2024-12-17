import React, { useContext } from 'react'
import { useState } from 'react';
import { createContext } from 'react'
import { myContext } from './contextt/CounterProvider';
const languageContext = createContext()
export default function LanguaueProvider({children}) {
    const language = ["en","sp","fr"];
    const [currentLanguage,setCurrentLanguge] = useState("en")
   const toggleLanguage = ()=>{
     setCurrentLanguge(
      (prev)=>{
        const currentIndex = language.indexOf(prev);
        console.log(currentIndex)
        return language[(currentIndex+1)%language.length]
      }
     )
   }
   const toggleButtons = (x)=>{
    setCurrentLanguge(x)
   }
  return (
   <languageContext.Provider value={{currentLanguage,toggleLanguage,toggleButtons}}>
    {children}
   </languageContext.Provider>
  )
}

// export {languageContext}
export const useLanguage = ()=>useContext(languageContext)