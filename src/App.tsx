import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import IncomeList from './features/IncomeList/IncomeList';
import IncomeForm from './features/IncomeForm/IncomeForm';


const App: React.FC = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/income/new">
              Add Income
            </Link>
          </li>
          <li>
            <Link to="/income/list">
              Income List
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/income/new" element={<IncomeForm />} />
        <Route path="/income/list" element={<IncomeList />} />
      </Routes>
    </div>
  )
}

export default App
