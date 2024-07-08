import parse from "html-react-parser";
import imac from "./../assest/images/imac.png";
import hands from "./../assest/images/hands.png";

export default function Info({ searchTitle, searchDesc, facilitiesTitle, facilitiesDesc }) {

  return (
    <section className="info" id="info">
      <div className="info__container container">
        <ul className="info__list">
          <li className="info__item info__item_search">
            <div className="info__image info__image_search">
              <img src={imac} alt=""/>
            </div>
            <h2 className="info__title info__title_search">{parse(searchTitle)}</h2>
            <p className="info__desc info__desc_search">{searchDesc}</p>
          </li>
          <li className="info__item info__item_facilities">
            <h2 className="info__title info__title_facilities">{parse(facilitiesTitle)}</h2>
            <p className="info__desc info__desc_facilities">{parse(facilitiesDesc)}</p>
            <div className="info__image info__image_facilities">
              <img src={hands} alt=""/>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
