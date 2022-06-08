import logo from './logo.svg';
import './App.css';
import { Route, Link, BrowserRouter as Router, Routes } from 'react-router-dom'
import Detalles from './detalles';
import Productos from './productos';
import Notfound from './notfound';
import {DataProvider} from './context'
function App() {
  return (
    
      <Router>
        <Routes>
              <Route path='/' element={<Productos/>}/>
              <Route path='/detalles/:id' element={<Detalles/>}/>
              <Route path='*' element={<Notfound/>}/>
        </Routes>
      </Router>
    
  );
}

export default App;
