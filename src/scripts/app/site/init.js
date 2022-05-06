import {addPage, addPaths} from 'setjs/kernel/page-manager.js';

import './api.js';
import './template-functions.js';
import home from './pages/home.js';
// import about from './pages/about.js';

export default function() {
  addPage('', home);
  addPaths('site', [
    'about'
  ]);
}
