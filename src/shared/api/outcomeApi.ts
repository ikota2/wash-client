export const fetchOutcomes = async (token: string) => {
	const response = await fetch('http://localhost:3000/api/outcome/getAll', {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	if (!response.ok) {
		throw new Error('Failed to fetch outcomes');
	}

	return response.json();
};
