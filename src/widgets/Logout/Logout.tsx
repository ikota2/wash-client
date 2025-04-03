import { Link } from 'react-router-dom';

const Logout = () => {
	function handleLogout() {
		localStorage.removeItem('token');
		localStorage.removeItem('user');
		window.location.href = '/login';
	}
	const token = localStorage.getItem('token');

	return (
		<>
			{token ? (
				<button onClick={handleLogout}>Logout</button>
			) : (
				<Link to="/login">Login</Link>
			)}
		</>
	);
};

export default Logout;
