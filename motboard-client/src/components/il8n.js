import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

alert('in Inter');
//FROM: https://phraseapp.com/blog/posts/react-i18n-best-libraries/
i18n
    .use(LanguageDetector)
    .init({
        // we init with resources
        resources: {
            en: {
                translations: {
                    "Welcome to React.js": "Welcome to React.js",
                    "Declarative": "Declarative",
                    "React makes it": "MOtBOARD!!",
                    "Declarative views make your code more predictable and easier to debug.": "Declarative views make your code more predictable and easier to debug."
                }
            },
            el: {
                translations: {
                    "Welcome to React.js": "στο React.js!",
                    "Declarative": "Δηλωτικό",
                    "React makes it": "मोटो बोर्ड",
                    "Declarative views make your code more predictable and easier to debug.": "Οι δηλωτικές προβολές καθιστούν τον κώδικα πιο προβλέψιμο και πιο εύκολο στον εντοπισμό σφαλμάτων."
                }
            }
        },
        fallbackLng: 'en',
        debug: true,

        // have a common namespace used around the full app
        ns: ['translations'],
        defaultNS: 'translations',

        keySeparator: false, // we use content as keys

        interpolation: {// not needed for react!!
            formatSeparator: ','
        },

        react: {
            wait: true
        }
    });

export default i18n;