const Route = use('Route');

Route.resource("estacoes", "EstacoesController").apiOnly();

Route.resource("dados", "DadosController").apiOnly();