import React, { useState } from "react";
import "./todo.css";
import CheckIcon from "@material-ui/icons/Check";
import DeleteIcon from "@material-ui/icons/Delete";

const Todo = () => {
  const [todoItems, todoItemsSet] = useState([]);
  const [todoInput, todoInputSet] = useState("");
  const [error, errorSet] = useState(false);
  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (todoInput) {
      todoItemsSet((todoItemsOld) => [...todoItemsOld, todoInput]);
      todoInputSet("");
      errorSet(false);
    } else {
      errorSet(true);
    }
  };
  const todoInputHandler = (event) => {
    todoInputSet(event.target.value);
  };

  const successHandler = (event) => {
    let itemContainer = event.target.parentElement.previousElementSibling;
    itemContainer.classList.toggle("item");
  };

  const deleteHandler = (event) => {
    const id = parseInt(event.target.id);
    if (id >= 0) {
      todoItemsSet((todoItemsOld) => {
        return todoItemsOld.filter((item, index) => index != id);
      });
    }
  };

  return (
    <>
      <div className="todoApp">
        <h1>Todo App</h1>
        <small>Create your task as many as you want</small>
        <hr />
        <form onSubmit={formSubmitHandler}>
          <input
            type="text"
            placeholder="Add new task"
            value={todoInput}
            onChange={todoInputHandler}
          />
          {error && (
            <span className="errorMessage"> Field should not be empty</span>
          )}

          <input type="submit" value="+" title="Save" />
        </form>
        <ul>
          {todoItems.map((item, index) => {
            return (
              <li key={index}>
                <span className="">{item}</span>

                <div className="actions">
                  <button
                    className="success"
                    type="button"
                    id={index}
                    onClick={successHandler}
                  >
                    -
                  </button>
                  <button
                    className="delete"
                    type="button"
                    id={index}
                    onClick={deleteHandler}
                  >
                    x
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Todo;
