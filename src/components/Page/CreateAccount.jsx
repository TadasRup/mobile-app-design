import {useState} from 'react';
import style from './CreateAccount.module.css'
import { Link } from 'react-router-dom';


export default function CreateAccount() {

  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const registerUser = (e) => {
    e.preventDefault()
  }
    return (
      <div className={style.registerpage}> 
        <h1>Create your account</h1>
      <form className={style.regform} onSubmit={registerUser}>
       
        <input className={style.reginput} type="text" placeholder='Name' value={data.name} onChange={(e) => setData({...data, name: e.target.value})}/>
       
        <input className={style.reginput}  type="text" placeholder='Email' value={data.email} onChange= {(e) => setData({...data, email: e.target.value})} />
       
        <input className={style.reginput}  type="text" placeholder='Password' value={data.password} onChange={(e) => setData({...data, password: e.target.value})} />
        <p>You are agree to our terms and policies</p>
        <button className={style.continuebutton} type='sumbit'>REGISTER</button>
        <h4>OR</h4>
        <Link className={style.continuebutton} type='sumbit'  to="/Login">LOGIN</Link>
      </form>
    </div>
  );
  };
  
  