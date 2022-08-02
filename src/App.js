import logo from './logo.svg';
import './App.css';
import { Routes, Route} from  'react-router-dom'
import HomePage from './Pages/HomePage/HomePage';
import Login from './Pages/Login/Login';
import Class from './Pages/Class/Class';
import NavBar from './Components/NavBar/NavBar';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
          <Route exact path = '/HomePage' element = {<HomePage/>}/>
          <Route exact path = '/login' element = {<Login/>}/>
          <Route exact path = '/class' element = {<Class/>}/>
        </Routes>
    </div>
  );
}

export default App;
