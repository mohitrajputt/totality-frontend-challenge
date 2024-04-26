import style from "./Checkout.module.css";

function Checkout({cartItem}) {

    function calculateTotalPrice(cartItem) {
        let totalPrice = 0;
        cartItem.forEach(item => {
            totalPrice += item.item.price.match(/\d+/g) * item.item.cartCount;
        });
        return totalPrice;
    }
    const total = calculateTotalPrice(cartItem)

    return(
        <section className={style.checkoutSection} >
            <div className={style.checkoutContainer} >
                <div>
                    <h1 className={style.checkoutHeading} >Checkout</h1>
                    {cartItem.map((item,index) => (
                        <div className={style.productInfo} key={index} >
                            <div className={style.productName} >
                                <h2>{item.item.title} </h2>
                                <p>{item.item.address}</p>
                            </div>
                            <div className={style.productPrice} ><span className={style.quanity} >X {item.item.cartCount} </span><span>₹ {item.item.price.match(/\d+/g) * item.item.cartCount}</span></div>
                        </div>
                    ))}
                    <div className={style.productInfo} >
                        <div className={style.total} >
                            <h3>Total</h3>
                        </div>
                        <div className={style.totalPrice} ><span>₹ {total}</span></div>
                    </div>
                    <button className={style.bookNowButton} >Book Now</button>
                </div>
            </div>
        </section>
    )
}

export default Checkout;