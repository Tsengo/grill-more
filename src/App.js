import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';
import About from './components/aboutUs/About';

function App() {
  return (
    <div className="App">
      <div className='header'>
        <Header />
      </div>
      <div>
        <Main />
      </div>
      <div className='aboutUs'>
        <About />
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
