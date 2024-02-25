// Task.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask } from './redux/actions';

function Task({ task }) {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  return (
    <div>
      <input type="checkbox" checked={task.isDone} onChange={handleToggle} />
      <span>{task.description}</span>
    </div>
  );
}

export default Task;
