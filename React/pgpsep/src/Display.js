import React, { useContext } from 'react'
import { languageContext, useLanguage } from './LanguaueProvider'
export default function Display() {
   let {currentLanguage} = useLanguage()
//    let {currentLanguage} = useContext(languageContext)
    const translations = {
        en : {greeting:"Hello",message:"good mornign"},
        sp :{greeting:"Bello",message:"vsdghvfhdgf"},
        fr:{greeting:"Bonjour",message:"Bonjour morning"}
    }

  return (
    <div>
         <h1>{translations[currentLanguage].greeting}</h1>
         <p>{translations[currentLanguage].message}</p>
    </div>
  )
}
