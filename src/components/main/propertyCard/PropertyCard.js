import style from "./PropertyCard.module.css";
import {propertyrentaldata} from "../../../db/db1";
import { useDispatch, useSelector } from "react-redux";
import { actions, cartSelector } from "../../../redux/reducer";

function PropertyCard() {

    const disptach = useDispatch();
    const cart = useSelector(cartSelector);

    return(
        <section className={style.propertySection} > 
            {propertyrentaldata.map((property, index) => ( 
            <div className={style.propertyCard} key={index} >
                <div className={style.propertyHead} >
                    <div className={style.propertyHeading} >
                        <h3>{property.title}</h3>
                    </div>
                    <div className={style.propertySubHeading} >
                        <p>{property.address}</p>
                    </div>
                </div>
                <div className={style.propertyBody} >
                    <div className={style.propertyImg} >
                        <img src={property.img} width="100%" height="100%" />
                    </div>
                    <div className={style.propertyDetailsContainer} >
                        <div className={style.propertyDetails} >
                            <div><i class="fa-regular fa-compass"></i> {property.facing}</div>
                            <div><i class="fa-regular fa-building"></i> {property.apartmenttype}</div>
                            <div><i class="fa-solid fa-bath"></i> {property.bathrooms}</div>
                            <div><i class="fa-solid fa-square-parking"></i> {property.parking}</div>
                        </div>
                        <div className={style.propertyQuickLinks} >
                            <p>₹{property.price}</p>
                            <button className={style.cartButton} id="addButton" onClick={() => disptach(actions.add(property))} >Add To Cart</button>
                        </div >
                    </div>
                </div>
            </div>
            ))}
        </section>
    )
}

export default PropertyCard;