import './login.css'
import logo from "../../assets/logo.png"
import { AtSign, Lock } from 'lucide-react';

function Login() {
  return (
    <>
      <div className="login-page">

        <div className="login-container">

          <img className='logo-img' src={logo}></img>
          <h1 className="login-title">Entre agora</h1>
          <span className="login-span">Entre com sua conta no hub</span>  
          <form>
  <div className="input-icon-wrapper">
    <AtSign className="input-icon" />
    <input className="login-input" type="email" placeholder="Email de verificador" />
  </div>

  <div className="input-icon-wrapper">
    <Lock className="input-icon" />
    <input className="login-input" type="password" placeholder="Senha de verificador" />
  </div>

  <button className="login-button" type="submit">Entrar</button>
  <button className="register-button" type="submit">Não tenho uma conta</button>
</form>
        </div>

      </div>
    </>
  )
}

export default Login
