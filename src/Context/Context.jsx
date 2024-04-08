import { createContext, useEffect, useState } from "react";
import Axios from "../Utility/Axios";

export const UserContext = createContext()

const Context = ({children}) =>{
    const [products,setProducts] = useState([])
    useEffect(async ()=>{
        const {data} = await Axios.get('/products')
        setProducts(data)
    },[])
    return (
        <UserContext.Provider value={{products,setProducts}}>{children}</UserContext.Provider>
    )
}

export default Context