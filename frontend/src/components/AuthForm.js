import { Link } from "react-router-dom";

function AuthForm({children, formName, textOnButton, onSubmit, title}) {
  return (
    <div className="authorization">
      <h2 className="authorization__title">{title}</h2>
      <form 
        className="authorization__form" 
        name={formName} 
        noValidate
        onSubmit={onSubmit}>
        {children}
        <button 
          className="authorization__submit-button" 
          type="submit">
          {textOnButton}
        </button>
      </form>
      {formName === 'register' && 
        <Link to='/signin' className="authorization__link">
          Уже зарегистрированны? Войти
        </Link>
        }
    </div>
  )
}

export default AuthForm;