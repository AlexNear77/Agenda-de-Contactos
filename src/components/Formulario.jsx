import React,{Fragment} from 'react';

const Formulario = () => {
   return ( 
      <Fragment>
         {/*                     FORMULARIO                     */}
         <div className="card ">
            <h4 className="card-header">Agregar Tarea</h4>
            <div className="card-body">
            <form >
               {/*                        Nombre                         */}
               <div className="form-group">
                  <label >Nombre:</label>
                  <input type="text"
                        name="contacto"
                        className="form-control"
                        placeholder="Nombre del contacto"
                  />
               </div>
               {/*                        edad                    */}
               <div className="form-group">
                  <label >Numero:</label>
                  <input type="text"
                        name="numero"
                        className="form-control"
                        placeholder="Numero del contacto"
                  />
               </div>
               
               {/*                        Button                    */}
               <button type="submit"
                     className="btn btn-success btn-lg btn-block">
                        Agregar Contacto
               </button>
            </form>
            </div>
         </div>
      </Fragment>
    );
}
 
export default Formulario;