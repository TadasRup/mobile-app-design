import { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './Login.module.css'

export default function Login() {
    const [data, setData] = useState({
        email: '',
        passowrd: '',
    })


const loginUser = (e) => {
    e.preventDefault()
}

return(
    <div className={style.loginpage}>
        <form className={style.loginform} onSubmit={loginUser}>
        <h1>Log in to your account</h1>
            <input className={style.reginput} type="email" placeholder='Email' value={data.email} onChange={(e) => setData({...data, email: e.target.value})}/>
            <input className={style.reginput}  type="password" placeholder='Password' value={data.password} onChange={(e) => setData({...data, password: e.target.value})}/>
            <button className={style.continuebutton} type='sumbit'>LOG IN</button>
            <h4>OR</h4>
            <Link className={style.continuebutton} type='sumbit' to="/CreateAccount">REGISTER</Link>
        </form>
    </div>
)
}