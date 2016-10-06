import { LocalStorage } from 'node-localstorage';
import { jsdom } from 'jsdom';


global.localStorage = new LocalStorage('');
global.document = jsdom('<body></body>');

global.window = document.defaultView;
global.window.localStorage = global.localStorage;
