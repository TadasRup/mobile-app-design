import { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './Login.module.css'
import Validation from './LoginValidation';

export default function Login() {

    const [values, setValues] = useState({
        email: '',
        passowrd: '',
    })
    const [errors, setErrors] = useState({})

    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
}
    const handleSubmit =(event) => {
        event.preventDefault()
        setErrors(Validation(values));
    }

return(
    <div className={style.loginpage}>
        <form className={style.loginform} onSubmit={handleSubmit}>
        <h1>Log in to your account</h1>
            <input className={style.reginput} type="email" placeholder='Email' onChange={handleInput}/>
            {errors.email && <span className={style.errordanger}> { errors.email } </span>}
            <input className={style.reginput}  type="password" placeholder='Password'onChange={handleInput}/>
            {errors.password && <span className={style.errordanger}> { errors.password } </span>}
            <button type='submit' className={style.continuebutton}>LOG IN</button>
            <h4>OR</h4>
            <Link className={style.continuebutton} type='submit' to="/CreateAccount">REGISTER</Link>
        </form>
    </div>
)
}