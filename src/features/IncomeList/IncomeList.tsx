import React, { useState, useEffect } from 'react'

interface IncomeEntry {
  _id: string
  cash_in: string
  cash_out: string
  app: string
  cp: string
  date: string
}

const IncomeList: React.FC = () => {
  const [incomeEntries, setIncomeEntries] = useState<IncomeEntry[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const token = localStorage.getItem('token')

  useEffect(() => {
    const fetchIncomeEntries = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/income/getAll', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })

        if (!response.ok) {
          throw new Error('Failed to fetch income entries')
        }

        const data = await response.json()
        setIncomeEntries(data)
        setIsLoading(false)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred')
        setIsLoading(false)
      }
    }

    fetchIncomeEntries()
  }, [])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  return (
    <div>
      <h2>Income Entries</h2>
      {incomeEntries.length === 0 ? (
        <p>No income entries found.</p>
      ) : (
        <table>
          <thead>
          <tr>
            <th>Date</th>
            <th>Cash In</th>
            <th>Cash Out</th>
            <th>App</th>
            <th>CP</th>
          </tr>
          </thead>
          <tbody>
          {incomeEntries.map((entry) => (
            <tr key={entry._id}>
              <td>{entry.date}</td>
              <td>{entry.cash_in}</td>
              <td>{entry.cash_out}</td>
              <td>{entry.app}</td>
              <td>{entry.cp}</td>
            </tr>
          ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default IncomeList
