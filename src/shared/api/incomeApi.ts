export interface IncomeEntry {
	_id: string;
	cash_in: string;
	cash_out: string;
	app: string;
	cp: string;
	date: string;
}
export const fetchIncomeEntries = async (
	token: string,
): Promise<IncomeEntry[]> => {
	const response = await fetch('http://localhost:3000/api/income/getAll', {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	if (!response.ok) {
		throw new Error('Failed to fetch incomes');
	}

	return response.json();
};
