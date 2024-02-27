import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import Navbar from "./components/Navbar.tsx";
import Jumbotron from "./components/Jumbotron.tsx";
import Card from "./components/Card.tsx";
import Footer from "./components/Footer.tsx";

function App() {

  return (
    <>
        <div className="container">
            <Navbar/>
            <Jumbotron/>
            <Card/>
            <Footer/>
        </div>
    </>
  )
}

export default App
