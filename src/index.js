import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
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
// import QuizApp from "./Components/QuizApp";
// import QuizIndex from "./Components/Quiz/QuizIndex";
import CounterClick from "./Components/Hoc/CounterClick";
import CounterHover from "./Components/Hoc/CounterHover";

ReactDOM.render(
  <BrowserRouter>
    <CounterClick type="Click" />
    <CounterHover type="MouseHover " />
  </BrowserRouter>,
  document.getElementById("root")
);
