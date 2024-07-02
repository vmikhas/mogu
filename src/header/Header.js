import { ReactComponent as LogoCat } from "./../assest/images/logos/cat.svg";
import { ReactComponent as LogoText } from "./../assest/images/logos/mogu.svg";

export default function Header() {
  const links = [
    'О нас',
    'Кейсы',
    'Обратная связь'
  ];

    return (
      <header className="main-header">
        <div className="main-header__container container">
          <a className="main-header__logo" href="index.html">
            <LogoCat />
						<LogoText />
          </a>
          <nav className="main-header__nav">
            <ul className="main-header__list">
              {links.map((link) => 
                <li className="main-header__item">
                  <a className="main-header__link" href="#1">{link}</a>
                </li>
              )}
            </ul>
          </nav>
          <a className="main-header__button" href="#1">Войти</a>
        </div>
      </header>
    );
  };