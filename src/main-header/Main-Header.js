import {useState} from "react";
import {ReactComponent as LogoCat} from "./../assest/images/logos/cat.svg";
import {ReactComponent as LogoText} from "./../assest/images/logos/mogu.svg";
import classNames from "classnames";

export default function MainHeader() {
    const [toggleOpen, setToggleOpen] = useState(false);
    const toggleHandled = () => {
        document.body.classList.toggle('no-scroll');
        setToggleOpen(p => !p);
    };

    const links = [
        {
            href: '#info',
            text: 'О нас'
        },
        {
            href: '#create',
            text: 'Кейсы'
        },
        {
            href: '#feedback',
            text: 'Обратная связь'
        }
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
                <button className={classNames(`main-header__toggle`, {
                    'main-header__toggle_open': toggleOpen,
                })} onClick={toggleHandled} aria-label="Открыть меню"><span></span></button>
                <div className={classNames(`main-header__wrapper`, {
                    'main-header__wrapper_open': toggleOpen
                })}>
                    <nav className="main-header__nav">
                        <ul className="main-header__list">
                            {links.map((link, id) =>
                                <li className={`main-header__item main-header__item_${id}`} key={'item-' + id}>
                                    <a className="main-header__link" href={link.href}>{link.text}</a>
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