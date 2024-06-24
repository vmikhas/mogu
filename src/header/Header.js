import { ReactComponent as LogoCat } from "./../assest/images/logos/cat.svg";

export default function Header() {
    
    return (
      <header className="main-header">
        <div className="main-header__container container">
          <a className="main-header__logo logo">
            {/* <svg className="logo__image" width={64} height={64} aria-hidden="true" focusable="false">
              <use href="assest/images/logos/cat.svg"></use>
            </svg>
            <svg className="logo__text" width={78} height={24} aria-hidden="true" focusable="false">
              <use href="assest/images/logos/text.svg"></use>
            </svg> */}
            <LogoCat />
          </a>
          <nav className="main-nav">
            <ul className="main-nav__list">
              <li className="main-nav__item">
                <a className="main-nav__link" href="#" aria-current="page">О нас</a>
              </li>
              <li className="main-nav__item">
                <a className="main-nav__link" href="#">Кейсы</a>
              </li>
              <li className="main-nav__item">
                <a className="main-nav__link" href="#">Обратная связь</a>
              </li>
            </ul>
          </nav>
          <a className="main-header__button button" href="#">Войти</a>
        </div>
      </header>
    );
  }