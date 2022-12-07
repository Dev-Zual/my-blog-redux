import { composeWithDevTools } from "@redux-devtools/extension";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import blogReducer from "./BlogReducer/BlogReducer";

const store = createStore(
  blogReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
