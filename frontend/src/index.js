import React from 'react';
import ReactDOM from 'react-dom';
import './bootstrap.min.css';
import App from './App';

import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import './Styles/main.scss';

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'),
);
