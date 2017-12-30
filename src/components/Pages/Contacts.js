import React from 'react';
import Header from './Header';
import '../../css/contacts.css';

export default class Contacts extends React.Component {
	render() {
		return (
			<div>
				<Header/>
				<main class="flex-container contacts-block">
					<h1 class="main-headline">Contacts</h1>
					<aside class="info">

					</aside>
					<form class="contact-form">
						<div class="left">
							<input type="text" id="input-name" placeholder="Name"/>
							<input type="email" id="input-email" placeholder="Email address"/>
							<input type="text" id="input-subject" placeholder="Subject"/>
						</div>
						<div class="right">
							<textarea name="message" type="text" id="input-message" placeholder="Message"></textarea>
						</div>
						<input type="submit" value="Submit" id="input-submit"/>
					</form>

					<iframe class="map" src="https://www.google.com/maps/embed?pb=!4v1514646752840!6m8!1m7!1sCAoSLEFGMVFpcE56d3NsMVNqM1JHNXNFNXJsZFVpNlpLczRMQldfc3lueXhwRDFO!2m2!1d53.1081771!2d-6.2751826!3f78.21248768929762!4f-10.230164826410387!5f0.4000000000000002" frameborder="0" allowfullscreen></iframe>
				</main>
			</div>
		);
	}
}
