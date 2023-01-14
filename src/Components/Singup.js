import "../css/Singup.css"
import React,{ useState} from 'react'
import { auth } from "../Firebase";
import { Link, useNavigate } from "react-router-dom";

const Singup = () => {
  const navigate = useNavigate();
  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('');
  const signIn = e => {
    e.preventDefault();
   auth
       .signInWithEmailAndPassword(email, password)
       .then(auth => {
        navigate('/')
       }) 
       .catch(error => alert(error.message))
  }
  const register = e =>{
    e.preventDefault();
    auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) =>{
          console.log(auth);
        })
        .catch(error => alert(error.message))
  }
  return (
    <div className='singup'>
        <div className="containt">
        <h1>Sign-in</h1>
        <form>
            <h5>E-mail</h5>
            <input type="text" value ={email} onChange={e => setEmail(e.target.value) }/>
            <h5>Password</h5>
            <input type="password" value ={password} onChange={e => setPassword(e.target.value) }/>
            <Link to ="/2nd"> <button type = 'submit'  className="login_signinbutton">Sign In</button></Link>
        </form>
        <p>
          By signing-in you agree to the Compound T/C.plz see our Privacy Notice, our Cookies Notice.
        </p>
        <button onClick={register} className="login_registerButton">Create account</button>
        </div>
    </div>
  )
}

export default Singup
