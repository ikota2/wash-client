import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Tabs from '../../shared/ui/Tabs/Tabs';
import Income from '../../features/Income/Income';
import Outcome from '../../features/Outcome/Outcome';
import Difference from '../../features/Difference/Difference';

const dashboardTabs = [
	{ name: 'Income', path: '' },
	{ name: 'Outcome', path: 'outcome' },
	{ name: 'Difference', path: 'difference' },
];

const Dashboard: React.FC = () => {
	const basePath = '/dashboard';

	return (
		<div className="dashboard">
			<h1>Dashboard</h1>
			<Tabs tabs={dashboardTabs} basePath={basePath} />
			<div className="dashboard__content">
				<Routes>
					<Route path="/" element={<Income />} />
					<Route path="/outcome" element={<Outcome />} />
					<Route path="/difference" element={<Difference />} />
					<Route path="*" element={<Navigate to="/" replace />} />
				</Routes>
			</div>
		</div>
	);
};

export default Dashboard;
