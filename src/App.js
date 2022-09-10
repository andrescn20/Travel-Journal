import Header from './Components/Header';
import Footer from './Components/Footer';
import Destination from './Components/Destination';
import { data } from './data';

function App() {
  const destinations = data.map((item) => {
    return <Destination key={item.title} {...item} />;
  });

  return (
    <div className='App'>
      <Header />
      <section className='destinations-list'>{destinations}</section>
      <Footer />
    </div>
  );
}

export default App;
