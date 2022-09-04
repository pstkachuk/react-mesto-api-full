import { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthForm from './AuthForm';

function Register({onRegister}) {
  const [inputsValues, setInputsValues] = useState({
    email: '',
    password: ''
  })

  function handleChange(evt) {
    const {name, value} = evt.target
    setInputsValues({...inputsValues, [name]: value})
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onRegister(inputsValues.email, inputsValues.password);
    setInputsValues({
      email: '',
      password: ''
    })
  } 

  return(
    <AuthForm
      formName="register"
      textOnButton="Зарегистрироваться"
      onSubmit={handleSubmit}
      title="Регистрация"
    >
      <input 
          className="authorization__input" 
          type="email"
          name="email"
          id="register-email" 
          required
          placeholder="Email"
          onChange={handleChange}
          value={inputsValues.email || ''}
        />      
        <input 
          className="authorization__input" 
          type="password"
          name="password"
          id="register-password" 
          required
          placeholder="Пароль" 
          onChange={handleChange}
          value={inputsValues.password || ''}
        />
    </AuthForm>
  )
}

export default Register;