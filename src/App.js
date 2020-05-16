import React from "react";
import "./App.css";
import Chat from "./Components/Chat/Chat";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./Components/Login/Login";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Route exact path="/" component={Chat} />
          <Route exact path="/login" component={Login} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
