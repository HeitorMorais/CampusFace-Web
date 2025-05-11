import './login.css'
function Login() {
  return (
    <>
      <div className="login-page">

        <div className="login-container">
          <h1 className="login-title">Entre agora</h1>
          <span className="login-span">Entre com sua conta no hub</span>  
          <form>
            <input className="login-input" type="email" placeholder="Email de verificador" />
            <input className="login-input"type="password" placeholder="Senha de verificador" />
            <button className="login-button"type="submit">Entrar</button>
            <button  className="register-button"type="submit">Não tenho uma conta</button>

          </form>
        </div>

      </div>
    </>
  )
}

export default Login
