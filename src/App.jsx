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
      </Main>
      <FooterSocialMedia />
      <Footer />
    </div>
  );
}
