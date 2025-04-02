import React, { useState } from 'react';
import { fetchIncomeEntries, IncomeEntry } from '../../shared/api/incomeApi';
import { useIncomeContext } from './model/incomeContext';
import { useQuery } from '@tanstack/react-query';

const Income = () => {
	const { setIncomeEntries } = useIncomeContext();
	const token = localStorage.getItem('token');
	const { isLoading, error, data } = useQuery<IncomeEntry[], Error>(
		['incomeEntries'],
		() => fetchIncomeEntries(token as string),
		{
			onSuccess: (data) => {
				setIncomeEntries(data);
			},
		},
	);

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>Error: {error.message}</div>;

	return (
		<div>
			<h2>Income Query Entries</h2>
			<div className="entries-list">
				{data.map((entry: IncomeEntry, i: number) => (
					<div key={i} className="entry-card">
						<div>App: {entry.app}</div>
						<div>Cash In: {entry.cash_in}</div>
						<div>Cash Out: {entry.cash_out}</div>
						<div>CP: {entry.cp}</div>
						<div>Date: {entry.date}</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Income;
