import './App.css';
import SocialMediaBar from './components/SocialMediaBar';
import Carousel from './components/Carousel';
import Navbar from './components/NavbarComponent';
import ReaderFavorites from './components/ReaderFavorites';
import FooterSocialMedia from './components/FooterSocialMedia';
import Footer from './components/Footer';


export default function App() {
  return (
    <div>
      <SocialMediaBar />
      <Navbar />
      <Carousel />
      <ReaderFavorites />
      <FooterSocialMedia />
      <Footer />
    </div>
  );
}
