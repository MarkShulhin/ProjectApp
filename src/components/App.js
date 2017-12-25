import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Pages/Header';
import NotFound from './Pages/NotFound';

export default class App extends React.Component {
	render() {
		return (
			<Switch>
				<Route exact path='/' component={Header} />
				<Route component={NotFound}/>
			</Switch>
		);
	}
}
