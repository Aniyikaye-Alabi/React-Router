import React, { useState } from 'react';

const Login = ({match}) => {
    console.log(match);

    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    const handleUsername = (e) => {
        const {value} = e.target;
        setUsername(value);
    };

    const handlePassword = (e) => {
        const {value} = e.target;
        setPassword(value);
    };


    const loginStyle = {
        display: 'block',
        margin: '0px auto',
        marginBottom: 10,
        width: 250,
        height: 20
    };

    return (
        <div>
            <form autoComplete="off">
                <input style={loginStyle} type="text" onChange={handleUsername} value={username} placeholder="Username" />
                <input style={loginStyle} type="password" onChange={handlePassword} value={password} placeholder="Password" />
            </form>
        </div>
    );
}
export default Login;