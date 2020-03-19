import React from 'react'
import Card from '../components/card'
import {withRouter} from 'react-router-dom'

class CadastradoSucesso extends React.Component{

    irParaCadastrar(){
        this.props.history.push('/cadastro')
    }
    irParaPagInicial(){
        this.props.history.push('')
    }
    
    render () {
 
      return(
                <div className="col-md-6" style={ {position : "relative", left : '300px', top: '60px'} }>
                    <div className="bs-docs-section">
                    <Card title="Bem Vindo">
                        <fieldset>
                         <label >Sistema de Cadastro</label>                     
                        </fieldset>
                            </Card>
                    </div>
                </div>
      )
        
        


    }
}

export default withRouter(CadastradoSucesso)