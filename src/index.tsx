import "solid-js";
import { render } from 'solid-js/dom';
import App from './App';
import './index.css'
import * as serviceWorker from './serviceWorker';

render(App, document.getElementById('root') as Node);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
