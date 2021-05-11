import React, { useState } from "react";
import "./Login.css";
import { BiSave } from "react-icons/bi";

const Login = () => {
  const initialUsers = [];
  const initialUser = { email: "", password: "" };
  const [users, usersSet] = useState(initialUsers);

  const [user, userSet] = useState(initialUser);
  const loginHandler = (event) => {
    event.preventDefault();
  };
  const inputChangeHandler = (event) => {
    let { name, value } = event.target;
    userSet();
  };
  return (
    <>
      <h1>Login Form</h1>
      <form onSubmit={loginHandler}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            id="email"
            autoComplete="off"
            value={users.email}
            onChange={inputChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={users.password}
          />
        </div>
        <div>
          <button type="submit" name="save">
            Save <BiSave />
          </button>
        </div>
      </form>
      {users.map((currentUser) => {
        return (
          currentUser && (
            <div className="userList">
              <span>{currentUser.email}</span>
              <span>{currentUser.password}</span>
            </div>
          )
        );
      })}
    </>
  );
};

export default Login;
