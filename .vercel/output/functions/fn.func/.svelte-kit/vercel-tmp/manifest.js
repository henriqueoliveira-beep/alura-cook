export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","icones/categorias_ingredientes/acucares_e_adocantes.png","icones/categorias_ingredientes/doces_e_guloseimas.png","icones/categorias_ingredientes/farinhas_e_fermentos.png","icones/categorias_ingredientes/frutas_frescas.png","icones/categorias_ingredientes/frutas_secas.png","icones/categorias_ingredientes/graos_cerais_e_leguminosas.png","icones/categorias_ingredientes/hortalicas_e_verduras.png","icones/categorias_ingredientes/laticinios_e_ovos.png","icones/categorias_ingredientes/oleos_gorduras_e_vinagres.png","icones/categorias_ingredientes/paes_e_massas.png","icones/categorias_ingredientes/proteinas_animais.png","icones/categorias_ingredientes/temperos_e_especiarias.png","icones/close.svg","icones/registered.png","imagens/alura-cook-logo.svg","imagens/footer.png","imagens/header.png","imagens/receitas/alho_assado.png","imagens/receitas/arroz_de_alho.png","imagens/receitas/bacalhau_com_chips_de_alho.png","imagens/receitas/creme_de_galinha.png","imagens/receitas/macarrao_de_alho_e_oleo.png","imagens/receitas/manteiga_com_tomilho_e_alho.png","imagens/receitas/milkshake_de_chocolate.png","imagens/receitas/mousse_de_chocolate.png","imagens/receitas/panqueca.png","imagens/receitas/pao_de_alho.png","imagens/receitas/pasta_de_alho_assado.png","imagens/receitas/pate_de_alho_assado.png","imagens/receitas/tortei.png","imagens/textura-marmore.png"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.59185bbf.js","app":"_app/immutable/entry/app.3deac1e4.js","imports":["_app/immutable/entry/start.59185bbf.js","_app/immutable/chunks/index.874377d6.js","_app/immutable/chunks/singletons.cf7446a5.js","_app/immutable/chunks/index.d2685eda.js","_app/immutable/entry/app.3deac1e4.js","_app/immutable/chunks/index.874377d6.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/receitas",
				pattern: /^\/receitas\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
