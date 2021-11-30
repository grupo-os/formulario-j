import React from "react";
import  {useState} from "react";

const FormularioEditarProd = () => {

    const [nomFarmacia, setNomFarmacia]=useState('')
    const [nomProducto, setNomProducto]=useState('')
    const [imagen, setImagen]=useState('')
    const [descrip, setDescrip]=useState('')
    const [precio, setPrecio]=useState('')
    const [descuento, setDescuento]=useState('')
    const [stock, setStock]=useState('')
  
    const enviarD = async () =>{
  ////////////////////
  let myHeaders = new Headers();
  
  myHeaders.append("Content-Type", "application/json")
  
  const raw = JSON.stringify({
      "farmacia": nomFarmacia,
      "nombre_producto": nomProducto,
      "img": imagen,
      "descripcion": descrip,
      "precio": precio,
      "descuento": descuento,
      "stock": stock
      
      }
     
  )
  
  const options = {
    method: 'PUT',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  }
  
  const postData = await fetch(`https://backend-farmacias-ya.herokuapp.com/productos/editar/`, options)
  const res = postData.json()
  console.log(res)
  ////////////////////
    }
  
  
    return (
      <div>
        <form>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="inputEmail4">Editar nombre de la farmacia</label>
              <input
                type="text"
                className="form-control"
                id="nombreF"
                placeholder="Farmacia"
                onChange={(e) =>{setNomFarmacia(e.target.value)}}
              />
            </div>
            <div className="form-group col-md-6">
              <label for="inputPassword4">Editar nombre del producto</label>
              <input
                type="text"
                className="form-control"
                id="producto"
                placeholder="Producto"
                onChange={(e) =>{setNomProducto(e.target.value)}}
              />
            </div>
          </div>
          <div className="form-group">
            <label for="inputAddress">Editar imagen(?)</label>
            <input
              type="text"
              className="form-control"
              id="imagen"
              placeholder="usted_no_aprende_verdad?.jpg"
              onChange={(e) =>{setImagen(e.target.value)}}
            />
          </div>
          <div className="form-group">
            <label for="inputAddress2">Editar descripcion</label>
            <input
              type="text"
              className="form-control"
              id="descrip"
              placeholder="gramos y coso"
              onChange={(e) =>{setDescrip(e.target.value)}}
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="inputCity">Editar Precio</label>
              <input type="number" className="form-control" id="precio" onChange={(e) =>{setPrecio(e.target.value)}}/>
            </div>
            <div className="form-group col-md-2">
              <label for="inputZip">Editar descuento</label>
              <input type="number" className="form-control" id="decuento" onChange={(e) =>{setDescuento(e.target.value)}}/>
            </div>
            <div className="form-group col-md-2">
              <label for="inputZip">Editar stock</label>
              <input type="number" className="form-control" id="stock" onChange={(e) =>{setStock(e.target.value)}}/>
            </div>
          </div>
          <div className="form-group">
          </div>
          <button type="submit" className="btn btn-primary"  onClick={(e) => {enviarD(e.preventDefault())}}>
            Enviar datos editados
          </button>
        </form>
      </div>
    );
  };

export default FormularioEditarProd
