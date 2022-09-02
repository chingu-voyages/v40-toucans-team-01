import './App.css';
import SocialMediaBar from './components/SocialMediaBar';
import Carousel from './components/Carousel';
import Navbar from './components/NavbarComponent';
import RecipeCard from './components/RecipeCard';
import ReaderFavorites from './components/ReaderFavorites';

export default function App() {
  return (
    <div>
      <SocialMediaBar />
      <Navbar />
      <Carousel />
      <RecipeCard />
      <ReaderFavorites />
    </div>
  );
}
