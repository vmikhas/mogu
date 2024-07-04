import parse from "html-react-parser";
import folder from "./../assest/images/folder.png";

export default function Order({ title, desc }) {
  const items = [
    'обновляйте статус задачи',
    'следите за сроками дедлайнов',
    'отправляйте завершенные задачи в архив'
  ];

  return (
    <section className="order">
      <div className="order__container container">
        <div className="order__wrapper">
          <h2 className="order__title">{title}</h2>
          <p className="order__desc">{parse(desc)}</p>
          <div className="order__image">
            <img src={folder} alt="" />
          </div>
          <ul className="order__list">
            {items.map((item, id) =>
              <li className={`order__item order__item_${id}`} key={'item-'+id}>{item}</li>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};
