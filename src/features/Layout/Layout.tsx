import React, { ReactNode } from 'react';
import Logout from '../../widgets/Logout/Logout';
import Whois from '../../widgets/Whois/Whois';
import './layout.css';

interface IMainLayout {
	children: ReactNode;
}
const Layout: React.FC<IMainLayout> = ({ children }) => {
	return (
		<>
			<header>
				<Whois />
				<Logout />
			</header>
			<main>{children}</main>
		</>
	);
};

export default Layout;
