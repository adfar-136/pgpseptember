import React, { useContext } from 'react'
import { languageContext, useLanguage } from './LanguaueProvider'
export default function LanguageSwitcher() {
    const {toggleLanguage,toggleButtons} = useLanguage()
    // const {toggleLanguage,toggleButtons} = useContext(languageContext)
  return (
    <div>
        <button onClick={toggleLanguage}>
            Change Language
        </button>
        <button onClick={()=>toggleButtons("en")}>English</button>
        <button onClick={()=>toggleButtons("sp")}>Spanish</button>
        <button onClick={()=>toggleButtons("fr")}>French</button>
    </div>
  )
}
