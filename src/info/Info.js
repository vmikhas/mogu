import imac from "./../assest/images/imac.png";
import hands from "./../assest/images/hands.png";

export default function Info() {

  return (
    <section className="info">
      <div className="info__container container">
        <ul className="info__list">
          <li className="info__item info__item--search">
            <img className="info__image info__image--search" src={imac} alt=""/>
            <h2 className="info__title info__title--search">Вся информация как на&nbsp;ладони</h2>
            <p className="info__desc info__desc--search">единая строка поиска для всех проектов - где бы ни была задача, вы быстро ее найдете</p>
          </li>
          <li className="info__item info__item--facilities">
            <h2 className="info__title info__title--facilities">Ничто не мешает полету&nbsp;мысли</h2>
            <p className="info__desc info__desc--facilities">фиксируйте новые идеи в один клик, прикрепляйте файлы и подробные описания сути задач</p>
            <img className="info__image" src={hands} alt=""/>
          </li>
        </ul>
      </div>
    </section>
  );
};
