import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SignInScreen() {
    
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const onSubmitHandler = (e) => {
    e.preventDefault(); //page won't refresh hen clicked
    //TODO SignIn Action
  }


  return (
    <div>
      <form className="form" onSubmit={onSubmitHandler}>
        <div>
          <h1>Sign In</h1>
        </div>
        <div>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            value={email}
            placeholder="Enter Your Email address"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Email address</label>
          <input
            type="password"
            id="password"
            value={password}
            placeholder="Enter  Password "
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
            Sign In
          </button>
        </div>
        <div>
          <label />
          <div>
              New Customer? {' '}
              <Link to="/register">Create Your Account</Link>
          </div>
        </div>
      </form>
    </div>
  );
}
