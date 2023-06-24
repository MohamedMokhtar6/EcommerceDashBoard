import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./Reducer/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const inthialState = {};
const middleware = [thunk];
const store = createStore(
  rootReducer,
  inthialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
