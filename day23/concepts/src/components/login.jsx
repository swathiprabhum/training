import { useState } from "react";

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
        {isLoggedIn ? <h2>Welcome Back, User!</h2> : <h2>Please Log In</h2>}
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Toggle Login</button>
            </div>
    ) 
}

export default Login;