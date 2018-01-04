import React, { Component } from 'react';

export default class ContactsForm extends Component {
	render() {
		return (
			<form class="contact-form">
				<h2 class="form-headline">Get in touch</h2>
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
		);
	}
}
