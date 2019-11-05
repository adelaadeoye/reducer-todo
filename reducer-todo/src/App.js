import React, { useReducer } from "react";
import "./App.css";
import Todo from "./component/Todo";
import Form from "./component/Form";
import { reducer, initialState } from "./reducers/reducer";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <Form dispatch={dispatch} />

      <header className="App-header">
        <Todo state={state} dispatch={dispatch} />
      </header>
    </div>
  );
}

export default App;
