
const Dados = use("app/models/Dados")

class DadosController{


    async index ({ request, response }) {
        const dados = await Dados.all();
    
        return dados;
    };

    async show ({request, params}) {
        const dados = await Dados.findOrFail(params.id);
    
        return dados;
    };

    async store ({ request, response}) {
        const data = request.only(["estacao_id", "temperatura", "velocidade_vento", "umidade", "data"]);
    
        const dados = await Dados.create(data);
    
        return dados;
    };
    
    async update ({ params, request, response }) {
        const dados = await Dados.findOrFail(params.id);
        const data = request.only(["estacao_id", "temperatura", "velocidade_vento", "umidade", "data"]);
    
        dados.merge(data);
        await dados.save();
    
        return dados;
    };

    async destroy ({ params, request, response }) {
        const dados = await Dados.findOrFail(params.id);
    
        await dados.delete();
      }
}
    
module.exports = DadosController;
    
