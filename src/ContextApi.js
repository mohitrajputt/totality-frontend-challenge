import { addDoc, collection, doc, deleteDoc, getDoc, updateDoc, onSnapshot } from "firebase/firestore";
import {db} from "./Firebaseconfig";
import { toast,ToastContainer,Zoom } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { propertyrentaldata } from "./db/db1";

const { createContext, useContext, useState, useEffect, useCallback } = require("react");

const context = createContext();

function useValue() {
    const value = useContext(context);
    return value;
}

function CustomContext({children}) {

    const [cartItem, setCartItem] = useState([]);

    const [searchQuery, setSearchQuery] = useState('');
    const [rangeQuery, setRangeQuery] = useState(null);
    const [activeFilters, setActiveFilters] = useState([]);
    const [filteredData, setFilteredData] = useState(propertyrentaldata);

// ************************************* Logic for Filter items ********************************

    // Handle Search Query
    const handleInputChange = (event) => {
        setSearchQuery(event.target.value)
    }

    useEffect(() => {
        setFilteredData(propertyrentaldata.filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase())))
    },[searchQuery]);

    // Handle Price Range Filter
    useEffect(() => {
        const rangeData = propertyrentaldata.filter(item => {
            const priceNumeric = parseFloat(item.price.replace(/\D/g, '')); 
            return priceNumeric >= rangeQuery;
        });
        setFilteredData(rangeData);
    },[rangeQuery]);

    // Set of active queryies to apply filter 
    const handleFilterClick = (e) => {
        const category = e.target.id;
        if (activeFilters.includes(category)) {
            const filters = activeFilters.filter((el) => el!== category)
            setActiveFilters(filters)
        }
        else {
            setActiveFilters([...activeFilters, category])
        }
        console.log(activeFilters);
    }

    // Handle Checkbox Filter [Apartment & Direction]
    const filterProducts = useCallback( () => {
        if(activeFilters.length) {
            const tempItems = propertyrentaldata.filter((item) => activeFilters.includes(item.apartmenttype) || activeFilters.includes(item.facing))
            setFilteredData(tempItems);
        }
        else {
            setFilteredData(propertyrentaldata);
        }
    },[activeFilters]);
    
    useEffect(() => {
        filterProducts()
    }, [activeFilters, filterProducts]);


    // function to reset all active filters
    function reserFilter() {
        setActiveFilters([]);
    }

// **************************** Logic for Cart ****************************************************************

    // Effector to fetch real time cart item from firestore 
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
    },[cartItem]);    

    // Function to add items to Cart
    async function addCart(item) {
        try {
            const isItemInCart = cartItem.some(cartItem => cartItem.item.id === item.id);

            if (!isItemInCart) {
                const updatedItem = { ...item, cartCount: 1 };

                await addDoc(collection(db, "cart"), {
                    item: updatedItem
                });

                toast.success("Item Added");
            } else {
                toast.warn("Item Already in Cart, Increase quantity please !")
            }
        } catch (error) {
            console.error("Error adding item to cart:", error);
            toast.error("Failed to add item to cart ,User should login to use cart");
        }
    }

     // Function to remove item from cart
     function removeCart(id) {
        console.log(id);
        deleteDoc(doc(db, "cart", id))
            .then(() => {
                toast.success("Item Removed");
            })
            .catch((error) => {
                console.error("Error removing item from cart:", error);
                toast.error("Failed to remove item from cart");
            });
    }

    // Function to dicrease cart count
    async function cartCountDicrease(id) {
        const docRef = doc(db, "cart", id);
        try {
            const docSnap = await getDoc(docRef);
            const currentCount = (docSnap.data().item.cartCount);
            if(currentCount > 1){
                const newCount = currentCount - 1   
                await updateDoc(docRef, {
                    "item.cartCount": newCount
                });
            }
        } catch (error) {
            console.error("Error updating cart count:", error);
        }
    }
    
    // Function to increase cart count
    async function cartCountIncrease(id) {
        const docRef = doc(db, "cart", id);
        try {
            const docSnap = await getDoc(docRef);
            const newCount = (docSnap.data().item.cartCount) + 1;

            await updateDoc(docRef, {
                "item.cartCount": newCount
            });
        } catch (error) {
            console.error("Error updating cart count:", error);
        }
    }

    return (
        <context.Provider value={
            {cartItem,setCartItem, addCart,removeCart,cartCountDicrease, 
            cartCountIncrease, handleInputChange, searchQuery,handleFilterClick,
            activeFilters, reserFilter, rangeQuery, setRangeQuery, filteredData}
        }>
            {children}
            
            <ToastContainer 
            autoClose={2000} 
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition= {Zoom}
            />
        </context.Provider>
    )
}

export {useValue};
export default CustomContext;