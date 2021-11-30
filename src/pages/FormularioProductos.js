import React from "react";
import { useState, useEffect } from "react";
import * as yup from "yup";

const FormularioProductos = () => {
  let schemaProductos = yup.object().shape({
    nomFarmacia: yup.string().required(),
    nomProducto: yup.string().required(),
    imagen: yup.string().required(),
    descrip: yup.string().required(),
    precio: yup.number().required().positive(),
    descuento: yup.number().required().positive(),
    stock: yup.number().required().positive().integer(),
  });

  const [nomFarmacia, setNomFarmacia] = useState("");
  const [nomProducto, setNomProducto] = useState("");
  const [imagen, setImagen] = useState("");
  const [descrip, setDescrip] = useState("");
  const [precio, setPrecio] = useState("");
  const [descuento, setDescuento] = useState("");
  const [stock, setStock] = useState("");
  const [habilitado, setHabilitado] = useState(false);
  //////////////////////////////

  useEffect(() => {
    schemaProductos
      .isValid({
        nomFarmacia,
        nomProducto,
        imagen,
        descrip,
        precio,
        descuento,
        stock,
      })
      .then((valid) => {
        valid ? setHabilitado(true) : setHabilitado(false);
      });
  }, [nomFarmacia, nomProducto, imagen, descrip, precio, descuento, stock]);

  //////////////////////////////

  const enviarD = async () => {
    ////////////////////
    let myHeaders = new Headers();

    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      farmacia: nomFarmacia,
      nombre_producto: nomProducto,
      img: imagen,
      descripcion: descrip,
      precio: precio,
      descuento: descuento,
      stock: stock,
    });

    const options = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const postData = await fetch(
      "https://backend-farmacias-ya.herokuapp.com/productos/subir-producto",
      options
    );
    const res = postData.json();
    console.log(res);
    ////////////////////
  };

  return (
    <div>
      <form>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="inputEmail4">Nombre de la farmacia</label>
            <input
              type="text"
              className="form-control"
              id="nombreF"
              placeholder="Farmacia"
              onChange={(e) => {
                setNomFarmacia(e.target.value);
              }}
            />
          </div>
          <div className="form-group col-md-6">
            <label for="inputPassword4">nombre del producto</label>
            <input
              type="text"
              className="form-control"
              id="producto"
              placeholder="Producto"
              onChange={(e) => {
                setNomProducto(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="form-group">
          <label for="inputAddress">imagen(?)</label>
          <input
            type="text"
            className="form-control"
            id="imagen"
            placeholder="usted_no_aprende_verdad?.jpg"
            onChange={(e) => {
              setImagen(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label for="inputAddress2">descripcion</label>
          <input
            type="text"
            className="form-control"
            id="descrip"
            placeholder="gramos y coso"
            onChange={(e) => {
              setDescrip(e.target.value);
            }}
          />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="inputCity">Precio</label>
            <input
              type="number"
              className="form-control"
              id="precio"
              onChange={(e) => {
                setPrecio(e.target.value);
              }}
            />
          </div>
          <div className="form-group col-md-2">
            <label for="inputZip">Descuento</label>
            <input
              type="number"
              className="form-control"
              id="decuento"
              onChange={(e) => {
                setDescuento(e.target.value);
              }}
            />
          </div>
          <div className="form-group col-md-2">
            <label for="inputZip">Stock</label>
            <input
              type="number"
              className="form-control"
              id="stock"
              onChange={(e) => {
                setStock(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="form-group"></div>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={habilitado ? false : true}
          onClick={(e) => {
            enviarD(e.preventDefault());
          }}
        >
          {habilitado ? "Enviar datos":"Deshabilitado"}
        </button>
      </form>
    </div>
  );
};

export default FormularioProductos;
