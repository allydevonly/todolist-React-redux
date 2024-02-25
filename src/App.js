// App.js
import React from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';

function App() {
  return (
    <div>
      <h1>ToDo App</h1>
      <AddTask />
      <TaskList />
    </div>
  );
}

export default App;
