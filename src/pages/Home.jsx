import Navbar from '../components/Navbar/navbar'
import Hero from '../components/Hero'
import HoomeProduct from '../components/HomeProduct/HomeProduct'
import About from '../components/About/About'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <HoomeProduct />
      <Footer />
    </div>
  )
}

export default Home
