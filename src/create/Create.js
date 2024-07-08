import parse from "html-react-parser";
import {useState} from "react";
import camera from "./../assest/images/camera.png";

const items = [
    {text: 'Product marketing', type: "product"},
    {text: 'Growth marketing', type: "growth"},
    {text: 'Creative', type: "creative"},
    {text: 'Marketing', type: ""},
    {text: 'PR', type: ""},
];

export default function Create({content}) {
    const [active, setActive] = useState('product');

    //product, growth, creative

    return (
        <section className="create" id="create">
            <div className="create__container container">
                <div className="create__wrapper">
                    <div className="create__box">
                        <ul className="create__list">
                            {items.map((item, id) =>
                                <li key={id} className="create__item">
                                    <button
                                        className={`create__button ${item.type === active ? 'create__button_active' : ''} ${id === 3 || id === 4 ? 'create__button_disabled' : ''}`}
                                        onClick={() => setActive(item.type)}
                                        key={'item-' + id}
                                        type="button">
                                        {item.text}
                                    </button>
                                </li>
                            )}
                        </ul>
                        <h2 className="create__title">{content[active].title}</h2>
                        <p className="create__desc">{parse(content[active].desc)}</p>
                    </div>
                    <div className="create__inner">
                        <div className="create__image">
                            <img src={camera} alt="Фотоаппарат"/>
                        </div>
                        <p className="create__text">{content[active].text}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
