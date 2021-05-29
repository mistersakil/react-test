import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import reducers from "./reducers";
const stateCollection = {};
export default createStore(
  reducers,
  stateCollection,
  composeWithDevTools(applyMiddleware(logger))
);
