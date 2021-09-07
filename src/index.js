import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/app';
import {BrowserRouter as Router} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import TodoServiceContext from "./components/context/todo-service-context";
import TodoService from "./services/TodoService";
import {Provider} from "react-redux";
import store from "./store/store";

const todoService = new TodoService();

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <TodoServiceContext.Provider value={todoService}>
              <Router>
                  <App />
              </Router>
          </TodoServiceContext.Provider>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
