import './register.css';
import logo from "../../assets/logo.png";
import { AtSign, Calendar, CircleUser, IdCard, Lock } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [nome, setNome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('https://campus-face.vercel.app/user/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: nome,
          email: email,
          password: senha,
          birthDate: `${dataNascimento}T00:00:00Z`,
          cpf: cpf,
          roles: ["user"]
        })
      });

      if (response.ok) {
        alert('Usuário registrado com sucesso!');
        navigate('/login');
      } else {
        const erro = await response.json();
        alert(`Erro: ${erro.detail || 'não foi possível registrar'}`);
      }
    } catch (error) {
      console.error('Erro no registro:', error);
      alert('Erro inesperado ao registrar');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <img className='logo-img' src={logo} alt="Logo" />
        <h1 className="login-title">Crie sua conta</h1>
        <span className="login-span">Crie sua conta no hub</span>  

        <form onSubmit={handleRegister}>
          <div className="input-icon-wrapper">
            <CircleUser className="input-icon" />
            <input
              className="login-input"
              type="text"
              placeholder="Nome completo"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>

          <div className="input-icon-wrapper">
            <Calendar className="input-icon" />
            <input
              className="login-input"
              type="date"
              placeholder="Data de nascimento"
              value={dataNascimento}
              onChange={(e) => setDataNascimento(e.target.value)}
              required
            />
          </div>

          <div className="input-icon-wrapper">
            <IdCard className="input-icon" />
            <input
              className="login-input"
              type="text"
              placeholder="CPF"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              required
            />
          </div>

          <div className="input-icon-wrapper">
            <AtSign className="input-icon" />
            <input
              className="login-input"
              type="email"
              placeholder="Email"
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
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>

          <button className="login-button" type="submit">Próximo</button>
          <button
            className="register-button"
            type="button"
            onClick={() => navigate('/login')}
          >
            Já tenho conta
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
