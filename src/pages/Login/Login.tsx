import './login.css';
import logo from "../../assets/logo.png";
import { AtSign, Lock } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const response = await fetch('https://campus-face.vercel.app/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: email,
          password: senha,
        }),
      });
  
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.access_token);
        navigate('/dashboard');
      } else {
        const errorData = await response.json();
        console.error('Erro de login:', errorData);
        alert(errorData.message || 'Email ou senha incorretos');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      alert('Erro na autenticação');
    }
  };
  

  return (
    <div className="login-page">
      <div className="login-container">
        <img className='logo-img' src={logo} alt="Logo" />
        <h1 className="login-title">Entre agora</h1>
        <span className="login-span">Entre com sua conta no hub</span>  
        
        <form onSubmit={handleLogin}>
          <div className="input-icon-wrapper">
            <AtSign className="input-icon" />
            <input
              className="login-input"
              type="email"
              placeholder="Email de verificador"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-icon-wrapper">
            <Lock className="input-icon" />
            <input
              className="login-input"
              type="password"
              placeholder="Senha de verificador"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>

          <button className="login-button" type="submit">Entrar</button>
          <button
            className="register-button"
            type="button"
            onClick={() => navigate('/register')}
          >
            Não tenho uma conta
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
