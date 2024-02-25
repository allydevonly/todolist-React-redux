// AddTask.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './redux/actions';
import styles from './styles.module.css'; // Import CSS module

const AddTask = () => {
  const [taskDescription, setTaskDescription] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskDescription.trim()) {
      dispatch(addTask(taskDescription));
      setTaskDescription('');
    }
  };

  return (
    <div className={styles['add-task-container']}>
      <input
        type="text"
        className={styles['add-task-input']}
        placeholder="Add new task"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
      />
      <button className={styles['add-task-button']} onClick={handleAddTask}>
        Add
      </button>
    </div>
  );
};

export default AddTask;
