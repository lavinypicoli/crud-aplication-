
const Estacoes = use("app/models/Estacoes");

class EstacoesController{

    async index ({ request, response}) {
        const estacoes = await Estacoes.all();
    
        return estacoes;
    };

    async show ({request, params}) {
        const estacoes = await Estacoes.findOrFail(params.id);
    
        return estacoes;
    };

    async store ({ request, response}) {
        const data = request.only(["serial", "lat", "lon", "nome"]);
    
        const estacoes = await Estacoes.create(data);
    
        return estacoes;
    };

    async update ({ params, request, response }) {
        const estacoes = await Estacoes.findOrFail(params.id);
        const data = request.only(["serial", "lat", "lon", "nome"]);
    
        estacoes.merge(data);
        await estacoes.save();
    
        return estacoes;
    };
    async destroy ({ params, request, response }) {
        const estacoes = await Estacoes.findOrFail(params.id);
    
        await estacoes.delete();
    };


}
module.exports = EstacoesController;