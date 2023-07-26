import React, {useState} from 'react';
import style from './CreateAccount.module.css'
import { Link } from 'react-router-dom';
import Validation from './RegisterValidation';
import axios from 'axios';


export default function CreateAccount () {


  const [values, setValues] = useState({
    name: '',
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
    if(errors.name === "" && errors.email === "" && errors.passowrd === "") {
      axios.post('http://localhost:8081/CreateAccount', values)
      .then(res => console.log(res))
      .catch(err => console.log(err));
    }
}

    return (
      <div className={style.registerpage}> 
        <h1>Create your account</h1>
      <form className={style.regform} onSubmit={handleSubmit}>
       
        <input className={style.reginput} name='name' type="text" placeholder='Name' onChange={handleInput} />
        {errors.name && <span className={style.errordanger}> { errors.name } </span>}
        <input className={style.reginput} name='email'  type="text" placeholder='Email' onChange={handleInput} />
        {errors.email && <span className={style.errordanger}> { errors.email } </span>}
        <input className={style.reginput} name='password'  type="text" placeholder='Password 'onChange={handleInput} />
        {errors.password && <span className={style.errordanger}> { errors.password } </span>}
        <p className={style.policies}>You are agree to our terms and policies</p>
        <Link className={style.continuebutton} type='submit' to='/Login'>REGISTER</Link>
        <h4>OR</h4>
        <Link className={style.continuebutton} type='submit'  to="/Login">LOGIN</Link>
      </form>
    </div>
  );
  };
  
  