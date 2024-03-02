import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Recipes from './pages/Recipes';
import Settings from './pages/Settings';

function App() {
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/home" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/recipes" element={<Recipes/>}/>
          <Route path="/settings" element={<Settings/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );

}
export default App;