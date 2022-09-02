// import Carousel from 'react-bootstrap/Carousel';
import teriyaki from '../assets/teriyaki.png';
import taco from '../assets/taco.png';
import cookies from '../assets/cookies.png';

// function IndividualIntervalsExample() {
//   return (
//     <Carousel>
//       <Carousel.Item interval={1000}>
//         <img
//           className="w-16 md:w-32 lg:w-48"
//           src={teriyaki}
//           alt="First slide"
//         />
//         <Carousel.Caption>
//           <h3>Teriyaki Chicken</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item interval={500}>
//         <img
//           className="w-16 md:w-32 lg:w-48"
//           src={taco}
//           alt="Second slide"
//         />
//         <Carousel.Caption>
//           <h3>Taco</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="w-16 md:w-32 lg:w-48"
//           src={cookies}
//           alt="Third slide"
//         />
//         <Carousel.Caption>
//           <h3>Cookies</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }

// export default IndividualIntervalsExample;

export default function Carousel() {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide relative"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner relative w-full overflow-hidden">
        <div className="carousel-item active relative float-left w-full">
          <img
            src={taco}
            className="block w-full"
            alt="Vegan Chorizo Breakfast Tacos"
          />
          <div className="carousel-caption hidden md:block absolute text-center">
            <h5 className="text-xl">Vegan Chorizo Breakfast Tacos</h5>
            {/* <p>Some representative placeholder content for the first slide.</p> */}
          </div>
        </div>
        <div className="carousel-item relative float-left w-full">
          <img
            src={teriyaki}
            className="block w-full"
            alt="Grilled Teriyaki Chicken Skewers (Quick Marinating!)"
          />
          <div className="carousel-caption hidden md:block absolute text-center">
            <h5 className="text-xl">
              Grilled Teriyaki Chicken Skewers (Quick Marinating!)
            </h5>
            {/* <p>Some representative placeholder content for the second slide.</p> */}
          </div>
        </div>
        <div className="carousel-item relative float-left w-full">
          <img
            src={cookies}
            className="block w-full"
            alt="1-Bowl Cowgirl Cookies (Vegan + Gluten-Free)"
          />
          <div className="carousel-caption hidden md:block absolute text-center">
            <h5 className="text-xl">
              1-Bowl Cowgirl Cookies (Vegan + Gluten-Free)
            </h5>
            {/* <p>Some representative placeholder content for the third slide.</p> */}
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
