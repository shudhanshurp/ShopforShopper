import React, { useEffect, useState }  from "react";
import { Rating } from 'react-simple-star-rating';
import './tranding.css'

const Tranding = () =>{
    const [product,setProduct] = useState([]);
    const fetchAd = async () =>{
        const response = await fetch('https://fakestoreapi.com/products?limit=15')
        const data = await response.json()
        setProduct(data);
    }
    useEffect(()=>{
        fetchAd()
    },[])
    return(
        <div className='tranding'>
            <h1 className='title'> TRANDING </h1>
            <div className='itemTemp' style={{color: "black"}}>
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
}

export default Tranding;