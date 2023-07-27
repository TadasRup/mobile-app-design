import { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './Login.module.css'
import Validation from './LoginValidation';
import { RiEyeFill, RiEyeCloseFill } from 'react-icons/ri';

export default function Login() {

    const [values, setValues] = useState({
        email: '',
        password: '',
    })
    const [errors, setErrors] = useState({})
    const [showPassword, setShowPassword] = useState(false);

    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
}
    const handleSubmit =(event) => {
        event.preventDefault()
        setErrors(Validation(values));
}

const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
};

return (
    <div className={style.loginpage}>
      <form className={style.loginform} onSubmit={handleSubmit}>
            <h1>Log in to your account</h1>
                <input className={style.reginput} type="email" placeholder='Email' onChange={handleInput}/>
                {errors.email && <span className={style.errordanger}> { errors.email } </span>}
        <div className={style.passwordContainer}>
            <input
                className={style.reginput}
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                onChange={handleInput}/>
            <span className={style.togglePassword} onClick={togglePasswordVisibility}>
                {showPassword ? <RiEyeCloseFill /> : <RiEyeFill />}
             </span>
        </div>
        {errors.password && <span className={style.errordanger}> { errors.password } </span>}
        <Link type="submit" className={style.continuebutton} to="/Mainpage">
          LOG IN
        </Link>
        <h4>OR</h4>
        <Link className={style.continuebutton} type="submit" to="/CreateAccount">
          REGISTER
        </Link>
      </form>
    </div>
  );
}