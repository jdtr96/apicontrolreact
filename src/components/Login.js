import React, { useState } from 'react';
import { setUserSession} from '../Utils/Common';
import  { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Login(props) {
  const [loading, setLoading] = useState(false);
  const username = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);

  const handleLogin = () => {

    try{
        fetch('http://127.0.0.1:8000/usuario/user/verificar_login/',{
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username.value, 
                password: password.value
            })
        })
        .then(response => response.json())
        .then(response => {
            setUserSession(response[1].key, response[0])
            props.history.push('/home');
        })
    }catch(error){
        console.log(error)
    }
    
  }
  return (
    <div className="container">
        <br/>
        <br/>
        <form>
        <h3>LOGIN</h3>
        <div className="form-group">
            <label>Usuario</label>
            <input type="text" {...username} className="form-control" placeholder="Enter user" />
        </div>
        <div className="form-group">
            <label>Contraseña</label>
            <input type="password" {...password} className="form-control" placeholder="Enter password" />
        </div>
        {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
        <button type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} className="btn btn-dark btn-lg btn-block">Sign in</button>
        <br/>
        <button type="button" className="btn btn-dark btn-lg btn-block">
        <Link to={"/registro"} style={{ textDecoration: 'none', color:'white' }}>
        Registrarse        
        </Link></button>

    </form>
    </div>
    
  );
}

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}

export default Login;