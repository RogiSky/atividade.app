import React from 'react';
import Cadastrar from '../views/cadastrar'
import Rotas from '../main/rotas'
import 'bootswatch/dist/cosmo/bootstrap.css'
import NavBar from '../components/navBar'
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
        <>
        <NavBar />
       <div className="container">
        <Rotas />
       </div>
       </>)
    }
}

export default App;
