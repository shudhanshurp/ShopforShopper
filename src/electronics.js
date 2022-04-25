import React, {useState, useEffect} from 'react';
import { Rating } from 'react-simple-star-rating';
import Header from './header';
import Navbar from './navbar';
import Footer from './footer';
import './tranding.css'

const Electronics = () =>{
    const [product,setProduct] = useState([]);
    const fetchAd = async () =>{
        const response = await fetch('https://fakestoreapi.com/products/category/electronics')
        const data = await response.json()
        setProduct(data);
    }
    useEffect(()=>{
        fetchAd()
    },[])
    return(
        <div>
            <Header />
          <Navbar />
            <div className='line'></div>
            <div className='tranding'>
                <div className='itemTemp' >
                    {product.length > 0 &&
                        product.map((item)=>{
                            const {id,image,title,price,rating} = item
                            return(
                                <div className='item' key={id}>
                                    <div className='icon'><img src={image} alt={title} className='iconimg' /></div>
                                    <p className='itemtitle'>{title}</p>
                                    <p className='price'>{price} $</p>
                                    <span className='rate'><Rating ratingValue={rating.rate*25} /><p>{rating.count}</p></span>
                                    <div className='cost-btn'><button className='cartadd'>Add to Cart</button><button className='buy'>Buy Now</button></div>
                                </div>
                            )
                        })
                    }
                    {product.length === 0 && <div>loading..</div>}
                </div>
            </div>
            )
            <Footer />
        </div>
    )
}

export default Electronics;