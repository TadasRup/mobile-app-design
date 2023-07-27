import React, {useState} from 'react';
import style from '../css/CreateAccount.module.css'
import { Link } from 'react-router-dom';
import Validation from '../../components/validations/RegisterValidation';
import axios from 'axios';
import { RiEyeFill, RiEyeCloseFill } from 'react-icons/ri';


export default function CreateAccount () {


  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
})
const [errors, setErrors] = useState({})
const [showPassword, setShowPassword] = useState(false);
const [termsAgreed, setTermsAgreed] = useState(false);

const handleInput = (event) => {
    setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
}

const handleSubmit =(event) => {
    event.preventDefault()
    setErrors(Validation(values));
    if(errors.name === "" && errors.email === "" && errors.passowrd === "") {
      axios.post('http://localhost:8081/CreateAccount', values)
      .then(res => console.log(res))
      .catch(err => console.log(err));
    }
}
const togglePasswordVisibility = () => {
  setShowPassword((prevShowPassword) => !prevShowPassword);
};

const handleTermsAgree = () => {
  setTermsAgreed((prevTermsAgreed) => !prevTermsAgreed);
};

    return (
      <div className={style.registerpage}> 
        <h1>Create your account</h1>
      <form className={style.regform} onSubmit={handleSubmit}>
       
        <input className={style.reginput} name='name' type="text" placeholder='Name' onChange={handleInput} />
        {errors.name && <span className={style.errordanger}> { errors.name } </span>}
        <input className={style.reginput} name='email'  type="text" placeholder='Email' onChange={handleInput} />
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
        <p className={style.policies}>
       
        {termsAgreed ? (
          <span
            role="img"
            aria-label="checkmark"
            className={`${style.checkmarkSymbol}`}
            onClick={handleTermsAgree}
          >
            ✔
          </span>
        ) : (
          <span
            role="img"
            aria-label="cube"
            className={`${style.cubeSymbol}`}
            onClick={handleTermsAgree}
          >
            □
          </span>
        )}
          You agree to our terms and <Link className={style.policiestxt} to="/PoliciesPage">policies</Link>
        </p>
        <Link className={style.continuebutton} type="submit" to="/Login">
          REGISTER
        </Link>
        <h4>OR</h4>
        <Link className={style.continuebutton} type="submit" to="/Login">
          LOGIN
        </Link>
      </form>
    </div>
  );
}
  