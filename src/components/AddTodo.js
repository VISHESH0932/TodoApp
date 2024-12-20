import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions/todoActions';

const AddTodo = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    const newTodo = { id: Date.now(), text };
    dispatch(addTodo(newTodo));
    setText('');
  };

  return (
    <div>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleAdd}>Add Todo</button>
    </div>
  );
};

export default AddTodo;