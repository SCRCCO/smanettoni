import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login2 from "./components/Login2";
import Register from "./components/Register";
import Home from "./components/Home";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import rootReducer from "./reducers"; // Importa il tuo rootReducer
import App from "./App";

const store = configureStore(rootReducer);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login2 />} />
            <Route path="*" element={<Login2 />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
