import "../css/Singup.css"
import React,{ useState} from 'react'

const Singup = () => {
  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('');
  const signIn = e => {
    e.preventDefault();
    ///maaa chod denge
  }
  const register = e =>{
    e.preventDefault();
    
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
            <button type = 'submit' onClick={signIn} className="login_signinbutton">Sign In</button>
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
