
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login2 from './components/Login2';
import Register from './components/Register';
import Home from './components/Home';
import store from './redux/store'; // Importa il tuo store
import { Provider } from 'react-redux';



function App() {
  return (
    
    <div className="App">
       <Router>
       <Provider store={store}>

      <Routes>
        
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login2 />} />
        <Route path="*" element={<Login2 />} />
        <Route path="/home" element={<Home/>}/>

      </Routes>
      </Provider>

    </Router>
  
      

    
   

    </div>
  );
}

export default App;
