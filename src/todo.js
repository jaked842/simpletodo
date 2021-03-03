import React from 'react';


const Todo = ({todo, index, removeTodo, editTodo}) => {
    return (
        <div>
            <form>
                <input onChange={(event) => editTodo(index, event)} type='text' value={todo}
                style={{border: 'none'}}></input>
            </form>
            <button type='button' onClick={ () => removeTodo(index)}>Delete</button>
        </div>
    )
}

export default Todo;