import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TodoPage from './pages/TodoPage';
import EmployeePage from './pages/EmployeePage';
import './App.css';  // Import the CSS file

const App = () => {
  return (
    <Router>
      <div className="container">
        <header>
          <h1>Todo Application</h1>
        </header>
        <Routes>
          <Route path="/" element={<TodoPage />} />
          <Route path="/employees" element={<EmployeePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;