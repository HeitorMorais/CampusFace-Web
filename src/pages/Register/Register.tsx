import './register.css'
function Register() {
  return (
    <>
      <div className="login-page">

        <div className="login-container">
          <h1 className="login-title">Crie sua conta</h1>
          <span className="login-span">Crie sua conta no hub</span>  
          <form>
          <input className="login-input" type="text" placeholder="Nome Completo" />
          <input className="login-input" type="text" placeholder="data de nascimento" />
          <input className="login-input" type="text" placeholder="CPF" />
            <input className="login-input" type="email" placeholder="Email de verificador" />
            <input className="login-input"type="password" placeholder="Senha de verificador" />
            <button className="login-button"type="submit">Proximo</button>
            <button  className="register-button"type="submit">Já tenho conta</button>

          </form>
        </div>

      </div>
    </>
  )
}

export default Register
