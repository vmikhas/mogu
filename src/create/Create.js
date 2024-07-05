import parse from "html-react-parser";
import { useState } from "react";
import camera from "./../assest/images/camera.png";

export default function Create({ title, desc, text }) {
	const [active, setActive] = useState(0);
	
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
                  <button className={`create__button ${id === active ? 'create__button_active' : ''} ${id === 3 || id === 4 ? 'create__button_disabled' : ''}`} key={'item-'+id} type="button" onClick={() => setActive(id)}>{item}</button>
                </li>
              )}
            </ul>
            <h2 className="create__title">{title}</h2>
            <p className="create__desc">{parse(desc)}</p>
          </div>
          <div className="create__inner">
            <div className="create__image">
							<img src={camera} alt="" />
						</div>
            <p className="create__text">{text}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
