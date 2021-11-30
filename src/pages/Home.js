import React from 'react'
import {useEffect, useState} from 'react';


const Home = (props) => {
    const [listarProductos, setListarProductos] = useState([])


    useEffect(() => {
        if(props.location.datos){setListarProductos(props.location.datos.productos)}
        else{setListarProductos([])}
    }, [props])



    return (
//////////////////////77
<div className="container-login100">
 <div className="container mt-2">
 
     <div className="row" id="data">
         {
             listarProductos.length > 0 ? listarProductos.map(item => {
                // let fecha = new Date(item.personal_info.birthdate)
               //  let fechaConvertida = fecha.toLocaleDateString()
                 return(
                     <div className="col-md-3 col-sm-12" >
                         <div className="card card-block mx-12 mb-12">             
                         <p>DNI: <b>{item.farmacia}</b></p> 
                         {/* <p>Genero: <b>{item.nombre_producto}</b></p> 
                         <p>Pais: <b>{item.descripcion}</b></p>
                         <p>Provincia: <b>{item.precioCnDescuento}</b></p>
                         <p>Direccion: <b>{item.precio}</b></p> 
                         <p>Hobby: <b>{item.descuento}</b></p>
                         <p>Telefono: <b>{item.stock}</b></p>  */}
                         <h3>...</h3>
                         </div>
                     </div>
                 )
             }): <h1 style={{margin:'auto', color:'white'}}><b>NO SE HAN CARGADO LOS DATOS</b></h1>
                 
         }
             
                      
                  
     </div>    
 </div>
</div>
////////////////////////
    )
}

export default Home
