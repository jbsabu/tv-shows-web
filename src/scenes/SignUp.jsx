import { useState } from "react";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const handleSignUp = (e) => {
    e.preventDefault();

    console.log(e.target.value)

    const body = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email,password}),
    }
    fetch("https://tv-shows-api-js.web.app/signup", body)
      .then((resp) => resp.json())
      .then((data) => {
        if (data.message) {
          alert(data.message);
          return;
        }
        // setShows(data)
      })
      .catch(alert);
  };

  return (
    <>
      <h2>Signup</h2>
      <figure>
      <form onSubmit={handleSignUp}>
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
            type="text"
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
  );
}
