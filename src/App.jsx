import About from "./components/About"
import Contact from "./components/Contact"
import Experiences from "./components/Experiences"
import Footer from "./components/Footer"
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import SocialLinks from "./components/SocialLinks"
import MyFavoriteMovies from "./components/MyFavoriteMovies";

function App() {
  return (
    <div>
    <NavBar />
    <Home />
    <About />
    <Experiences />
    <SocialLinks />
    <MyFavoriteMovies />
    <Contact />
    <Footer />
    </div>
  )
}

export default App
