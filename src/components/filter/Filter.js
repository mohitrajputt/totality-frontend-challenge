import style from "./Filter.module.css";

function Filter() {
    return(
        <section className={style.filterSection} >
            <div className={style.bhkTypeContainer} >
                <div className={style.bhkHeading} >
                    <span>BHK Type</span>
                </div>
                <div className={style.bhkSelectors} >
                    <ul>
                        <li>
                            <input type="checkbox" id="bh1" />
                            <label htmlFor="bh1" >1 - BHK</label>
                        </li>
                        <li>
                            <input type="checkbox" id="bh2" />
                            <label htmlFor="bh2" >2 - BHK</label>
                        </li>
                        <li>
                            <input type="checkbox" id="bh3" />
                            <label htmlFor="bh3" >3 - BHK</label>
                        </li>
                        <li>
                            <input type="checkbox" id="bh4" />
                            <label htmlFor="bh4" >4 - BHK</label>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={style.rangeContainer} >
                <div className={style.rangeHeading} >
                    <span>Price Range: 0 to 10cr</span>
                </div>
                <div className={style.priceRange} >
                    <input type="range" />
                </div>
            </div>
            <div className={style.cardinalDirectionContainer} >
                <div className={style.directionHeading} >
                    <span>Directions</span>
                </div>
                <div className={style.directionSelector} >
                    <ul>
                        <li>
                            <input type="checkbox" id="east" />
                            <label htmlFor="east" >EAST</label>
                        </li>
                        <li>
                            <input type="checkbox" id="west" />
                            <label htmlFor="west" >WEST</label>
                        </li>
                        <li>
                            <input type="checkbox" id="north" />
                            <label htmlFor="north" >NORTH</label>
                        </li>
                        <li>
                            <input type="checkbox" id="south" />
                            <label htmlFor="south" >SOUTH</label>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={style.parkingContainer} >
                <div className={style.parkingAvaHeading} >
                    <span>Parking Availability</span>
                </div>
                <div className={style.parkingInput} >
                    <input type="checkbox" id="parking" />
                    <label htmlFor="parking" >Parking</label>
                </div>
            </div>
            <div className={style.resetFilter} >
                <p>⟲ Reset</p>
            </div>
        </section>
    )
}

export default Filter;