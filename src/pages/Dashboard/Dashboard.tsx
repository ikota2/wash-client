import React from 'react';
import Tabs from '../../shared/ui/Tabs/Tabs';
import Income from '../../features/Income/Income';
import Outcome from '../../features/Outcome/Outcome';
import Difference from '../../features/Difference/Difference';

const token = localStorage.getItem('token');

const lookTabs = [
	{ name: 'Income', content: <Income /> },
	{ name: 'Outcome', content: <Outcome /> },
	{ name: 'Difference', content: <Difference /> },
];

const Look = () => {
	return (
		<div>
			<Tabs tabs={lookTabs} />
		</div>
	);
};

export default Look;
