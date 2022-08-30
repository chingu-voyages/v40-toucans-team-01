
import './App.css';
import SocialMediaBar from './components/SocialMediaBar'
import Carousel from './components/Carousel' ;
import Navbar from './components/NavbarComponent'
import RecipeCard from './components/RecipeCard';
export default function App() {

    return(
        <div>
            <SocialMediaBar/>
            <Navbar />
            <Carousel/>
            <RecipeCard />
        </div>
    )

}

