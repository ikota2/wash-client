import React, { useState, FormEvent } from 'react';

interface IncomeFormData {
	cash_in: string;
	cash_out: string;
	app: string;
	cp: string;
	date: string;
}

const IncomeForm: React.FC = () => {
	const [formData, setFormData] = useState<IncomeFormData>({
		cash_in: '',
		cash_out: '',
		app: '',
		cp: '',
		date: '',
	});
	const token = localStorage.getItem('token');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			const response = await fetch('http://localhost:3000/api/income/post', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				const result = await response.json();

				console.log('Success: ', result);

				setFormData({
					cash_in: '',
					cash_out: '',
					app: '',
					cp: '',
					date: '',
				});
				alert('Income added successfully!');
			} else {
				const errorData = await response.json();
				console.error('Error:', errorData);
				alert(`Error: ${errorData.message}`);
			}
		} catch (error) {
			console.error('Submission error:', error);
			alert('Failed to submit income');
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="cash_in">Cash In</label>
				<input
					type="text"
					id="cash_in"
					name="cash_in"
					value={formData.cash_in}
					onChange={handleChange}
					required
				/>
			</div>

			<div>
				<label htmlFor="cash_out">Cash Out</label>
				<input
					type="text"
					id="cash_out"
					name="cash_out"
					value={formData.cash_out}
					onChange={handleChange}
					required
				/>
			</div>

			<div>
				<label htmlFor="app">App</label>
				<input
					type="text"
					id="app"
					name="app"
					value={formData.app}
					onChange={handleChange}
					required
				/>
			</div>

			<div>
				<label htmlFor="cp">CP</label>
				<input
					type="text"
					id="cp"
					name="cp"
					value={formData.cp}
					onChange={handleChange}
					required
				/>
			</div>

			<div>
				<label htmlFor="date">Date</label>
				<input
					type="date"
					id="date"
					name="date"
					value={formData.date}
					onChange={handleChange}
					required
				/>
			</div>

			<button type="submit">Submit Income</button>
		</form>
	);
};

export default IncomeForm;
