import axios from 'axios'

const httpClient = axio.create({
    baseURL: 'https://servicodados.ibge.gov.br/api/v1/localidades'
})

class IbgeService extends ApiService{
        constructor(){
            this.apiurl = '/estados';
        }
    
        post(url,objeto){
            return httpClient.post(url,objeto);
        }
        put(url,objeto){
            return httpClient.put(url,objeto);
        }
        delete(url){
            return httpClient.delete(url);
        }
        get(url){
            return httpClient.get(url);
        }
    
    }
    
export default IbgeService ;