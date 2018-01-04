import 'normalize.css';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Contacts from './Pages/Contacts';
import NotFound from './Pages/NotFound';
import '../css/style.css';

export default class App extends Component {
	render() {
		return (
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/contacts' component={Contacts} />
				<Route component={NotFound}/>
			</Switch>
		);
	}
}
