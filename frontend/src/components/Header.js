import headerLogo from '../images/header-logo.svg';
import { Switch, Route, Link } from 'react-router-dom';
import { useState } from 'react';

function Header({userEmail, onSignOut, loggedIn}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);    //состояние меню в хэдере

  function handleMenuOpen() {     //открыть/закрыть меню в мобильной версии
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    } else {
      setIsMobileMenuOpen(true);
    }
  }

  return(
    <header className={`header ${!loggedIn && 'header_row-direction'}`}>
      <div className="header__menu-container">
        <img src={headerLogo} alt="Логотип Место" className="header__logo" />
        <button 
          onClick={handleMenuOpen} 
          className={`header__menu-button ${isMobileMenuOpen && 'header__menu-button_status_opened'} ${!loggedIn && 'header__menu-button_status_hide'}`}>
        </button>
      </div>
      <Switch>
        <Route path='/signin'>
          <Link to='/signup' className="header__link">
            Регистрация
          </Link>
        </Route>
        <Route path='/signup'>
          <Link to='/signin' className="header__link">
            Войти
          </Link>
        </Route>
        <Route path='/'>
          <div className={`header__email-container ${isMobileMenuOpen && 'header__email-container_opened'}`}>
            <span className="header__email">{userEmail}</span>
            <Link 
              to='/signin' 
              className="header__link header__link_exit"
              onClick={onSignOut}>
             Выйти
            </Link>
          </div>
        </Route>
      </Switch>
    </header>
  )
}

export default Header;