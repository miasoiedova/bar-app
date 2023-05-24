import './styles/styles.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StartPage from './compoments/startPage/startPage';
import MenuPage from './compoments/menu/MenuPage';

function App (){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage/>}/>
        <Route path="menu" element={<MenuPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App;

