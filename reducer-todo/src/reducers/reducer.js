
export const initialState={
todos:[
    
  {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  },
  {
    item: 'Bake Cookies',
    completed: false,
    id: 1528817084358
   
  }

]}

export const reducer = (state, action)=>{
    switch(action.type){
        case "ADD_TODO":
                const newTodo = {
                    item: action.payload,
                    id: Date.now(),
                    completed: false
                  };
            return{
                ...state,todos: [...state.todos, newTodo]
                            }
            default:
                return state;

    }
}