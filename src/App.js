import { Link } from "react-router-dom";
import "./App.css";
import Login from "./Login";
import Register from "./Register";
import LoggedUser from "./LoggedUser";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <div className='link-wrap'>
          <Link className='link btn btn-primary' to='/register'>
            Register
          </Link>
          <Link className='link btn btn-primary' to='/login'>
            Login
          </Link>
          <Link className='link btn btn-primary loggeduser' to='/loggeduser'>
            Logged User
          </Link>
        </div>
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/loggeduser' element={<LoggedUser />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
