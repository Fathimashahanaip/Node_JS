import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
