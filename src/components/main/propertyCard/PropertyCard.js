import style from "./PropertyCard.module.css";
import loading from "../../../assets/24544990.jpg"
import { useValue } from "../../../ContextApi";

function PropertyCard() {

    const {addCart, filteredData} = useValue();

    return(
        <section className={style.propertySection} > 
            {filteredData.map((property, index) => ( 
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
                        <img src={property.img} alt={loading} width="100%" height="100%" />
                    </div>
                    <div className={style.propertyDetailsContainer} >
                        <div className={style.propertyDetails} >
                            <div><i className="fa-regular fa-compass"></i> {property.facing}</div>
                            <div><i className="fa-regular fa-building"></i> {property.apartmenttype}</div>
                            <div><i className="fa-solid fa-bath"></i> {property.bathrooms}</div>
                            <div><i className="fa-solid fa-square-parking"></i> {property.parking}</div>
                        </div>
                        <div className={style.propertyQuickLinks} >
                            <p>₹{property.price}</p>
                            <button className={style.cartButton} id="addButton" onClick={() => addCart(property)} >Add To Cart</button>
                        </div >
                    </div>
                </div>
            </div>
            ))}
        </section>
    )
}

export default PropertyCard;