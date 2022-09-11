import './App.css';
import SocialMediaBar from './components/SocialMediaBar';
import Carousel from './components/Carousel';
import Navbar from './components/NavbarComponent';
import ReaderFavorites from './components/ReaderFavorites';
import RecipeCard from './components/RecipeRoundups';
import FooterSocialMedia from './components/FooterSocialMedia';
import Footer from './components/Footer';
import Main from './components/Main';
import MegaWrapper from './components/MegaWrapper';
import ExploreRecipesWrapper from './components/ExploreRecipesWrapper';
import ExploreRecipes from './components/ExploreRecipes';
import ShopWrapper from './components/ShopWrapper';
import Shop from './components/Shop';

export default function App() {
  return (
    <div>
      <SocialMediaBar />
      <Navbar />
      <Main>
        <Carousel />
        <MegaWrapper>
          <ReaderFavorites />
          <RecipeCard />
        </MegaWrapper>
        <ExploreRecipesWrapper>
          <ExploreRecipes />
        </ExploreRecipesWrapper>
        <ShopWrapper>
          <Shop />
        </ShopWrapper>
      </Main>
      <FooterSocialMedia />
      <Footer />
    </div>
  );
}
