import React, { useState } from 'react';

const TodoEntry = ({createTodo}) => {
    const [todo, setTodo] = useState()
    return (
        <div>
            <form>
                <input
                    onChange={ (event) => setTodo(event.target.value)} 
                    type='text' 
                    placeholder='todo'
                    >
                </input>
                <button  type= 'button' onClick={ () =>createTodo(todo)}>Add Todo</button>
            </form>
        </div>
    )
}

export default TodoEntry;