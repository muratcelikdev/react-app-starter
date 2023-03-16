import { useEffect } from 'react';

import i18n from 'common/language/i18n';

import useGetPosts from 'hooks/useGetPosts';
import useLanguage from 'hooks/useLanguage';

import { Language } from 'store/slices/appSlice';
import useTheme from 'hooks/useTheme';

import styles from 'pages/home/Home.module.scss';

const Home = () => {
   const { setCurrentLanguage } = useLanguage();
   const { getPosts } = useGetPosts();
   const { toggleTheme } = useTheme();

   useEffect(() => {
      getPosts();
   }, [getPosts]);

   const setLanguageToTurkish = () => {
      setCurrentLanguage(Language.TR);
   };

   return (
      <div>
         <div className={styles.greetingText}>{i18n.t('greeting')}</div>
         <button onClick={setLanguageToTurkish}>Set Language to Turkish</button>
         <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
   );
};

export default Home;
