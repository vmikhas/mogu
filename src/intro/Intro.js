import parse from "html-react-parser";
import avatar_1 from "./../assest/images/avatar_1.png";
import avatar_2 from "./../assest/images/avatar_2.png";
import avatar_3 from "./../assest/images/avatar_3.png";
import avatar_4 from "./../assest/images/avatar_4.png";
import plus from "./../assest/images/plus.png";
import {ReactComponent as Arrow} from "./../assest/images/arrow.svg";
import {useEffect, useState} from "react";
import classNames from "classnames";

export default function Intro({title, desc, userText, userCollegue, userDesc, tags}) {
    // const  = setTimeout(appearanceIcons, 5000);

    const [isActive, setIsActive] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => setIsActive(true), 3000);
        return () => clearTimeout(timer);
    }, []);

    const icons = [
        avatar_1,
        avatar_2,
        avatar_3,
        avatar_4,
        plus
    ];

    return (
        <section className="intro">
            <div className="intro__container container">
                <div className="intro__tracker">
                    <h1 className="intro__title">{parse(title)}</h1>
                    <p className="intro__desc">{parse(desc)}</p>
                    <ul className="intro__list">
                        {tags.map((tag, id) => <li className={`intro__item intro__item_${id}`}
                                                   key={'item-' + id}>{tag}</li>)}
                    </ul>
                    <form className="intro__form" action="#" method="POST">
                        <input
                            className="intro__input"
                            type="email"
                            name="e-mail"
                            placeholder="Электронная почта"
                            required/>
                        <button className="intro__button" type="button">Начать <span>⟶</span></button>
                    </form>
                </div>
                <div className="intro__wrapper">
                    <p className="intro__user-text">{userText}</p>
                    <p className={classNames("intro__user-desc intro__user-desc_colleague", {'active': isActive})}>{userCollegue} </p>
                    <ul className="intro__user-list">
                        {icons.map((icon, id) =>
                            <li className={classNames(`intro__user-item intro__user-item_${id}`, {'active': isActive})} key={'item-' + id}>
                                <a className="intro__user-link" href="#1">
                                    <img className="intro__user-icon" src={icon} alt=""/>
                                </a>
                            </li>)}
                    </ul>
                    <p className={classNames("intro__user-desc intro__user-desc_me", {'active': isActive})}>{userDesc} </p>
                </div>
                <a className="intro__button-bottom" href="#promo" aria-label="Перейти ниже">
                    <div className="intro__image"><Arrow/></div>
                </a>
            </div>
        </section>
    );
};

// intro__user-item
// intro__user-desc_me
// intro__user-desc_colleague