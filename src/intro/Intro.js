import parse from "html-react-parser";
import avatar_1 from "./../assest/images/avatar_1.png";
import avatar_2 from "./../assest/images/avatar_2.png";
import avatar_3 from "./../assest/images/avatar_3.png";
import avatar_4 from "./../assest/images/avatar_4.png";
import plus from "./../assest/images/plus.png";

export default function Intro({ title, desc, userText, userCollegue, userDesc }) {
	const tags = [
		'Бесплатно',
		'Без привязки карты',
		'2000+ пользователей'
	];

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
					<p className="intro__desc">{desc}</p>
					<ul className="intro__list">
						{tags.map((tag) => <li className="intro__item">{tag}</li>)}
					</ul>
					<form className="intro__form" action="#" method="POST">
						<input 
							className="intro__input"
							type="email"
							name="e-mail"
							placeholder="Электронная почта"
							required />
						<button className="intro__button">Начать <span>⟶</span></button>
					</form>
				</div>
				<div className="intro__wrapper">
					<p className="intro__user-text">{userText}</p>
					<p className="intro__user-desc intro__user-desc_colleague">{userCollegue}</p>
					<ul className="intro__user-list">
						{icons.map((icon, id) => <li className="intro__user-item" key={'item-'+id}><a className="intro__user-link" href="#1"><img className="intro__user-icon" src={icon} alt=""/></a></li>)}
					</ul>
					<p className="intro__user-desc intro__user-desc_me">{userDesc}</p>
				</div>
			</div>
    </section>
  );
};
