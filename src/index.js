import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Data from './data';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-104529883-2');
ReactGA.pageview('my-resume');
ReactDOM.render(<App {...Data}/>, document.getElementById('root'));
registerServiceWorker();
