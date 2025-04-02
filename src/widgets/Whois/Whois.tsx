import React from 'react';

const Whois = () => {
	const userData = localStorage.getItem('user');
	let currentUser = '';
	if (userData) {
		const user = JSON.parse(userData);
		currentUser = user.role;
	}
	if (!currentUser) return;
	return <h1>{currentUser}</h1>;
};

export default Whois;
