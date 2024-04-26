import { useValue } from "../../ContextApi";
import style from "./Filter.module.css";

function Filter() {

    const {handleFilterClick, activeFilters, reserFilter, setRangeQuery} = useValue();
    const bhkFilter = ['1bhk','2bhk','3bhk','4bhk',];
    const directionFilter = ['East', 'West', 'North', 'South'];

    return(
        <section className={style.filterSection} >
            <div className={style.bhkTypeContainer} >
                <div className={style.bhkHeading} >
                    <span>BHK Type</span>
                </div>
                <div className={style.bhkSelectors} onClick={handleFilterClick} >
                    {
                        bhkFilter.map((bhk, index) => (
                            <button id={bhk} key={index} className={activeFilters.includes(bhk) ? 'selected' : ''}  >
                                {bhk}
                            </button>
                        ))
                    }
                    {/* <ul>
                        <li>
                            <input type="checkbox" id="bh1" onChange={(e) => handleCheckbox('1bhk',e.target.checked)} />
                            <label htmlFor="bh1" >1 - BHK</label>
                        </li>
                        <li>
                            <input type="checkbox" id="bh2" onChange={(e) => handleCheckbox('2bhk',e.target.checked)} />
                            <label htmlFor="bh2" >2 - BHK</label>
                        </li>
                        <li>
                            <input type="checkbox" id="bh3" onChange={(e) => handleCheckbox('3bhk',e.target.checked)} />
                            <label htmlFor="bh3" >3 - BHK</label>
                        </li>
                        <li>
                            <input type="checkbox" id="bh4" onChange={(e) => handleCheckbox('4bhk',e.target.checked)} />
                            <label htmlFor="bh4" >4 - BHK</label>
                        </li>
                    </ul> */}
                </div>
            </div>
            <div className={style.rangeContainer} >
                <div className={style.rangeHeading} >
                    <span>Price Range: 0 to 22K</span>
                </div>
                <div className={style.priceRange} >
                    <input type="range" min="7500" max="22000" onChange={(e) => setRangeQuery(e.target.value)}/>
                </div>
            </div>
            <div className={style.cardinalDirectionContainer} >
                <div className={style.directionHeading} >
                    <span>Directions</span>
                </div>
                <div className={style.directionSelector}  onClick={handleFilterClick} >
                    {
                        directionFilter.map((direction, index) => (
                            <button id={direction} key={index} className={activeFilters.includes(direction) ? 'selected' : ''}  >
                                {direction}
                            </button>
                        ))
                    }
                    {/* <ul>
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
                    </ul> */}
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
                <p onClick={reserFilter} >⟲ Reset</p>
            </div>
        </section>
    )
}
export default Filter;