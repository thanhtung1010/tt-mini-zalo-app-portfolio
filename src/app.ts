// Import React and ReactDOM
import React from 'react';
import { createRoot } from 'react-dom/client';

import './assets/scss/main.scss';

// Import App Component
import App from './components/app';
import appConfig from '../app-config.json';

if (!(window as any).APP_CONFIG) {
  (window as any).APP_CONFIG = appConfig;
}

// Mount React App
const root = createRoot(document.getElementById('app')!);
root.render(React.createElement(App));