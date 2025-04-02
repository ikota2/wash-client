import React, { ReactNode, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './tabs.css';

interface TabItem {
	name: string;
	path: string;
}

interface TabsProps {
	tabs: TabItem[];
	basePath: string;
}

const Tabs: React.FC<TabsProps> = ({ tabs, basePath }) => {
	const navigate = useNavigate();
	const location = useLocation();
	const currentPath = location.pathname;
	const activeTabName =
		tabs.find(
			(tab) =>
				currentPath === `${basePath}/${tab.path}` ||
				(currentPath === basePath && tab.path === ''),
		)?.name || tabs[0].name;
	function handleTabClick(tab: TabItem) {
		navigate(`${basePath}/${tab.path}`);
	};

	return (
		<div className="tabs">
			{tabs.map((tab) => (
				<button
					key={tab.name}
					className={tab.name === activeTabName ? 'activeTab' : 'tab'}
					onClick={() => handleTabClick(tab)}
				>
					{tab.name}
				</button>
			))}
		</div>
	);
};

export default Tabs;
