
import './App.css';
import Carousel from './components/Carousel' ;
import Navbar from './components/NavbarComponent'
import RecipeCard from './components/RecipeCard';

export default function App() {

    return(
        <div>
            <Navbar />
            <Carousel/>
            <RecipeCard />
        </div>
    )

}

