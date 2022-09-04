import { useState } from 'react';
import AuthForm from './AuthForm';

function Login({onLogin}) {
  const [inputsValues, setInputsValues] = useState({
    email: '',
    password: ''
  })

  function handleChange(evt) {
    const { name, value } = evt.target;
    setInputsValues({...inputsValues, [name]: value})
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onLogin(inputsValues.email, inputsValues.password)    
  }

  return (
    <AuthForm
      formName="login"
      textOnButton="Войти"
      onSubmit={handleSubmit}
      title="Вход"
    >
      <input 
          className="authorization__input" 
          type="email"
          name="email"
          id="login-email" 
          required
          placeholder="Email"
          onChange={handleChange}
          value={inputsValues.email || ''}
        />      
        <input 
          className="authorization__input" 
          type="password"
          name="password"
          id="login-password" 
          required
          placeholder="Пароль" 
          onChange={handleChange}
          value={inputsValues.password || ''}
        />
    </AuthForm>
  )
}

export default Login;