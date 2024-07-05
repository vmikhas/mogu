import './style.scss';

import Header from './header/Header';
import Intro from './intro/Intro';
import Promo from './promo/Promo';
import Info from './info/Info';
import Order from './order/Order';
import Possibilities from './possibilities/Possibilities';
import Doodle from './doodle/Doodle';
import Create from './create/Create';
import Feedback from './feedback/Feedback';
import { infoContent, infoCreate, infoFeedback, infoOrder, introContent } from './constants/copyright';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro {...introContent} />
      <Promo />
      <Info {...infoContent} />
      <Order {...infoOrder} />
        <Possibilities />
      <Doodle />
      <Create {...infoCreate} />
        <Feedback {...infoFeedback} />
    </div>
  );
};

export default App;
