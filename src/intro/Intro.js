import avatar_1 from "./../assest/images/avatar_1.png";
import avatar_2 from "./../assest/images/avatar_2.png";
import avatar_3 from "./../assest/images/avatar_3.png";
import avatar_4 from "./../assest/images/avatar_4.png";
import plus from "./../assest/images/plus.png";

export default function Intro() {
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
				<div className="intro__tracker tracker">
					<h1 className="tracker__title">Таск-трекер для&nbsp;креативных команд</h1>
					<p className="tracker__desc">Создавайте доски, приглашайте коллег и партнеров, работайте совместно над задачами!</p>
					<ul className="tracker__list">
						<li className="tracker__item">Бесплатно</li>
						<li className="tracker__item">Без привязки карты</li>
						<li className="tracker__item">2000+ пользователей</li>
					</ul>
					<form className="tracker__form" >
						<input 
							className="tracker__input"
							type="email"
							name="e-mail"
							placeholder="Электронная почта"
							required />
						<button className="tracker__button">Начать <span>⟶</span></button>
					</form>
				</div>
				<div className="intro__user user">
					<p className="user__text">Совместная работа</p>
					<p className="user__desc user__desc--colleague">Это ваш милейший коллега</p>
					<ul className="user__list">
						{icons.map((icon) => <li className="user__item"><a className="user__link" href="#1"><img className="user__icon" src={icon} alt=""/></a></li>)}
					</ul>
					<p className="user__desc user__desc--me">А это вы</p>
				</div>
			</div>
    </section>
  );
}
