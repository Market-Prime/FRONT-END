import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Shop.css'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/navbar'
import bg from '../assets/Rectangle 354.png'
import Item from '../components/Item/item'
import productList from '../assets/data'
import corporate from '../assets/Corporate.png'
import casual from '../assets/Casual.png'
import shoes from '../assets/Shoes.png'
import men from '../assets/Men.png'
import women from '../assets/Women.png'
import shoe from '../assets/shoes-top.png'
import jewel from '../assets/jewel.png'
import glasses from '../assets/glasses.png'
import bags from '../assets/bags.png'

const Shop = () => {
  return (
    <div>
        <motion.div
       initial={{scaleY: 0}}
       animate={{scaleY:1}}
        exit={{scaleY:0}}
        transition={{duration: 0.5}}>
      <Navbar /> 
      <div className="wrapper">
          <div className="wrapper-text">
            <h1>Never wear a <br></br> boring outfit.</h1>
            <p>Shop with Market Prime for an outfit that fits.</p>
          </div>
          <div className="wrapper-img">
            <img src={bg} alt="" />
          </div>
      </div>

    <div className="best-seller">
        <h1>Best Sellers</h1>
            <div className="items">
                {productList.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price} emoji={item.emoji}/>
                })}
            </div>
        </div>   

    <div className="explore">
      <h1>Explore</h1>
      <div className="images">
        <div className="img1">
        <img src={corporate} alt="" />
        <p>Corporate Wears</p>
        </div>
        <div className="img2">
        <img src={casual} alt="" />
        <p>Casual Wears</p>
        </div>
        <div className="img3">
        <img src={shoes} alt="" />
        <p>Shoes & Accessories</p>
        </div>
      </div>
      </div>   

      <div className="top-deals">
        <h1>Top Deals</h1>
        <div className="pics">
          <div className="pic1">
            <img src={corporate} alt="" />
            <p>Men's Wear</p>
          </div>
          <div className="pic2">
          <img src={women} alt="" />
          <p>Women's wear</p>
          </div>
          <div className="pic3">
          <img src={shoe} alt="" />
          <p>Shoes</p>
          </div>
          <div className="pic4">
          <img src={bags} alt="" />
          <p>Bags & Belts</p>
          </div>
          <div className="pic5">
          <img src={jewel} alt="" />
          <p>Jewelries</p>
          </div>
          <div className="pic6">
          <img src={glasses} alt="" />
          <p>Glasses</p>
          </div>
        </div>

   
      </div>
      <div className="buttons">
        <div className="btn1">
        <button>Virtual Try-On</button>

        </div>
        <div className="btn2">
        <Link to="/Cart"><button className='bn2'>Proceed To Cart</button></Link>

        </div>
        </div>

        <Footer />
        </motion.div>
    </div>
  )
}

export default Shop
