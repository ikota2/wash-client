import React from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import Layout from './features/Layout/Layout';
import AppRoutes from './app/AppRoutes';
import { IncomeProvider } from './features/Income/model/incomeContext';
import { queryClient } from './shared/api/queryClient';

const App: React.FC = () => {
	const handleLogout = () => {
		localStorage.removeItem('token');
		localStorage.removeItem('user');
		window.location.href = '/login';
	};

	return (
		<QueryClientProvider client={queryClient}>
			<IncomeProvider>
				<Layout>
					<AppRoutes />
				</Layout>
			</IncomeProvider>
		</QueryClientProvider>
	);
};

export default App;
