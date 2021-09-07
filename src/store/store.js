import {createStore} from "redux";
import reducer from "../redux/reducer/reducer";

const store = createStore(reducer);

export default store;