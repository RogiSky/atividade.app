import React from 'react'
import Card from '../components/card'
import FormGroup from '../components/form-group'
import Button from '../components/button'
class Cadastrar extends React.Component{

    state ={
        cpf : '',
      nome : '',
      uf : 'AC',
      peso : 0.0,
      dia : 1,
      mes : 1,
      ano : 2020
    }
    cadastrar = () => {
        console.log('Cpf: ',this.state.cpf)
        console.log('Nome: ',this.state.nome)
        console.log('UF: ',this.state.uf)
        console.log('Peso: ',this.state.peos)
        console.log('dia: ',this.state.dia)
        console.log('mes: ',this.state.mes)
        console.log('ano: ',this.state.ano)
    }
    resetar = () => {
        this.setState({nome: ''})
        this.setState({cpf: ''})
        this.setState({uf: 'AC'})
        this.setState({peso: ''})
        this.setState({dia: ''})
        this.setState({mes: ''})
        this.setState({ano: ''})
    }

    render(){
      return(
        <div className="container">
            <div className="row">
                <div className="col-md-6" style={ {position : "relative", left : '300px', top: '20px'} }>
                    <div className="bs-docs-section">
                        <Card title="Cadastrar">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="bs-component">
                                        <fieldset>
                                                <FormGroup Label="Nome: *" htmlFor="exampleInputNome">
                                                <input type="nome"
                                                value={this.state.nome}
                                                onChange={e => this.setState({nome: e.target.value})}
                                                        className="form-control"
                                                        id= "exampleInputNome"
                                                        aria-describedby ="nomeHelp"
                                                        placeholder="Digite o Nome"
                                                        />
                                                </FormGroup>
                                                <FormGroup Label="CPF: *" htmlFor="exampleInputCpf">
                                                <input type="cpf"
                                                value={this.state.cpf}
                                                onChange={e => this.setState({cpf: e.target.value})}
                                                        className="form-control"
                                                        id= "exampleInputCpf"
                                                        aria-describedby ="CPFHelp"
                                                        placeholder="Digite o CPF"
                                                        />
                                                </FormGroup>
                                                <FormGroup Label="Peso: " htmlFor="exampleInputPeso">
                                                <input type="peso"
                                                value={this.state.peso}
                                                onChange={e => this.setState({peso: e.target.value})}
                                                        className="form-control"
                                                        id= "exampleInputPeso"
                                                        aria-describedby ="pesoHelp"
                                                        placeholder="Digite o Peso em KG"
                                                        />
                                                </FormGroup>
                                                <div className="container">
                                                    <h6>Data de Nascimento</h6> 
                                                    <FormGroup Label="Dia:" htmlFor="exampleInputDiaN">
                                                        <input type="data"
                                                value={this.state.dia}
                                                onChange={e => this.setState({dia: e.target.value})}
                                                        className="form-control"
                                                        id= "exampleInputDiaN"
                                                        aria-describedby ="diaHelp"
                                                        placeholder="dd"
                                                        />
                                                    </FormGroup>
                                                    <FormGroup Label="Mes:" htmlFor="exampleInputMesN">
                                                        <input type="data"
                                                value={this.state.mes}
                                                onChange={e => this.setState({mes: e.target.value})}
                                                        className="form-control"
                                                        id= "exampleInputMesN"
                                                        aria-describedby ="mesHelp"
                                                        placeholder="mm"
                                                        />
                                                    </FormGroup>
                                                    <FormGroup Label="Ano:" htmlFor="exampleInputAnoN">
                                                        <input type="data"
                                                value={this.state.ano}
                                                onChange={e => this.setState({ano: e.target.value})}
                                                        className="form-control"
                                                        id= "exampleInputAnoN"
                                                        aria-describedby ="anoHelp"
                                                        placeholder="aaaa"
                                                        />
                                                    </FormGroup>
                                                </div>
                                                

                                                <FormGroup Label="UF: *" htmlFor="exampleInputUf">
                                                <select class="custom-select"
                                                value={this.state.uf}
                                                onChange={e => this.setState({uf: e.target.value})}>
                                                  <option selected="1">AC</option>
                                                  <option value="1">AM</option>
                                                  <option value="2">MG</option>
                                                  <option value="3">SP</option>
                                                </select>
                                                </FormGroup>
                                            
                                        </fieldset>
                                    </div>
                                </div>
                            </div>
                            <button onClick={this.cadastrar} type="button" className="btn btn-primary">Cadastrar</button>                        
                            <button onClick={this.resetar} type="button" className="btn btn-info">Resetar</button>                        </Card>
                    </div>
                </div>
            </div>
        </div>
      )
        
        


    }
}

export default Cadastrar