// import { useState, useEffect } from 'react';
// import enTranslations from '../public/locales/en/enTranslations.json';
// import arTranslations from '../public/locales/ar/arTranslations.json';

// const translations = {
//   en: enTranslations,
//   ar: arTranslations,
// };

// export default function useTranslation(){
//   const [language, setLanguage] = useState('en');
//   const [translation, setTranslation] = useState(translations['en']);

//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       const storedLanguage = (window.localStorage.getItem('language') as 'en' | 'ar') || 'en';
//       setLanguage(storedLanguage);
//       setTranslation(translations[storedLanguage]);
//     }
//   }, []);

//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       window.localStorage.setItem('language', language);
//       setTranslation(translations[language] || translations['en']);
//     }
//   }, [language]);

//   const translate = (key: any) => {
//     return translation[key] || key;
//   };

//   return { translate, setLanguage, language };
// }

import enTranslations from '../public/locales/en/enTranslations.json';
import arTranslations from '../public/locales/ar/arTranslations.json';

const translations = {
  en: enTranslations,
  ar: arTranslations,
};

export function translate(key, language = 'en') {
  return translations[language][key] || key;
}

export function getLanguage() {
  
  if (typeof window != 'undefined') {
    return window.localStorage.getItem('language') || 'en';
  }
  return 'en';
}

export function setLanguage(language) {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem('language', language);
  }
}
