import axios from "axios";
import React,{ useState, useEffect, createContext} from "react";
import { useParams } from "react-router-dom"
export default function Detalles (){
    //let params = useParams()  
    const {id} = useParams();
    const [producto, setProducto] = useState({
        id:'',
        codigo:'',
        descripcion:'',
        precio:'',
        imagen:''
    })
    useEffect(()=>{
        peticionGetProducto();
    })

    const peticionGetProducto = async ()=>{
        await axios.get('http://127.0.0.1:8000/productos/'+id+'/')
        .then(response=>{
            const prod = response.data;
            setProducto(prod)

        })
    }
    return(
        <div>
            <div className="informacion">
                <h3>Producto seleccionado:</h3>
                <h3>Codigo: {producto.codigo}</h3>
                <h1>Nombre: {producto.descripcion}</h1>
                <img src={producto.imagen} width="100px"></img>
                <h3>Precio: s/. {producto.precio}</h3>
            </div>
        </div>
    )
}