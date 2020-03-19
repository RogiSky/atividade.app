import React from 'react'

import {
    Route,Switch,HashRouter
} from 'react-router-dom'

import Mapas from '../views/mapas'
import Cadastrar from '../views/cadastrar'
import cadastradoSucesso from '../views/cadastrado-sucesso'
import home from '../views/home'

function Rotas(){
    return(
        <HashRouter>
            <Switch>
                <Route path="/cadastro" component={Cadastrar} />
                <Route path="/mapa" component={Mapas} />
                <Route path="/cadastroEfetuado" component={cadastradoSucesso} />
                <Route path="" component={home} />
            </Switch>
        </HashRouter>

    )

}

export default Rotas