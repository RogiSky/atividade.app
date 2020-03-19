import React from 'react'
import Card from '../components/card'
import FormGroup from '../components/form-group'
import Button from '../components/button'
import {withRouter} from 'react-router-dom'
import FormularioService from '../app/service/formularios/formularioService'
import axios from 'axios'
import CustomSelect from '../components/custom-select'
class Cadastrar extends React.Component{

    state ={
        cpf : '',
      nome : '',
      uf : 'AC',
      peso : 0.0,
      dia : 1,
      mensagemErro: null,
      vetorEstados : null,
      //lista provisoria para caso o service do IBGE estiver fora do ar, é atualizada em componentDidMount
      tuplaUf : [{"id":11,"sigla":"RO","nome":"Rondônia","regiao":{"id":1,"sigla":"N","nome":"Norte"}},{"id":12,"sigla":"AC","nome":"Acre","regiao":{"id":1,"sigla":"N","nome":"Norte"}},{"id":13,"sigla":"AM","nome":"Amazonas","regiao":{"id":1,"sigla":"N","nome":"Norte"}},{"id":14,"sigla":"RR","nome":"Roraima","regiao":{"id":1,"sigla":"N","nome":"Norte"}},{"id":15,"sigla":"PA","nome":"Pará","regiao":{"id":1,"sigla":"N","nome":"Norte"}},{"id":16,"sigla":"AP","nome":"Amapá","regiao":{"id":1,"sigla":"N","nome":"Norte"}},{"id":17,"sigla":"TO","nome":"Tocantins","regiao":{"id":1,"sigla":"N","nome":"Norte"}},{"id":21,"sigla":"MA","nome":"Maranhão","regiao":{"id":2,"sigla":"NE","nome":"Nordeste"}},{"id":22,"sigla":"PI","nome":"Piauí","regiao":{"id":2,"sigla":"NE","nome":"Nordeste"}},{"id":23,"sigla":"CE","nome":"Ceará","regiao":{"id":2,"sigla":"NE","nome":"Nordeste"}},{"id":24,"sigla":"RN","nome":"Rio Grande do Norte","regiao":{"id":2,"sigla":"NE","nome":"Nordeste"}},{"id":25,"sigla":"PB","nome":"Paraíba","regiao":{"id":2,"sigla":"NE","nome":"Nordeste"}},{"id":26,"sigla":"PE","nome":"Pernambuco","regiao":{"id":2,"sigla":"NE","nome":"Nordeste"}},{"id":27,"sigla":"AL","nome":"Alagoas","regiao":{"id":2,"sigla":"NE","nome":"Nordeste"}},{"id":28,"sigla":"SE","nome":"Sergipe","regiao":{"id":2,"sigla":"NE","nome":"Nordeste"}},{"id":29,"sigla":"BA","nome":"Bahia","regiao":{"id":2,"sigla":"NE","nome":"Nordeste"}},{"id":31,"sigla":"MG","nome":"Minas Gerais","regiao":{"id":3,"sigla":"SE","nome":"Sudeste"}},{"id":32,"sigla":"ES","nome":"Espírito Santo","regiao":{"id":3,"sigla":"SE","nome":"Sudeste"}},{"id":33,"sigla":"RJ","nome":"Rio de Janeiro","regiao":{"id":3,"sigla":"SE","nome":"Sudeste"}},{"id":35,"sigla":"SP","nome":"São Paulo","regiao":{"id":3,"sigla":"SE","nome":"Sudeste"}},{"id":41,"sigla":"PR","nome":"Paraná","regiao":{"id":4,"sigla":"S","nome":"Sul"}},{"id":42,"sigla":"SC","nome":"Santa Catarina","regiao":{"id":4,"sigla":"S","nome":"Sul"}},{"id":43,"sigla":"RS","nome":"Rio Grande do Sul","regiao":{"id":4,"sigla":"S","nome":"Sul"}},{"id":50,"sigla":"MS","nome":"Mato Grosso do Sul","regiao":{"id":5,"sigla":"CO","nome":"Centro-Oeste"}},{"id":51,"sigla":"MT","nome":"Mato Grosso","regiao":{"id":5,"sigla":"CO","nome":"Centro-Oeste"}},{"id":52,"sigla":"GO","nome":"Goiás","regiao":{"id":5,"sigla":"CO","nome":"Centro-Oeste"}},{"id":53,"sigla":"DF","nome":"Distrito Federal","regiao":{"id":5,"sigla":"CO","nome":"Centro-Oeste"}}],
      espera : true
    }


