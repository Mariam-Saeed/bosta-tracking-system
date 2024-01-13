import React from 'react';
import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import App from './App.jsx';
import './index.css';

import englishContent from './translations/english/data.json';
import arabicContent from './translations/arabic/data.json';

// for translation
i18next.init({
  interpolation: { escapeValue: false },
  lng: 'en',
  resources: {
    en: {
      data: englishContent,
    },
    ar: {
      data: arabicContent,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
