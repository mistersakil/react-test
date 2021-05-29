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
// import CounterClick from "./Components/Hoc/CounterClick";
// import CounterHover from "./Components/Hoc/CounterHover";
import CounterClick from "./Components/redux/CounterClick";
import CounterHover from "./Components/redux/CounterHover";
import { Provider } from "react-redux";
import reduxStore from "./redux/reduxStore";
ReactDOM.render(
  <BrowserRouter>
    <Provider store={reduxStore}>
      <CounterClick />
      <CounterHover />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
