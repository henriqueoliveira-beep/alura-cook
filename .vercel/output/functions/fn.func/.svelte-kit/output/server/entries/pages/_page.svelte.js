import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape, d as add_attribute, b as each } from "../../chunks/index2.js";
import { C as Card, T as Titulo, a as TagLink } from "../../chunks/TagLink.js";
import { m as minhaLista, T as Tag } from "../../chunks/Tag.js";
function client_method(key) {
  {
    if (key === "before_navigate" || key === "after_navigate" || key === "on_navigate") {
      return () => {
      };
    } else {
      const name_lookup = {
        disable_scroll_handling: "disableScrollHandling",
        preload_data: "preloadData",
        preload_code: "preloadCode",
        invalidate_all: "invalidateAll"
      };
      return () => {
        throw new Error(`Cannot call ${name_lookup[key] ?? key}(...) on the server`);
      };
    }
  }
}
const categorias = [
  {
    nome: "Laticínios e Ovos",
    ingredientes: [
      "Ovos",
      "Queijo",
      "Leite",
      "Manteiga",
      "Creme de Leite",
      "Iogurte",
      "Leite Condensado",
      "Sorvete"
    ],
    imagem: "laticinios_e_ovos.png"
  },
  {
    nome: "Farinhas e Fermentos",
    ingredientes: [
      "Farinha de trigo",
      "Povilho",
      "Farinha de rosca",
      "Canjica",
      "Farinha de mandioca",
      "Fubá",
      "Linhaça",
      "Fermento químico"
    ],
    imagem: "farinhas_e_fermentos.png"
  },
  {
    nome: "Temperos e Especiarias",
    ingredientes: [
      "Canela",
      "Cravo",
      "Orégano",
      "Noz moscada",
      "Tomilho",
      "Pimenta do Reino",
      "Cominho"
    ],
    imagem: "temperos_e_especiarias.png"
  },
  {
    nome: "Óleos, Gorduras e Vinagres",
    ingredientes: [
      "Vinagre",
      "Óleo",
      "Dendê",
      "Azeite de Oliva",
      "Banha",
      "Aceto Balsâmico",
      "Óleo de coco"
    ],
    imagem: "oleos_gorduras_e_vinagres.png"
  },
  {
    nome: "Hortaliças e Verduras",
    ingredientes: [
      "Cebola",
      "Alho",
      "Tomate",
      "Abóbora",
      "Abobrinha",
      "Batata",
      "Pimentão",
      "Espinafre",
      "Cenoura"
    ],
    imagem: "hortalicas_e_verduras.png"
  },
  {
    nome: "Açúcares e Adoçantes",
    ingredientes: [
      "Açúcar branco",
      "Açúcar mascavo",
      "Açúcar cristal",
      "Melado",
      "Mel",
      "Baunilha",
      "Glucose",
      "Xilito",
      "Stevia"
    ],
    imagem: "acucares_e_adocantes.png"
  },
  {
    nome: "Proteínas Animais",
    ingredientes: [
      "Peixe",
      "Carne bovina",
      "Carne de porco",
      "Frango",
      "Bacon",
      "Salsicha",
      "Atum",
      "Salmão",
      "Presunto",
      "Bacalhau"
    ],
    imagem: "proteinas_animais.png"
  },
  {
    nome: "Grãos, Cereais e Leguminosas",
    ingredientes: [
      "Arroz",
      "Feijão",
      "Aveia",
      "Ervilha",
      "Lentilha",
      "Grão de bico",
      "Milho",
      "Gergelim",
      "Quinoa"
    ],
    imagem: "graos_cerais_e_leguminosas.png"
  },
  {
    nome: "Frutas frescas",
    ingredientes: [
      "Banana",
      "Maçã",
      "Uva",
      "Pera",
      "Limão",
      "Morango",
      "Ameixa",
      "Framboesa",
      "Acabaxi"
    ],
    imagem: "frutas_frescas.png"
  },
  {
    nome: "Frutas secas",
    ingredientes: [
      "Castanha de caju",
      "Castanha do pará",
      "Uva passa",
      "Damasco",
      "Tâmara",
      "Pistache",
      "Amêndoa",
      "Amendoim"
    ],
    imagem: "frutas_secas.png"
  },
  {
    nome: "Pães e Massas",
    ingredientes: [
      "Pão",
      "Pão sírio",
      "Tortilha",
      "Macarrão",
      "Nhoque",
      "Massa de pastel",
      "Massa de lasanha",
      "Biscoito",
      "Broa"
    ],
    imagem: "paes_e_massas.png"
  },
  {
    nome: "Doces e guloseimas",
    ingredientes: [
      "Chocolate",
      "Geleia",
      "Goiabada",
      "Caramelo",
      "Chantilly",
      "Cacau em pó",
      "Suspiro",
      "Gelatina",
      "Paçoca"
    ],
    imagem: "doces_e_guloseimas.png"
  }
];
const IngredienteSelecionavel_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "button.svelte-1lh3y25{cursor:pointer}",
  map: null
};
const IngredienteSelecionavel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let selecionado;
  let $minhaLista, $$unsubscribe_minhaLista;
  $$unsubscribe_minhaLista = subscribe(minhaLista, (value) => $minhaLista = value);
  let { ingrediente } = $$props;
  if ($$props.ingrediente === void 0 && $$bindings.ingrediente && ingrediente !== void 0)
    $$bindings.ingrediente(ingrediente);
  $$result.css.add(css$2);
  selecionado = $minhaLista.includes(ingrediente);
  $$unsubscribe_minhaLista();
  return `<button class="svelte-1lh3y25">${validate_component(Tag, "Tag").$$render($$result, { ativa: selecionado }, {}, {
    default: () => {
      return `${escape(ingrediente)}`;
    }
  })}
</button>`;
});
const Categoria_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".categoria-container.svelte-1hli2c8{padding:0.75rem 0.5rem}.categoria-imagem.svelte-1hli2c8{margin-bottom:0.5rem}.categoria-nome.svelte-1hli2c8{font-size:1.125rem;color:var(--verde);margin-bottom:0.875rem}.ingredientes.svelte-1hli2c8{display:flex;flex-wrap:wrap;justify-content:center;gap:0.75rem 1rem}",
  map: null
};
const Categoria = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { categoria } = $$props;
  if ($$props.categoria === void 0 && $$bindings.categoria && categoria !== void 0)
    $$bindings.categoria(categoria);
  $$result.css.add(css$1);
  return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="categoria-container svelte-1hli2c8"><img src="${"/icones/categorias_ingredientes/" + escape(categoria.imagem, true)}"${add_attribute("alt", categoria.nome, 0)} class="categoria-imagem svelte-1hli2c8">
        <h3 class="categoria-nome svelte-1hli2c8">${escape(categoria.nome)}</h3>

        <ul class="ingredientes svelte-1hli2c8">${each(categoria.ingredientes, (ingrediente) => {
        return `<li>${validate_component(IngredienteSelecionavel, "IngredienteSelecionavel").$$render($$result, { ingrediente }, {}, {})}
                </li>`;
      })}</ul></div>`;
    }
  })}`;
});
const beforeNavigate = /* @__PURE__ */ client_method("before_navigate");
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".info.svelte-1y9b9fl.svelte-1y9b9fl{margin-bottom:3.375rem}.info.svelte-1y9b9fl>p.svelte-1y9b9fl{line-height:2rem}.categorias.svelte-1y9b9fl.svelte-1y9b9fl{margin-bottom:4.6875rem;display:flex;flex-wrap:wrap;justify-content:center;gap:1.5rem}.buscar-receitas.svelte-1y9b9fl.svelte-1y9b9fl{display:flex;justify-content:center}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let listaVazia;
  let $minhaLista, $$unsubscribe_minhaLista;
  $$unsubscribe_minhaLista = subscribe(minhaLista, (value) => $minhaLista = value);
  beforeNavigate((navigation) => {
    if (listaVazia && navigation.to?.url.pathname === "/receitas") {
      navigation.cancel();
    }
  });
  $$result.css.add(css);
  listaVazia = $minhaLista.length === 0;
  $$unsubscribe_minhaLista();
  return `${$$result.head += `<!-- HEAD_svelte-1cts1go_START -->${$$result.title = `<title>Alura Cook</title>`, ""}<!-- HEAD_svelte-1cts1go_END -->`, ""}

<main>${validate_component(Titulo, "Titulo").$$render($$result, { tag: "h1" }, {}, {
    default: () => {
      return `Ingredientes`;
    }
  })}

    <div class="info svelte-1y9b9fl"><p class="svelte-1y9b9fl">Selecione abaixo os ingredientes que você deseja usar nesta
            refeição:
        </p>
        <p class="svelte-1y9b9fl">*Atenção: consideramos que você tenha em casa sal, pimenta e água.
        </p></div>

    <ul class="categorias svelte-1y9b9fl">${each(categorias, (categoria) => {
    return `<li>${validate_component(Categoria, "Categoria").$$render($$result, { categoria }, {}, {})}
            </li>`;
  })}</ul>

    <div class="buscar-receitas svelte-1y9b9fl">${validate_component(TagLink, "TagLink").$$render(
    $$result,
    {
      href: "/receitas",
      desabilitada: listaVazia
    },
    {},
    {
      default: () => {
        return `Bsucar Receitas!
        `;
      }
    }
  )}</div>
</main>`;
});
export {
  Page as default
};
