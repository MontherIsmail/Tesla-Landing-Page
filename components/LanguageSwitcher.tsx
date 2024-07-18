// components/LanguageSwitcher.js
import { setLanguage, getLanguage } from '../hooks/translation';

const LanguageSwitcher = () => {
  const currentLanguage = getLanguage();

  const switchLanguage = (language) => {
    setLanguage(language);
    window.location.reload(); // Reload the page to apply the new language
  };

  return (
    <div className='lan-container'>
      <button  onClick={() => switchLanguage('en')} disabled={currentLanguage === 'en'}>
        English
      </button>
      <button  onClick={() => switchLanguage('ar')} disabled={currentLanguage === 'ar'}>
        العربية
      </button>
      <style jsx>{`
        .lan-container{
          width: 120px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .lan-container button:disabled{
          background-color: gray;
        }
          .lan-container button{
          border: none;
          border-radius: 5px;
          background-color: #BF2132;
          color: #fff;
          padding: 7px;
          font-size: 10px;
          margin: 2px 4px;
          width: 50%;
        }
      `}</style>
    </div>
  );
};

export default LanguageSwitcher;
