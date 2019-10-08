import React,{useState}from "react"


const Form=({dispatch})=>{
    const [newTodo, setNewTodo] = useState('');

    const handleChanges = e => {
        e.preventDefault();
      setNewTodo(e.target.value);
    };
    const submitItem = e => {
        if (newTodo !== '') {
            dispatch({ type: 'ADD_TODO', payload: newTodo })
            setNewTodo('')
        }
    };
return ( 
<div>
    <input
      className=""
      type="text"
      name="newTodo"
      value={newTodo}
      onChange={handleChanges}
    />
    <button
      onClick={submitItem}
    >
      Add Todo
    </button>
    <button
      onClick={()=>
        dispatch({type:'CLEAR_COMPLETED'})}
    >
      Clear Completed
    </button>
</div>
)
}
export default Form;