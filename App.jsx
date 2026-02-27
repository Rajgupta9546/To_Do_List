import { useState } from "react";
import Header from "./Components/Header";
import ToDoList from "./Components/ToDoList";
import "./index.css";


function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // Add Todo
  const addTodo = () => {
    if (input.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInput("");
  };

  // Delete Todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Toggle Complete
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Edit Todo
  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  return (
    <div className="container">
     
      <Header />
      <div className="input-section">
        <input
          type="text"
          value={input}
          placeholder="Enter a task..."
          onChange={(e) => setInput(e.target.value)}
          
        />
        <button onClick={addTodo}>Add</button>
      </div>

      <ToDoList
        todos={todos}
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
        editTodo={editTodo}
      />
    </div>
  );
}

export default App;