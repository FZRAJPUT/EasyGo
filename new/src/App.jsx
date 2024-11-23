import './App.css';
import Home from './components/Upload'
import Navbars from './components/Navbars'
import Download from './components/Download';
import Feedback from './components/Feedback';
import Footer from './components/Footer';
import AllMaps from './components/AllMAps';

const App = () => {
  return (
    <>
      <Navbars />
      <Home />
      <Download />
      <Feedback />
      <AllMaps />
      <Footer />
    </>
  )
}

export default App