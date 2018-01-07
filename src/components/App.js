import 'normalize.css';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

/* Components */
import Header from './Pages/Header';
import Footer from './Pages/Footer';
import Home from './Pages/Home';
import Contacts from './Pages/Contacts';
import NotFound from './Pages/NotFound';
import Post from './Partials/Post';
/* Styles */
import '../css/style.css';

export default class App extends Component {
	render() {
		return (
			<div class="site">
				<div className="site-content">
					<Header />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/posts" component={Home} />
						<Route path="/posts/:id" component={Post} />
						<Route path='/contacts' component={Contacts} />
						<Route path='*' component={NotFound}/>
					</Switch>
				</div>
				<Footer />
			</div>
		);
	}
}
