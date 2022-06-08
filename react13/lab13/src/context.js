import React,{ useState, useEffect, createContext} from "react";
import axios from "axios";
export const DataContext = createContext();
export const DataProvider = (props) =>{
    
    const [productos, setProductos]=useState([])


    const peticionGet = () =>{
        axios.get('http://127.0.0.1:8000/productos/').then(response =>{
          const products = response.data
          setProductos(products)
        })
      }
    
    useEffect(()=>{
        peticionGet()
    },[])

    const value = {
        productos: [productos],
    }

    return(
        <DataContext.Provider
            value={value}>
            {props.children}
        </DataContext.Provider>
    )
}
