import i18next from 'i18next';
import i18nextBrowserLanguagedetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
i18next.use(initReactI18next).use(i18nextBrowserLanguagedetector).init({
    fallbackLng: 'en',
    resources: {
        pt: {
            translation: {
                'Click on the Vite and React logos to learn more': 'Click no logo do Vite ou React para saber mais',
                'description': 'Edite <1>src/App.tsx</1> e salve para testar.',
                'Count is': 'A Conta é:'
            }
        },
        
        
    }
})