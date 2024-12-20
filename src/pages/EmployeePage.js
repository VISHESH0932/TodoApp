import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmployees } from '../redux/actions/employeeActions';

const EmployeePage = () => {
  const dispatch = useDispatch();
  const employees = useSelector(state => state.employees);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  return (
    <div>
      <h1>Employee List</h1>
      {employees && employees.length > 0 ? (
        <ul className="employee-list">
          {employees.map((employee) => (
            <li key={employee.id}>{employee.name}</li>
          ))}
        </ul>
      ) : (
        <p>No employees available</p>
      )}
    </div>
  );
};

export default EmployeePage;
