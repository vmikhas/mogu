import './style.scss';

import Header from './header/Header';
import Intro from './intro/Intro';
import Promo from './promo/Promo';
import Info from './info/Info';
import Order from './order/Order';
import Possibilities from './possibilities/Possibilities';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Promo />
      <Info />
      <Order />
			<Possibilities />
    </div>
  );
};

export default App;
