import './App.css'
import Basic from './componts/basic';
import Main from './componts/Main';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/basic' element={<Basic />}/>.
      </Routes>
    </BrowserRouter>
  )
}
export default App;