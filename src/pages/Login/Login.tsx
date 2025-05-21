import './login.css';
import logo from "../../assets/logo.png";
import { AtSign, Lock } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
  
    try {
      const formData = new FormData();
      formData.append('username', email);
      formData.append('password', senha);

      const response = await fetch('https://campus-face.vercel.app/auth/login', {
        method: 'POST',
        body: formData,
      });
  
      if (response.ok) {
        const data = await response.json();
        
        localStorage.setItem('token', data.access_token);
        localStorage.setItem('token_type', data.token_type);
        
        console.log('Login bem-sucedido:', data);
        navigate('/dashboard/requests');
      } else {
        let errorData;
        try {
          errorData = await response.json();
        } catch {
          errorData = { detail: 'Erro desconhecido' };
        }
        
        console.error('Erro de login - Status:', response.status);
        console.error('Erro de login - Dados:', errorData);
        console.error('Dados enviados:', { username: email, password: '***' });
        
        if (response.status === 422) {
          console.error('Dados inválidos enviados para a API');
          alert('Dados de login inválidos. Verifique o formato do email e senha.');
        } else if (response.status === 401) {
          alert('Email ou senha incorretos. Verifique suas credenciais.');
        } else {
          alert(errorData.detail || `Erro ${response.status}: ${response.statusText}`);
        }
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      alert('Erro de conexão. Tente novamente.');
    } finally {
      setIsLoading(false);
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
              disabled={isLoading}
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
              disabled={isLoading}
            />
          </div>

          <button 
            className="login-button" 
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? 'Entrando...' : 'Entrar'}
          </button>
          
          <button
            className="register-button"
            type="button"
            onClick={() => navigate('/register')}
            disabled={isLoading}
          >
            Não tenho uma conta
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;