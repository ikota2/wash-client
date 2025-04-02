import React from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
	children: React.ReactNode;
	allowedRoles?: string[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
	children,
	allowedRoles = [],
}) => {
	const token = localStorage.getItem('token');
	const user = JSON.parse(localStorage.getItem('user') || '{}');

	if (!token) {
		return <Navigate to="/login" replace />;
	}

	if (allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
		return <Navigate to={user === 'admin' ? '/panel' : '/dashboard'} replace />;
	}

	return <>{children}</>;
};

export default ProtectedRoute;
