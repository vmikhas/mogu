import Picture from "../constants/Picture";
import {doodle} from "../constants/copyright";

export default function Doodle() {

  return (
    <section className="doodle">
      <div className="doodle__container container">
        <div className="doodle__image">
          <Picture {...doodle.image}/>
        </div>
      </div>
    </section>
  );
};
