import './App.css';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import Home from './pages/home'
import RegistroPage from './pages/register';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='register' element={<RegistroPage />} />
      </Routes>
    </div>
  );
}

export default App;
