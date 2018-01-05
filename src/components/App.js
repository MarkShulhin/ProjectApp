import 'normalize.css';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Pages/Header';
import Footer from './Pages/Footer';
import Home from './Pages/Home';
import Contacts from './Pages/Contacts';
import NotFound from './Pages/NotFound';
import '../css/style.css';

export default class App extends Component {
	render() {
		return (
			<div class="site">
				<div className="site-content">
					<Header />
					<Switch>
						<Route exact path='/' component={Home} />
						<Route path='/contacts' component={Contacts} />
						<Route component={NotFound}/>
					</Switch>
				</div>
				<Footer />
			</div>
		);
	}
}
