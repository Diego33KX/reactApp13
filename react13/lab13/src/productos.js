import axios from 'axios';
import React,{ useState, useEffect, createContext, useContext} from "react";
import {Link} from 'react-router-dom'
import {DataContext} from './context'
function Productos(){
  const [productos, setProductos] = useState([])
  //ESTO PARA USAR DATA PROVIDER
  //const value = useContext(DataContext)
  //const [productos] = value.productos;
  useEffect(()=>{
    peticionGet()
  },[])
  //CON FETCH
  /*const obtenerDatos = async ()=>{
    const data = await fetch('http://127.0.0.1:8000/productos/')
    const products = await data.json()
    //console.log(products)
    setProductos(products)
  }*/
  const peticionGet = async () =>{
    await axios.get('http://127.0.0.1:8000/productos/').then(response =>{
      const products = response.data
      setProductos(products)
    })
  }
  console.log(productos)
  return(
      <div className='lista'>
        <h1>Lista de Productos</h1>
        <table border="1" className='tabla'>
          <tr>
            <th>Nombre</th>
            <th>Imagen</th>
            <th>Detalles</th>
          </tr>
            {
              productos.map(item =>(
                <tr key={item.id}>
                  <td>{item.descripcion}</td>
                  <td><img src={item.imagen} width="100px"></img></td>
                 
                  <td>
                    <Link to={'/detalles/'+ item.id}><button>Detalles</button></Link>
                    </td>
                  
                </tr>
              ))
            }
        </table>
      </div>
  )
}
export default Productos