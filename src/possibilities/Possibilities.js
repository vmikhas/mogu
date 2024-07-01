import { Fragment } from "react";

const possibilitiesInfo = [
  { id: 1, title: 'Совместная работа на одной доске', desc: 'приглашайте коллег, бизнес-партнеров и заказчиков' },
  { id: 2 },
  { id: 3, title: 'Настройка под вас ', desc: 'устанавливайте персональный фон для каждого проекта' }
];

export default function Possibilities() {

  return (
    <section className="possibilities">
      <div className="possibilities__container container">
        <ul className="possibilities__list">
          possibilitiesInfo.map((0=>(<li className={`possibilities__item possibilities__item--${id}`} key={'item-'+id}>
              <PossibilitieTitle title={possibilitiesInfo.title} />
              <PossibilitieDesc desc={possibilitiesInfo.desc} />
          </li>
        </ul>
      </div>
    </section>
  );

  function PossibilitieTitle ({ title }) {
    return <h2>{title}</h2>
  }

  function PossibilitieDesc ({ desc }) {
    return <p>{desc}</p>
  }
};