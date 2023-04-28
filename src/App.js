import { BrowserRouter, Routes ,Route, Link} from 'react-router-dom';
import Home from './scenes/Home';
import AddShow from './scenes/AddShow';
import Login from './scenes/Login';
import SignUp from './scenes/SignUp';
import logo from './logo.svg';
import './styles/App.css';
import { useState } from 'react';

function App() {
  const [shows,setShows] = useState()
  const [user,setUser] = useState()
  return (
    <>
 
    <BrowserRouter>
    <div className = "backgroundImg">
    <ul>
      <li>
        <Link to= {"/addshow"}>Add Show</Link>
      </li>
      <li>
        <Link to= {"/"}>Home</Link>
      </li> 
      <li>
        {/* {user ? <Link to= {"/login"}>Login</Link> : <Link to= {"/signup"}>Signup</Link>} */}
        <Link to= {"/login"}>Login</Link> 
      </li> 
      <li>
        {/* {user ? <Link to= {"/login"}>Login</Link> : <Link to= {"/signup"}>Signup</Link>} */}
        <Link to= {"/signup"}>Signup</Link>
      </li> 
    </ul>
      <Routes>

        <Route path="/" element = {<Home shows = {shows} setShows = {setShows} /> } />
        <Route path="/signup" element = {<SignUp/>} />
        <Route path="/addshow" element = {<AddShow setShows = {setShows} />} />
        <Route path="/login" element = {<Login user={user} setUser={setUser} />} />

      </Routes>
      </div>
    </BrowserRouter>

    </>
  );
}

export default App;
