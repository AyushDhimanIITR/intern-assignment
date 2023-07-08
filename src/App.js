import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Components/LandingPage/Main';
import Page from "./Components/Article/Page";

function App() {
  return (
    <BrowserRouter>
      <Routes>

      <Route path='/' element={<Main />} />
      <Route path='/posts/:id' element={<Page />} />
    
      </Routes>
    </BrowserRouter>
  );
}

export default App;
