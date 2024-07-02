import doodle from "./../assest/images/doodle.png";

export default function Doodle() {

  return (
    <section className="doodle">
      <div className="doodle__container container">
        <div>
          <img className="doodle__image" src={doodle} alt="" />
        </div>
      </div>
    </section>
  );
};