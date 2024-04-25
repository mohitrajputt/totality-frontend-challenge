import style from "./Navbar.module.css";
import logo from "../../assets/logo.png";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

function Navbar (){

    const [cartView, setCartView] = useState(true);

    return(
        <>
        <nav>
            <div className={style.navContainer} >
                <div className={style.title} >
                    <img src={logo} width="200px" />
                </div>
                <div className={style.searchContainer} >
                    <form>
                        <input type="search" placeholder="Type query" />
                        <button type="button" >
                            SEARCH
                        </button>
                    </form>
                </div>
            </div>
            <div className={style.navContainer} >
                <ul className={style.navMenu} >
                    { cartView ?  
                    <li className={style.cart} >
                        <Link to="/cart" onClick={ () => setCartView(false)} >
                            <img src="https://cdn-icons-png.flaticon.com/128/3514/3514491.png" width="25px" />
                        </Link>
                    </li>
                    :  
                    <li className={style.home} >
                        <Link to="/" onClick={ () => setCartView(true)} >
                            <img src="https://cdn-icons-png.flaticon.com/128/25/25694.png" width="25px" />
                        </Link>
                    </li>
                    }
                    <li>
                        <p>Sign In</p>
                    </li>
                    <li>
                        <p>Sign Up</p>
                    </li>
                </ul>
            </div>
        </nav>
        { cartView &&
            <div className={style.subNav} >
            <div className={style.filter} >Filter</div>
            <div className={style.feed} >Rental Property Feed</div>
            <div className={style.property} >Reviews</div>
        </div>
        }
        <Outlet/>
        </>
    )
} 

export default Navbar;