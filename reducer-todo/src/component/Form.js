import React,{useState}from "react"


const Form=({dispatch})=>{
    const [newTodo, setNewTodo] = useState('');

    const handleChanges = e => {
        e.preventDefault();
      setNewTodo(e.target.value);
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
      onClick={()=>
        dispatch({type:'ADD_TODO',payload:newTodo})}
    >
      Add Todo
    </button>
</div>
)
}
export default Form;