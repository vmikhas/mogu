import parse from "html-react-parser";
import hands_1 from "./../assest/images/hands_1.png"

export default function Possibilities() {

	const cards = [
		{ title: 'Совместная<br /> работа на одной доске', desc: 'приглашайте коллег, бизнес-партнеров и заказчиков' },
		{ url: hands_1 },
		{ title: 'Настройка под вас ', desc: 'устанавливайте персональный фон для&nbsp;каждого проекта' }
	];

  return (
    <section className="possibilities">
      <div className="possibilities__container container">
        <ul className="possibilities__list">
						{cards.map((card,id) => <li className={`possibilities__item possibilities__item_${id}`} key={'item-'+id}>
							{card.title && (<h2 className="possibilities__title">{parse(card.title)}</h2>)}
							{card.desc && (<p className="possibilities__desc">{parse(card.desc)}</p>)}
							{card.url && (
								<div className="possibilities__image">
									<img src={card.url} alt="" />
								</div>
							)}
						</li>)}
        </ul>
      </div>
    </section>
  );
};
