import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import styles from './LoginMainSection.module.css';

function Login() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLoginChange = (event) => {
    setLogin(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Limpar a mensagem de erro antes de enviar a requisição
    setErrorMessage('');

    try {
      // Enviando a requisição POST para o backend
      const response = await axios.post('http://localhost:8080/auth/login', {
        login: login,
        password: password
      });

      const token = response.data.token;

      // Salvando o token em um cookie
      Cookies.set('jwtToken', token, {
        sameSite: 'Lax', // Configuração para proteger contra CSRF
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000) // Cookie expira em 1 dia
      });

      // Redirecionar para a página principal após o login bem-sucedido
      navigate('/home');

      // Redirecionar ou realizar outra ação após o login bem-sucedido
      console.log('Autenticação bem-sucedida. Token:', token);

      // Opcional: limpar os campos de entrada após o login bem-sucedido !
      setLogin('');
      setPassword('');
    } catch (error) {
      // Tratamento de erros
      if (error.response && error.response.status === 401) {
        setErrorMessage('Login ou senha inválidos.');
      } else {
        setErrorMessage('Erro no servidor. Tente novamente mais tarde.');
      }
    }
  };

  return (
    <div className={styles.loginSection}>
      <div className={styles.cardLogin}>
        <h2>Login</h2>
        {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="login">Login:</label>
            <input
              type="text"
              id="login"
              value={login}
              onChange={handleLoginChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <button type="submit" className={styles.loginButton}>Entrar</button>
        </form>
        <div className={styles.registerLink}>
          <a href="/register">Não tem uma conta? Cadastre-se</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
