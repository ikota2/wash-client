import React, { ReactNode } from 'react';
import './layout.css';
import Logout from '../../../widgets/Logout/Logout';

interface IMainLayout {
	children: ReactNode;
}
const Layout: React.FC<IMainLayout> = ({ children }) => {
	return (
		<>
		<header><Logout/></header>
		<main>{children}</main>
		</>
	);
};

export default Layout;
