import React from 'react';
import style from './CreateAccount.module.css'


const CreateAccount = () => {

  const registerUser = (e) => {
    e.preventDefault()
  }
    return (
      <div className={style.registerpage}> 
        <h1>Create your account</h1>
      <form className={style.regform} onSubmit={registerUser}>
       
        <input className={style.reginput} type="text" placeholder='Name' />
       
        <input className={style.reginput}  type="text" placeholder='Email' />
       
        <input className={style.reginput}  type="text" placeholder='Password' />
        <button className={style.continuebutton} type='sumbit'>REGISTER</button>
        <h4>OR</h4>
        <button className={style.continuebutton} type='sumbit'>LOGIN</button>
      </form>
    </div>
  );
  };
  
  
  export default CreateAccount;
  