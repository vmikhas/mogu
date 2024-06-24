import { ReactComponent as LogoCat } from "./../assest/images/logos/cat.svg";
import { ReactComponent as LogoText } from "./../assest/images/logos/mogu.svg";

export default function Header() {

    return (
      <header className="main-header">
        <div className="main-header__container container">
          <a className="main-header__logo logo" href="index.html">
            <LogoCat />
						<LogoText />
          </a>
          <nav className="main-nav">
            <ul className="main-nav__list">
              <li className="main-nav__item">
                <a className="main-nav__link" href="#1" aria-current="page">О нас</a>
              </li>
              <li className="main-nav__item">
                <a className="main-nav__link" href="#1">Кейсы</a>
              </li>
              <li className="main-nav__item">
                <a className="main-nav__link" href="#1">Обратная связь</a>
              </li>
            </ul>
          </nav>
          <a className="main-header__button button" href="#1">Войти</a>
        </div>
      </header>
    );
  }