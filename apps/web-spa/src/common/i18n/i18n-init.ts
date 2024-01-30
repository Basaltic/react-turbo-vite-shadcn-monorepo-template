import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import i18nextHttpBackend from 'i18next-http-backend';

i18n.use(i18nextHttpBackend)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        lng: 'zh', // if you're using a language detector, do not define the lng option
        fallbackLng: 'zh',

        interpolation: {
            escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        },
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
        },
    });
