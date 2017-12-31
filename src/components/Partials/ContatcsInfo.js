import React from 'react';

export default class ContactsInfo extends React.Component {
	render() {
		return (
			<aside class="info">
				<div class="info-block">
					<h2 class="sub-headline">
						<i class="fa fa-envelope"aria-hidden="true"></i>
                        email
					</h2>
					<span>info@vikings.app.com</span>
				</div>
				<div class="info-block">
					<h2 class="sub-headline">
						<i class="fa fa-phone-square" aria-hidden="true"></i>
                        telephone
					</h2>
					<span>+44 20 7193 3316</span>
				</div>
				<div class="info-block">
					<h2 class="sub-headline">
						<i class="fa fa-skype" aria-hidden="true"></i>
                        skype
					</h2>
					<span>vikingsApp</span>
				</div>
				<div class="info-block">
					<h2 class="sub-headline">
						<i class="fa fa-address-card-o" aria-hidden="true"></i>
                        address
					</h2>
					<span>Ballinastoe Townland, Co. Wicklow, Ireland</span>
				</div>
				<div class="info-block">
					<h2 class="sub-headline">Socials</h2>
					<span class="socials">
						<a href="#" title="Find us on Facebook"><i class="fa fa-facebook-official fa-2x" aria-hidden="true"></i></a>
						<a href="#" title="Find us on Twitter"><i class="fa fa-twitter-square fa-2x" aria-hidden="true"></i></a>
						<a href="#" title="Find us on LinkedIn"><i class="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></a>
					</span>
				</div>
			</aside>
		);
	}
}
