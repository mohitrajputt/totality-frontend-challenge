import style from "./PropertyCard.module.css";
import {propertyrentaldata} from "../../../db/db1";
import loading from "../../../assets/24544990.jpg"
import { useValue } from "../../../ContextApi";
import { useCallback, useEffect, useState } from "react";

function PropertyCard() {

    const {addCart, searchQuery, activeFilters, rangeQuery} = useValue();
    const [filteredData, setFilteredData] = useState(propertyrentaldata);

    const filterProducts = useCallback( () => {
        if(activeFilters.length) {
            const tempItems = propertyrentaldata.filter((item) => activeFilters.includes(item.apartmenttype) || activeFilters.includes(item.facing))
            setFilteredData(tempItems);
            console.log(activeFilters)
        }
        else {
            setFilteredData(propertyrentaldata);
        }
    },[activeFilters]);

    useEffect(() => {
        const rangeData = propertyrentaldata.filter(item => {
            const priceNumeric = parseFloat(item.price.replace(/\D/g, '')); 
            return priceNumeric >= rangeQuery;
        });
        
        setFilteredData(rangeData);
    },[rangeQuery]);

    useEffect(() => {
        filterProducts()
    }, [activeFilters, filterProducts]);

    useEffect(() => {
        setFilteredData(propertyrentaldata.filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase())))
    },[searchQuery]);

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