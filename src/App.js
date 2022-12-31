import './App.css';
import StartPage from './pages/start-page';
import LoginPage from './pages/login-page';
import RegisterPage from './pages/register-page';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Iqro1 from './pages/iqro1';


function App() {
  return (
   <div>
    <Router>
      <Routes>
      <Route path='/' element={<StartPage/>}></Route>
      <Route path='/loginpage' element={<LoginPage/>}></Route>
      <Route path='/registerpage' element={<RegisterPage/>}></Route>
      <Route path='/iqro1' element={<Iqro1/>}></Route>
    </Routes>
    </Router>
  
   </div>
  );
}

export default App;
