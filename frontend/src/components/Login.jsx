import React, { useState } from "react";

function Login() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");


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