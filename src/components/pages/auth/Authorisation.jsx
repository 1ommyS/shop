import React, {useState} from 'react';


const Authorisation = (props) => {
    const [login, setFormType] = useState(true);

    return (
        <form action="">
        {
            login ? <Login/> : <Register/>
        }
        </form>
    )
}

const Login = (props) => (
        <div className="container">
            <h1>Authorisation</h1>
        </div>
);
const Register = (props) => {
    return (
        <h1>Hi world</h1>
    )
}

export default Login;