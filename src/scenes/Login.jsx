import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Home from "./Home";

export default function Login ({user,setUser}){
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()

  const navigate = useNavigate()
  
  const handleLogin = (e) => {
    e.preventDefault();

    console.log(e.target.value)
    
    const body = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email,password}),
    }
    fetch("https://tv-shows-api-js.web.app/login", body)
      .then((resp) => resp.json())
      .then((data) => {
        if (data.message) {
          alert(data.message);
          return;
        }
        setUser(data)
      })
      .catch(alert);

      navigate("/")
      
  };
  
  return(    <>
    <h2>Login</h2>
    <figure>
    <form onSubmit={handleLogin}>
      <label htmlFor="email">
        Email
        <input
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </label>
      <br />
      <label htmlFor="password">
        Password
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <input type="submit" value="Sign Up" />
      </label>
    </form>
    </figure>
  </>
)
}