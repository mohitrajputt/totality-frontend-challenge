import { useEffect, useState } from "react";
import style from "../../components/main/propertyCard/PropertyCard.module.css";
import Checkout from "./Checkout";
import { collection, onSnapshot } from "firebase/firestore";
import {db} from "../../Firebaseconfig";

function Cart() {

    const [cartItem, setCartItem] = useState([]);

    useEffect(() => {
        onSnapshot(collection(db, "cart"), (snapShot) => {
            const cart = snapShot.docs.map((doc) => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            })
            setCartItem(cart);
        })
    },[]);

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
                        <img src={property.item.img} width="100%" height="100%" />
                    </div>
                    <div className={style.propertyDetailsContainer} >
                        <div className={style.propertyDetails} >
                            <div><i class="fa-regular fa-compass"></i> {property.item.facing}</div>
                            <div><i class="fa-regular fa-building"></i> {property.item.apartmenttype}</div>
                            <div><i class="fa-solid fa-bath"></i> {property.item.bathrooms}</div>
                            <div><i class="fa-solid fa-square-parking"></i> {property.item.parking}</div>
                        </div>
                        <div className={style.propertyQuickLinks} >
                            <p>₹{property.item.price}</p>
                            <button className={style.cartButton} id="removeButton" >Remove From Cart</button>
                        </div >
                    </div>
                </div>
                <div className={style.cartCountContainer} >
                    <i class="fa-solid fa-circle-minus"></i>
                    <span>1</span>
                    <i class="fa-solid fa-circle-plus"></i>
                </div>
            </div>
            ))}
        </section>
        <Checkout/>
        </div>
    )
}

export default Cart;