    constructor(){
        super();
        this.service = new FormularioService();
    }
    validar(){
        const mens = [];
        if(!this.state.nome){
            mens.push('Campo nome é obrigatório')
        }
        if(!this.state.state.cpf){
            mens.push('Campo cpf é obrigatório')
        }
        if(!this.state.uf){
            mens.push('Campo UF é obrigatório')
        }
        return mens;
    }
    cadastrar = () => {

        this.service.cadastrar({
            cpf: this.state.cpf,
            nome: this.state.nome,
            uf: this.state.uf,
            peso: this.state.peso,
            dataNascimento: this.state.dia
        }).then(response => {
            this.props.history.push('/cadastroEfetuado')
            console.log(response)
        }).catch( erro => 
            this.setState({mensagemErro: erro.response.data})
        )
    }

    cadastradoComSucesso = () =>{
        this.props.history.push('')
    }
    resetar = () => {
        this.setState({nome: ''})
        this.setState({cpf: ''})
        this.setState({uf: 'AC'})
        this.setState({peso: ''})
        this.setState({dia: ''})
    }

    //recebe a lista de UF from IBGE service e atualiza o vetor tuplaUF para exibir opções de cadastro
    componentDidMount = async() => {
           await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
            .then(response =>{
                this.setState({vetorEstados: response.data})
            });
            if(this.state.vetorEstados && this.state.vetorEstados.length > 0){
                this.state.vetorEstados.forEach((val, index) => {
                    //this.state.listaIdUF.push(val.id);
                    //this.state.listaNomeUF.push(val.nome);
                   // this.state.listaValueUF.push(val.sigla);

                  //  this.state.tuplaUf.push({label:val.sigla,value:val.id})
                });
                this.setState({tuplaUf: this.state.vetorEstados})
            }

    }

    render () {
 
        const lista = this.state.vetorEstados
      return(
                <div className="col-md-6" style={ {position : "relative", left : '300px', top: '60px'} }>
                    <div className="bs-docs-section">
                    <Card title="Cadastrar Pessoa">
                        <div className="row">
                            <span>{this.state.mensagemErro}</span>
                        </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="bs-component">
                                        <fieldset>
                                            <div className="col-lg-10">
                                                <FormGroup Label="Nome: *" htmlFor="exampleInputNome">
                                                <input type="text"
                                                value={this.state.nome}
                                                onChange={e => this.setState({nome: e.target.value})}
                                                        className="form-control"
                                                        id= "exampleInputNome"
                                                        aria-describedby ="nomeHelp"
                                                        placeholder="Digite o Nome"
                                                        />
                                                </FormGroup>
                                                <FormGroup Label="CPF: *" htmlFor="exampleInputCpf">
                                                <input type="number"
                                                value={this.state.cpf}
                                                onChange={e => this.setState({cpf: e.target.value})}
                                                        className="form-control"
                                                        id= "exampleInputCpf"
                                                        aria-describedby ="CPFHelp"
                                                        placeholder="Digite o CPF"
                                                        />
                                                </FormGroup>
                                                </div>
                                                <div className="col-lg-5">
                                                <FormGroup Label="Data de Nascimento:" htmlFor="exampleInputDiaN">
                                                        <input type="date"
                                                value={this.state.dia}
                                                onChange={e => this.setState({dia: e.target.value})}
                                                        className="form-control"
                                                        id= "exampleInputDiaN"
                                                        aria-describedby ="diaHelp"
                                                        placeholder="dd/mm/aaaa"
                                                        />
                                                    </FormGroup>
                                                </div>
                                                <div className="col-lg-3">
                                                      <label htmlFor="exampleInputPeso">peso</label>
                                                <input type="text"
                                                value={this.state.peso}
                                                onChange={e => this.setState({peso: e.target.value})}
                                                        className="form-control"
                                                        id= "exampleInputPeso"
                                                        aria-describedby ="pesoHelp"
                                                        placeholder="Kg"
                                                        />

                                                <label htmlFor="exampleInputUf">UF: *</label>
                                                <select className="custom-select"
                                                value={this.state.uf}
                                                onChange={e => this.setState({uf: e.target.value})}>
                                                  <CustomSelect lista={this.state.tuplaUf} />
                                                </select>
                                                </div>                                            
                                        </fieldset>
                                    </div>
                                </div>
                            </div>
                            <div className="container">
                            <button onClick={this.cadastrar} type="button" className="btn btn-primary" >Cadastrar</button>                        
                            <button onClick={this.resetar} type="reset" className="btn btn-info"  >Apagar</button>                        
                            </div>
                            </Card>
                    </div>
                </div>
      )
        
        


    }
}

export default withRouter(Cadastrar)