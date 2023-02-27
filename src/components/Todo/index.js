import React from 'react';
import './Todo.css';

import useTodoContext from '../../hooks/use-todo-context';

const Todo = ({ todo: { id, description, completed } }) => {
  const { toggleCompleted, deleteTodo } = useTodoContext();

  return (
    <div className={`todo ${completed ? 'completed' : ''}`}>
      <div className="outline-circle check" onClick={() => toggleCompleted(id)}>
        {completed && (
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
            <path
              fill="none"
              stroke="#FFF"
              strokeWidth="2"
              d="M1 4.304L3.696 7l6-6"
            />
          </svg>
        )}
      </div>

      <div className="description" onClick={() => toggleCompleted(id)}>
        {description}
      </div>

      <button
        type="button"
        className="delete icon-btn"
        onClick={() => deleteTodo(id)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
          <path
            fillRule="evenodd"
            d={`M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z`}
          />
        </svg>
      </button>
    </div>
  );
};

export default Todo;
