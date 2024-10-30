import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {
  return (<AppLayout />);
}

const AppLayout = () => {
  return (
    <div className='app'>
      <Header />
      <Body />
      <Footer />
    </div >
  );
};


export default App;
