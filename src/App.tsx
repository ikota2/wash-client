import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import IncomeList from './features/IncomeList/IncomeList';
import IncomeForm from './features/IncomeForm/IncomeForm';
import ProtectedRoute from './features/ProtectedRoute/ProtectedRoute';
import Login from './features/Login/Login';


const App: React.FC = () => {
  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    window.location.href = '/login'
  }

  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/income/list">Income List</Link></li>
          <li><Link to="/income/new">Add Income</Link></li>
          <li><button onClick={handleLogout}>Logout</button></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/income/list"
          element={
            <ProtectedRoute allowedRoles={['admin', 'user']}>
              <IncomeList />
            </ProtectedRoute>
          }
        />

        <Route
          path="/income/new"
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <IncomeForm />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  )
}

export default App
