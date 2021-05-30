import { createStore, applyMiddleware } from "redux";
import rootReducers from "./reducers";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
const stateCollection = {};
export default createStore(
  rootReducers,
  stateCollection,
  composeWithDevTools(applyMiddleware(logger))
);
