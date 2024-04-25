import style from "./Checkout.module.css";

function Checkout() {
    return(
        <section className={style.checkoutSection} >
            <div className={style.checkoutContainer} >
                <div>
                    <h1 className={style.checkoutHeading} >Checkout</h1>
                    <div className={style.productInfo} >
                        <div className={style.productName} >
                            <h2>Product 1</h2>
                            <p>Information about project</p>
                        </div>
                        <div className={style.productPrice} ><span>$200</span></div>
                    </div>
                    <div className={style.productInfo} >
                        <div className={style.total} >
                            <h3>Total</h3>
                        </div>
                        <div className={style.totalPrice} ><span>$200</span></div>
                    </div>
                    <button className={style.bookNowButton} >Book Now</button>
                </div>
            </div>
        </section>
    )
}

export default Checkout;