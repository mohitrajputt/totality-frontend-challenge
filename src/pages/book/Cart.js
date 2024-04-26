import style from "../../components/main/propertyCard/PropertyCard.module.css";
import Checkout from "./Checkout";
import loading from "../../assets/24544990.jpg";
import { useValue } from "../../ContextApi";

function Cart() {

    const {removeCart, cartCountDicrease, cartCountIncrease, cartItem} = useValue();

    return(
        <div className={style.bookMang} >
        <section className={style.cartSection} >
            {cartItem.map((property, index) => ( 
            <div className={style.propertyCard} key={index} >
                <div className={style.propertyHead} >
                    <div className={style.propertyHeading} >
                        <h3>{property.item.title}</h3>
                    </div>
                    <div className={style.propertySubHeading} >
                        <p>{property.item.address}</p>
                    </div>
                </div>
                <div className={style.propertyBody} >
                    <div className={style.propertyImg} >
                        <img src={property.item.img} alt={loading} width="100%" height="100%" />
                    </div>
                    <div className={style.propertyDetailsContainer} >
                        <div className={style.propertyDetails} >
                            <div><i className="fa-regular fa-compass"></i> {property.item.facing}</div>
                            <div><i className="fa-regular fa-building"></i> {property.item.apartmenttype}</div>
                            <div><i className="fa-solid fa-bath"></i> {property.item.bathrooms}</div>
                            <div><i className="fa-solid fa-square-parking"></i> {property.item.parking}</div>
                        </div>
                        <div className={style.propertyQuickLinks} >
                            <p>₹{property.item.price}</p>
                            <button className={style.cartButton} id="removeButton" onClick={() => removeCart(property.id)} >Remove From Cart</button>
                        </div >
                    </div>
                </div>
                <div className={style.cartCountContainer} >
                    <i className="fa-solid fa-circle-minus" onClick={() => (cartCountDicrease(property.id))} ></i>
                    <span>{property.item.cartCount}</span>
                    <i className="fa-solid fa-circle-plus" onClick={() => (cartCountIncrease(property.id))}></i>
                </div>
            </div>
            ))}
        </section>
        <Checkout cartItem={cartItem} />
        </div>
    )
}

export default Cart;