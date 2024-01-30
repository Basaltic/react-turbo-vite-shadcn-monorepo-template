/** Declare Global Types in this file */

import 'react-i18next';
import type zh from '../public/locales/zh/translation.json';

declare module 'react-i18next' {
    // and extend them!
    interface CustomTypeOptions {
        // custom resources type
        resources: {
            translation: typeof zh;
        };
    }
}
