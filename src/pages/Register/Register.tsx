import './register.css'
import logo from "../../assets/logo.png"
import { AtSign, Calendar, CircleUser, IdCard, Lock   } from 'lucide-react';


function Register() {
  return (
    <>
      <div className="login-page">

        <div className="login-container">

        <img className='logo-img' src={logo}></img>

          <h1 className="login-title">Crie sua conta</h1>
          <span className="login-span">Crie sua conta no hub</span>  
          <form>

          <div className="input-icon-wrapper">
    <CircleUser className="input-icon" />
    <input className="login-input" type="text" placeholder="Nome completo" />
  </div>

  <div className="input-icon-wrapper">
    <Calendar className="input-icon" />
    <input className="login-input" type="date" placeholder="Data de nascimento" />
  </div>

  <div className="input-icon-wrapper">
    <IdCard className="input-icon" />
    <input className="login-input" type="text" placeholder="CPF" />
  </div>


  <div className="input-icon-wrapper">
    <AtSign className="input-icon" />
    <input className="login-input" type="email" placeholder="Email de verificador" />
  </div>

  <div className="input-icon-wrapper">
    <Lock className="input-icon" />
    <input className="login-input" type="password" placeholder="Senha de verificador" />
  </div>
            
          
            <button className="login-button"type="submit">Proximo</button>
            <button  className="register-button"type="submit">Já tenho conta</button>

          </form>
        </div>

      </div>
    </>
  )
}

export default Register
