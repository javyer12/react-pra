import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from '../public/service-worker';


import App from './routes/App';

ReactDOM.render(<App />, document.getElementById('app'));
serviceWorker.register();
