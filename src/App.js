import { useState } from "react";
import "./App.css";
import { Container } from "react-bootstrap";
import Add from "./Add";
import List from "./List";

function App() {
  const [todoName, setTodoName] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTodo = () => {
    const dataTodo = { todoName, status: false };

    setTodoList([dataTodo, ...todoList]);
    setTodoName("");
  };

  const deleteTodo = (index) => {
    setTodoList(todoList.filter((value, idx) => index !== idx));
  };

  const finishTodo = (index) => {
    const cloningTodoList = [...todoList];
    cloningTodoList[index].status = !cloningTodoList[index].status;
    setTodoList(cloningTodoList);
  };

  const handleChangeTodoName = (e) => {
    const data = e.target.value;
    setTodoName(data);
  };

  const editTodo = (index, todoName) => {
    const cloningTodoList = [...todoList];
    cloningTodoList[index].todoName = todoName;
    setTodoList(cloningTodoList);
  };

  return (
    <div>
      <Container>
        <header className="bg-light py-3">
          <Container>
            <h1 className="text-center mb-0">Todo List Web App</h1>
          </Container>
          {/* Input Todo */}
          <Add
            handleChangeTodoName={handleChangeTodoName}
            todoName={todoName}
            addTodo={addTodo}
          />
        </header>

        {/* List Todo */}
        <List
          todoList={todoList}
          deleteTodo={deleteTodo}
          finishTodo={finishTodo}
          editTodo={editTodo}
        />
      </Container>
    </div>
  );
}
export default App;
