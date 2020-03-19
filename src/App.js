import React from 'react';
import Cadastrar from './views/cadastrar'
import 'bootswatch/dist/cosmo/bootstrap.css'
import './views/custom.css'
class App extends React.Component  {

/*  state = {
      cpf : '',
      nome : '',
      uf : 'AC',
      peso : 0.0,
      dia : 1,
      mes : 1,
      ano : 2020,
    }
*/

    render(){
      return(
       <div>
        <Cadastrar />
       </div>)
    }
}

export default App;
