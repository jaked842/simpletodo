import React, { useState, useEffect } from 'react';
import './App.css';
import TodoEntry from './todoEntry'; 
import Todo from './todo';

const App = () => {
  const [todoList, setTodoList] = useState([])

  const createTodo = (todo) => {
    setTodoList(todoList => [...todoList, todo])
  }
  const editTodo = (index, event) => {
    setTodoList(todoList => {
      let arr = []
      arr.push(...todoList)
      arr[index] = event.target.value
      return (arr)
    })
  }
  const removeTodo = index => {
    setTodoList(todoList => { 
      var arr = [];
      arr.push(...todoList)
      arr.splice(index, 1);
      return(arr)
    })
    console.log(index)
  }

  useEffect(() => {
     console.log(todoList)
     
  },[todoList])
  
  return (
    <div>
      <TodoEntry createTodo={createTodo} />
      {
        todoList.map((todo,key) => (
          <Todo key={key} index={key} todo={todo} removeTodo={removeTodo} editTodo={editTodo}/>
        )
        )
      }
    </div>
  );
}

export default App;
