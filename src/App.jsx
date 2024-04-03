import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Account from './pages/Account';
import Recipes from './pages/Recipes';
import Settings from './pages/Settings';
import LemonChicken from './pages/LemonChicken';
import LoginState from './components/LoginState';

function App() {
  return(
    <LoginState>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/account" element={<Account/>}/>
          <Route path="/recipes" element={<Recipes/>}/>
          <Route path="/settings" element={<Settings/>}/>
          <Route path="/recipe/0" element={<LemonChicken/>}/>
        </Routes>
      </BrowserRouter>
    </LoginState>
  );

}
export default App;