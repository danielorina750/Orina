
import './App.css';
import Footer from './Footer';
import MainPage from './MainPage';
import Navbar from './Navbar';

import StickyNavbar from './StickyNavbar';
import Timeline from './Timelinine';

function App() {
  return (
    <div className="App">
      < Navbar/>
      <StickyNavbar/>
      <MainPage/>
      <Timeline/>
      <Footer/>
    </div>
  );
}

export default App;
