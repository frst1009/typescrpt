import './App.css';
import Tables from './TableContent/Table';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Tables/>}/>
    </Routes></BrowserRouter>
  </>
  );
}

export default App;
