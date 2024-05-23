import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import AddCat from './components/AddCat';
import { Route, BrowserRouter as Router , Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard';
import AddProd from './components/AddProd';
function App() {
  return (
    <div>
      {/* <Login></Login> */}
      {/* <AddType></AddType> */}
      <AddProd></AddProd>
      {/* <Router>
        <Routes>
          <Route path='/' element={<Login></Login>}></Route>
          <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
          <Route path='/addCat' element={<AddCat></AddCat>}></Route>
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
