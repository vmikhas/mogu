import camera from "./../assest/images/camera.png";

export default function Create({ title, desc, text }) {
  const items = [
    'Product marketing',
    'Growth marketing',
    'Creative',
    'Marketing',
    'PR'
  ];

  return (
    <section className="create">
      <div className="create__container container">
        <div className="create__wrapper">
          <div className="create__box">
            <ul className="create__list">
              {items.map((item,id) =>
                <li className="create__item">
                  <button className={`create__button create__button_${id}`} key={'item-'+id} type="button">{item}</button>
                </li>
              )}
            </ul>
            <h2 className="create__title">{title}</h2>
            <p className="create__desc">{desc}</p>
          </div>
          <div className="create__inner">
            <img className="create__image" src={camera} alt="" />
            <p className="create__text">{text}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
