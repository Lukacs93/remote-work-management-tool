import React, {useEffect, useState} from "react";

function Login({ handleLogin }) {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch("https://localhost:7029/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: 'include',
            body: JSON.stringify({ userName, password })
        });

        if (!response.ok) {
            const message = `An error occurred: ${response.statusText}`;
            window.alert(message);
            return;
        }
 
            // Redirect the user to the home page
           // window.location.href = "/dashboard";

            const data = await response.json();
            console.log(data)
        
    }
    

    return (
        <form onSubmit={handleSubmit}>
            <label>
                UserName:
                <input
                    type="userName"
                    value={userName}
                    onChange={(event) => setUserName(event.target.value)}
                />
            </label>
            <br />
            <label>
                Password:
                <input
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
            </label>
            <br />
            <button type="submit">Login</button>
        </form>
    );
}

export default Login;