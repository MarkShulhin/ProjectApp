import 'normalize.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Pages/Header';
import Contacts from './Pages/Contacts';
import NotFound from './Pages/NotFound';
import '../css/style.css';

export default class App extends React.Component {
	render() {
		return (
			<Switch>
				<Route exact path='/' component={Header} />
				<Route path='/contacts' component={Contacts} />
				<Route component={NotFound}/>
			</Switch>
		);
	}
}
