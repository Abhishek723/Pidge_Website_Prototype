
import  Head  from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/navbar';
import Banner from '../components/banner';
import Product from '../components/product';
import Work from '../components/work';
import Review from '../components/review';
import Motive from '../components/motive';
import Blog from '../components/blogs';
import About from '../components/about';
import Footer from '../components/footer';
import Acheivements from '../components/acheivements';
function Home() {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Product></Product>
            <Acheivements></Acheivements>
            <Work></Work>
            <Review></Review>
            <Motive></Motive>
            <Blog></Blog>
            <About></About>
            <Footer></Footer>
            
            
        
        </div>
    )
  }
  
  export default Home;
  