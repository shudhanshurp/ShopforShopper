import React from "react";
import Header from "./header";
import Navbar from "./navbar";
import Footer from "./footer";
import './cart.css'

const Cart = () =>{
    return(
        <>
        <Header />
        <Navbar />
        <div className='line'></div>
        <div className="cart">
            <div className='cart-format'>
                <div className='cart-title'>
                    <h1 className='cart-main-title'>My Cart</h1>
                    <p className='clear-cart'>clear your cart</p>
                </div>
                <div className='main-cart'>
                    {/* <div className='itemTemp' >
                        {product.length > 0 &&
                            product.map((item)=>{
                                const {id,image,title,price,rating} = item
                                return(
                                    <div className='item' key={id}>
                                        <div className='icon'><img src={image} alt={title} className='iconimg' /></div>
                                        <div>
                                            <p className='itemtitle'>{title}</p>
                                            <div className='cost-btn'>
                                                <button className='qty'>Qty:</button><button className='delete-item'>Delete</button>
                                            </div>
                                        </div>
                                        <p className='cart-price'>{price} $</p>
                                    </div>
                                )
                            })
                        }
                        {product.length === 0 && <div>loading..</div>}
                    </div> */}
                </div>
                <div className='sub-total'>
                    <h2 className='sub-total-display'>SubTotal (1 item): 123 $</h2>
                </div>
                <div className='buy-btn-container'>
                    <button className='buy'>Proceed to buy</button>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default Cart;