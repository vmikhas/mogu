import image_m from "./../assest/images/image_m.png";
import image_o from "./../assest/images/image_o.png";
import image_g from "./../assest/images/image_g.png";
import image_u from "./../assest/images/image_u.png";

export default function Promo () {
  const images = [
  	image_m,
  	image_o,
  	image_g,
  	image_u
  ];

    // const a = 1;
    // const b = `item-${a}`;

  return (
    <section className="promo">
      <div className="promo__container">
        <ul className="promo__list">
	      {images.map((image,id) => <li className={`promo__item promo__item--${id}`} key={'item-'+id}><img className="promo__image" src={image} alt=""/></li>)}
	    </ul>
      </div>
    </section>
  );
}