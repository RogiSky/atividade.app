import ApiService from '../../apiservice'

class FormularioService extends ApiService{
    constructor(){
        super('/api/formularios')
    }

    cadastrar(valores){
        return this.post('/salvar',valores);
    }

}

export default FormularioService;