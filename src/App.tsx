import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import Navbar from "./components/Navbar.tsx";
import Jumbotron from "./components/Jumbotron.tsx";
import Card from "./components/Card.tsx";
import Footer from "./components/Footer.tsx";
import {BlogItem} from "./models/blogItem.ts";

function App() {
    const blogItems: BlogItem[] = [
        {
            id: 1,
            category: "Recipes",
            title: "Refreshing Lemonade",
            description: "On a hot summer day, nothing beats a glass of refreshing lemonade. This simple recipe is sure to quench your thirst!",
            date: "Nov 12",
            img: "https://i.ibb.co/713w7Gk/e752eb-1.jpg"
        },
        {
            id: 2,
            category: "Nature",
            title: "Beach Day Essentials",
            description: "Heading to the beach? Here are some essentials you don't want to forget to pack!",
            date: "Nov 11",
            img: "https://i.ibb.co/713w7Gk/e752eb-1.jpg"
        }
    ];

    const cardComponents = blogItems.map((blogItem) => {
        return <Card blogItem={blogItem} key={blogItem.id}/>
    });

  return (
    <>
        <div className="container">
            <Navbar/>
            <Jumbotron/>

            {cardComponents}

            <Footer/>
        </div>
    </>
  )
}

export default App
