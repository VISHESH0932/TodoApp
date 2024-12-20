import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../redux/actions/todoActions';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  return (
    <div className="todo-item">
      <span>{todo.text}</span>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TodoItem;