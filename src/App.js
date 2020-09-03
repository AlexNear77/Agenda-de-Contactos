import React,{Fragment} from 'react';
import Formulario from './components/Formulario';


function App() {
  return (
    <Fragment>
      {/*----------------------------------------------------- */}
      {/*                         TITULO                       */}
      {/*======================================================*/}

      <nav className="navbar navbar-expand-lg  bg-dark">
        <div className="container justify-content-center">
          <h3 className="text-white">Contactos</h3>
        </div>
      </nav>

      <div className="container p-5">
        <div className="row">
          {/*                     Crear citas                           */}
          <div className="col-sm">
            <Formulario/>
          </div>
          {/*                     Mostrar citas                         */}
          <div className="col-sm">
           
          </div>
        </div>
      </div>

    </Fragment>
  );
}

export default App;
