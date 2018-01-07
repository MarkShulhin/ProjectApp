import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './components/App';


const Routes = (
	<BrowserRouter>
		<App/>
	</BrowserRouter>
);

const main = document.getElementById('app');
render(
	<Provider store={store}>
		{Routes}
	</Provider>,
	main,
);
