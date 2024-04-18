import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Account from './pages/Account';
import Recipes from './pages/Recipes';
import Settings from './pages/Settings';
import ProfilePage from './pages/ProfilePage';
import StoreRecipe from './pages/StoreRecipe';
import SortI from './pages/SortI';
import LemonChicken from './pages/LemonChicken';
import ShrimpScampi from './pages/ShrimpScampi';
import StirFry from './pages/StirFry';
import Pizza from './pages/Pizza';
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
          <Route path="/recipes/store" element={<StoreRecipe/>}/>
          <Route path="/recipe/0" element={<LemonChicken/>}/>
          <Route path="/recipe/1" element={<ShrimpScampi/>}/>
          <Route path="/recipe/2" element={<StirFry/>}/>
          <Route path="/recipe/3" element={<Pizza/>}/>
          <Route path="/profile" element={<ProfilePage/>}/>
          <Route path="/recipes/sortI" element={<SortI/>}/>
        </Routes>
      </BrowserRouter>
    </LoginState>
  );

}
export default App;