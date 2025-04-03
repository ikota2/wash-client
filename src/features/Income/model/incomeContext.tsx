import React, { createContext, useContext, useState, ReactNode } from 'react';
import { IncomeEntry } from '../../../shared/api/incomeApi';

interface IncomeContextType {
	incomeEntries: IncomeEntry[];
	setIncomeEntries: React.Dispatch<React.SetStateAction<IncomeEntry[]>>;
}

const IncomeContext = createContext<IncomeContextType | undefined>(undefined);

export const IncomeProvider = ({ children }: { children: ReactNode }) => {
	const [incomeEntries, setIncomeEntries] = useState<IncomeEntry[]>([]);

	return (
		<IncomeContext.Provider value={{ incomeEntries, setIncomeEntries }}>
			{children}
		</IncomeContext.Provider>
	);
};

export const useIncomeContext = (): IncomeContextType => {
	const context = useContext(IncomeContext);
	if (context === undefined) {
		throw new Error('useIncomeContext must be used within an IncomeProvider');
	}
	return context;
};
