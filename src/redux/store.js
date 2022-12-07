import { createStore } from "redux";
import blogReducer from "./BlogReducer/BlogReducer";

const store = createStore(blogReducer);

export default store;
