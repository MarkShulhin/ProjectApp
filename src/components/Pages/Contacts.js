import React, { Component } from 'react';
import Header from './Header';
import ContactsInfo from '../Partials/ContatcsInfo';
import ContactsForm from '../Partials/ContactsForm';
import '../../css/contacts.css';

export default class Contacts extends Component {
	render() {
		return (
			<div>
				<Header/>
				<main class="flex-container contacts-block">
					<h1 class="main-headline">Contacts</h1>

					<ContactsInfo/>

					<ContactsForm/>

					<iframe class="map" src="https://www.google.com/maps/embed?pb=!4v1514646752840!6m8!1m7!1sCAoSLEFGMVFpcE56d3NsMVNqM1JHNXNFNXJsZFVpNlpLczRMQldfc3lueXhwRDFO!2m2!1d53.1081771!2d-6.2751826!3f78.21248768929762!4f-10.230164826410387!5f0.4000000000000002" frameBorder="0" allowFullScreen></iframe>
				</main>
			</div>
		);
	}
}
