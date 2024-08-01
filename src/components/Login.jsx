import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";
function Login(){
    const [username, setUserName] = useState("");
    const [password , setPassword] = useState("");
    
    const {setUser} = useContext(UserContext); 

    

    const handleLogin = (e) => {
        e.preventDefault();
        setUser({ username, password });
    }

    return(
        <>
        <h1>Login</h1>
        <section className="font-semibold shadow-lg m-4 p-2">
            <label htmlFor="username" >Username:</label>    
            <input type="text" 
            id="username" name="username"
            value={username}
            onChange={(e)=>setUserName(e.target.value)}
            className="border border-black m-1"
            />
            <br/>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="border border-black m-1"
            />
            <br />
            <button type="submit" onClick={handleLogin} className="border bg-red-400 p-1  shadow-md">Login</button>
        </section>
            </>
    )
}

export default Login;