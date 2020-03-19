import React from 'react'
import Card from '../components/card'
import {withRouter} from 'react-router-dom'
import Route from '../main/rotas'
class CadastradoSucesso extends React.Component{

    constructor(){
        super();
    }

    irParaCadastrar= () =>{
        this.props.history.push('cadastro');
    }
    irParaPagInicial = () =>{ 
        this.props.history.push('');
        
}
    render () {
 
      return(
                <div className="col-md-5" style={ {position : "relative", left : '300px', top: '60px'} }>
                    <div className="bs-docs-section">
                    <Card title="Cadastro Efetuado com Sucesso">
                        <fieldset>
                         <label >Deseja realizar novo cadastro?</label>                     
                         <button onClick={this.irParaCadastrar} type="button" className="btn btn-primary" >Sim</button>                        
                            <button onClick={this.irParaPagInicial} type="button" className="btn btn-info"  >Não</button>                   
                        </fieldset>
                            </Card>
                    </div>
                </div>
      )
        
        


    }
}

export default withRouter(CadastradoSucesso)