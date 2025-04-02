import React from 'react';
import Tabs from '../../shared/ui/Tabs/Tabs';
import { Navigate, Route, Routes } from 'react-router-dom';

import IncomePanel from '../../features/IncomePanel/IncomePanel';
import OutcomePanel from '../../features/OutcomePanel/OutcomePanel';

const senderTabs = [
	{ name: 'Income', path: '' },
	{ name: 'Outcome', path: 'outcome' },
];

const Sender = () => {
	const basePath = '/sender';
	return (
		<div className="sender">
			<Tabs tabs={senderTabs} basePath={basePath} />
			<div className="sender__content">
				<Routes>
					<Route path="/" element={<IncomePanel />} />
					<Route path="/outcome-panel" element={<OutcomePanel />} />
					<Route path="*" element={<Navigate to="/" replace />} />
				</Routes>
			</div>
		</div>
	);
};

export default Sender;
