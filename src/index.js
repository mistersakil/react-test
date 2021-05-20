import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
// import "./index.css";
// import Counter from './Counter';
// import Timer from  './Timer'
// import DigitalCalculator from  './DigitalCalculator'
// import Form from  './Form'
// import Form2 from  './Form2'
// import Todo from  './Todo'
// import Context from "./Context";
// import Keep from "./Keep";
// import Menu from "./Menu";
// import Login from "./Login";
// import UseEffect from "./Components/UseEffect";
// import Reducer from "./Components/Reducer";
import QuizApp from "./Components/QuizApp";

ReactDOM.render(
  <BrowserRouter>
    <QuizApp />
  </BrowserRouter>,
  document.getElementById("root")
);
