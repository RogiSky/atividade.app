import React from 'react'

import {
    Route,Switch,HashRouter
} from 'react-router-dom'

import Mapas from '../views/mapas'
import Cadastrar from '../views/cadastrar'

function Rotas(){
    return(
        <HashRouter>
            <Switch>
                <Route path="/cadastro" component={Cadastrar} />
                <Route path="/mapa" component={Mapas} />
            </Switch>
        </HashRouter>

    )

}

export default Rotas