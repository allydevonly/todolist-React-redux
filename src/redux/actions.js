// redux/actions.js
export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';

export const addTask = (description) => {
  return {
    type: ADD_TASK,
    payload: {
      description,
      id: Math.random().toString(36).substr(2, 9), // generate random id
      isDone: false
    }
  };
};

export const toggleTask = (id) => {
  return {
    type: TOGGLE_TASK,
    payload: id
  };
};
