import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Tabs from '../../shared/ui/Tabs/Tabs';
import IncomePanel from '../../features/IncomePanel/IncomePanel';
import OutcomePanel from '../../features/OutcomePanel/OutcomePanel';

const panelTabs = [
	{ name: 'IncomePanel', path: '' },
	{ name: 'OutcomePanel', path: 'outcome' },
];

const Panel = () => {
	const basePath = '/panel';
	return (
		<div className="panel">
			<h1>Panel</h1>
			<Tabs tabs={panelTabs} basePath={basePath} />
			<div className="panel__content">
				<Routes>
					<Route path="/" element={<IncomePanel />} />
					<Route path="/outcome" element={<OutcomePanel />} />
					<Route path="*" element={<Navigate to="/" replace />} />
				</Routes>
			</div>
		</div>
	);
};

export default Panel;
