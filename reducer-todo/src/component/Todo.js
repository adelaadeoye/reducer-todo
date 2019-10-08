import React from "react";

const Todo = ({ state, dispatch }) => {
  return (
    <div>
      {state.todos.map(todo => (
        <div
          key={todo.id}
          className={`item${todo.completed ? " completed" : ""}`}
          onClick={() => dispatch({ type: "COMPLETE_TASK", payload: todo })}
        >
          <p>{todo.item}</p>
        </div>
      ))}
    </div>
  );
};

export default Todo;
