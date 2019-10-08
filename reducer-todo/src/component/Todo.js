import React from "react"




const Todo=(props)=>{
return(

    <div>
        {props.state.todos.map(todo=>(
            <p key={todo.id}>{todo.item}</p>
        ))}
        
    </div>
)
}

export default Todo;


