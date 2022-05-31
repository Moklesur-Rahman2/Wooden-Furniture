import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Faq from './components/Faq/Faq';

function App() {
  return (
    <div className="container">
      <Header></Header>
      <Shop></Shop>
      <Faq></Faq>
    </div>
  );
}

export default App;
