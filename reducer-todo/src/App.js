import React, {useReducer} from 'react';
import './App.css';
import Todo from "./component/Todo"
import Form from "./component/Form"
import {reducer,initialState} from "./reducers/reducer"



function App() {
  const [state,dispatch]=useReducer(reducer,initialState);
  console.log(state.todos)
  



  return (
    <div className="App">
      <header className="App-header">
        <Form dispatch={dispatch} />
        <Todo state={state} dispatch={dispatch} />
      </header>
    </div>
  );
}

export default App;
