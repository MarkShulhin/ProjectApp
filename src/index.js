
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';


const Routes = (
	<BrowserRouter>
		<App/>
	</BrowserRouter>
);

const main = document.getElementById('app');
render(Routes, main);