import React from "react";

const FormularioProductos = () => {
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
            />
          </div>
          <div className="form-group col-md-6">
            <label for="inputPassword4">nombre del producto</label>
            <input
              type="text"
              className="form-control"
              id="producto"
              placeholder="Producto"
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
          />
        </div>
        <div className="form-group">
          <label for="inputAddress2">descripcion</label>
          <input
            type="text"
            className="form-control"
            id="descrip"
            placeholder="gramos y coso"
          />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="inputCity">Precio</label>
            <input type="number" className="form-control" id="precio" />
          </div>
          {/* <div className="form-group col-md-4">
            <label for="inputState">descuento</label>
            <select id="descuento" className="form-control">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div> */}
          <div className="form-group col-md-2">
            <label for="inputZip">Descuento</label>
            <input type="number" className="form-control" id="decuento" />
          </div>
          <div className="form-group col-md-2">
            <label for="inputZip">Stock</label>
            <input type="number" className="form-control" id="stock" />
          </div>
        </div>
        <div className="form-group">
 {/*          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
            />
            <label className="form-check-label" for="gridCheck">
              Check me out
            </label>
          </div> */}
        </div>
        <button type="submit" className="btn btn-primary">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default FormularioProductos;
