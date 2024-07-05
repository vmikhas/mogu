import { useState } from "react";
import { ReactComponent as LogoCat } from "./../assest/images/logos/cat.svg";
import { ReactComponent as LogoText } from "./../assest/images/logos/mogu.svg";

export default function Header() {
  const [toggleOpen, setToggleOpen] = useState(true);

  const links = [
    'О нас',
    'Кейсы',
    'Обратная связь'
  ];

    return (
      <header className="main-header">
        <div className="main-header__container container">
          <a className="main-header__logo" href="index.html">
            <div className="main-header__logo-image">
              <LogoCat/>
            </div>
            <div className="main-header__logo-text">
              <LogoText/>
            </div>
          </a>
          <button className={`main-header__toggle ${toggleOpen ? 'main-header__toggle' : 'main-header__toggle_open'}`} onClick={() => setToggleOpen(!toggleOpen)} aria-label="Открыть меню" ><span></span></button>
          <div className={`main-header__wrapper ${toggleOpen ? 'main-header__wrapper' : 'main-header__wrapper_open'}`}>
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
        </div>
      </header>
    );
};