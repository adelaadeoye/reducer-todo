import React from "react"




const Todo=({state,dispatch})=>{
return(<div>
    {state.todos.map(todo=>(
    <div
    className={`item${todo.completed ? ' completed' : ''}`}
      onClick={() =>dispatch({type:'COMPLETE_TASK',payload:todo}) }
    >
        
            <p key={todo.id}>{todo.item}</p>
       
        
    </div>
     ))}
     </div>
)
}

export default Todo;


