import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import ProtectedRoute from '../features/ProtectedRoute/ProtectedRoute';
import Login from '../features/Login/Login';
import Dashboard from '../pages/Dashboard/Dashboard';
import Panel from '../pages/Panel/Panel';

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/login" element={<Login />} />

			<Route
				path="/dashboard/*"
				element={
					<ProtectedRoute allowedRoles={['admin', 'user']}>
						<Dashboard />
					</ProtectedRoute>
				}
			/>

			<Route
				path="/panel/*"
				element={
					<ProtectedRoute allowedRoles={['admin']}>
						<Panel />
					</ProtectedRoute>
				}
			/>

			<Route path="/" element={<Navigate to="/dashboard" replace />} />
			<Route path="*" element={<Login />} />
		</Routes>
	);
};

export default AppRoutes;
