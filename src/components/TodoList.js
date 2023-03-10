import React, {useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo';

function TodoList() {
    const [todos, setTodos] = useState([])

    //if excessive space is used, this method will keep it contained when showing the todolist
    const addTodo = todo => {
      if (!todo.text || /^\s*$/.test(todo.text) ){
        return;
      }

      const newTodos = [todo, ...todos];

      setTodos(newTodos);
  
    };

     const updateTodo = (todoId, newValue,todo ) => {
        if (!newValue.text || /^\s*$/.test(newValue.text) ){
        return;
      }

        setTodos(prev => prev.map(item => (item.id === todo.id ? newValue : item)))

     }




    const removeTodo = id => {
      const removeArr = [...todos].filter(todo => todo.id !== id)

      setTodos(removeArr)
    };

   

    const completeTodo = id => {
      let updatedTodos = todos.map(todo => {
        if (todo.id === id) {
          todo.isComplete = !todo.isComplete
        }
        return todo
      });
      setTodos(updatedTodos)
    }

  return (
    <div>
        <h1> What's the plan for today? </h1>
        <TodoForm onSubmit={addTodo}/>
          <Todo todos={todos}
          completeTodo={completeTodo}
          removeTodo={removeTodo} 
          updateTodo={updateTodo} />
    </div>
  );
}

export default TodoList