import { c as create_ssr_component, v as validate_component, e as escape, d as add_attribute, a as subscribe, b as each } from "../../../chunks/index2.js";
import { C as Card, T as Titulo, a as TagLink } from "../../../chunks/TagLink.js";
import { m as minhaLista } from "../../../chunks/Tag.js";
const Receita_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".receita-img.svelte-fuj62j{width:100%;height:150px}.receita-nome.svelte-fuj62j{font-size:1.125rem}.receita-info.svelte-fuj62j{padding:0.75rem 0.875rem}",
  map: null
};
const Receita = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { receita } = $$props;
  if ($$props.receita === void 0 && $$bindings.receita && receita !== void 0)
    $$bindings.receita(receita);
  $$result.css.add(css$1);
  return `<div style="display: contents; --largura:280px;">${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `<img src="${"/imagens/receitas/" + escape(receita.imagem, true)}"${add_attribute("alt", receita.nome, 0)} class="receita-img svelte-fuj62j">

    <div class="receita-info svelte-fuj62j"><h3 class="receita-nome svelte-fuj62j">${escape(receita.nome)}</h3></div>`;
    }
  })}</div>`;
});
const receitas = [
  {
    nome: "Pasta de Alho Assado",
    ingredientes: [
      "Alho",
      "Azeite de Oliva"
    ],
    imagem: "pasta_de_alho_assado.png"
  },
  {
    nome: "Patê de Alho Assado",
    ingredientes: [
      "Alho",
      "Azeite de Oliva"
    ],
    imagem: "pate_de_alho_assado.png"
  },
  {
    nome: "Alho Assado",
    ingredientes: [
      "Alho",
      "Azeite de Oliva",
      "Orégano"
    ],
    imagem: "alho_assado.png"
  },
  {
    nome: "Arroz de Alho",
    ingredientes: [
      "Arroz",
      "Alho",
      "Óleo"
    ],
    imagem: "arroz_de_alho.png"
  },
  {
    nome: "Pão de Alho",
    ingredientes: [
      "Pão",
      "Manteiga",
      "Alho",
      "Orégano"
    ],
    imagem: "pao_de_alho.png"
  },
  {
    nome: "Macarrão de Alho e Óleo",
    ingredientes: [
      "Macarrão",
      "Alho",
      "Óleo",
      "Manteiga"
    ],
    imagem: "macarrao_de_alho_e_oleo.png"
  },
  {
    nome: "Bacalhau com chips de alho",
    ingredientes: [
      "Bacalhau",
      "Alho",
      "Azeite de Oliva",
      "Limão"
    ],
    imagem: "bacalhau_com_chips_de_alho.png"
  },
  {
    nome: "Manteiga com tomilho e alho",
    ingredientes: [
      "Manteiga",
      "Alho",
      "Tomilho"
    ],
    imagem: "manteiga_com_tomilho_e_alho.png"
  },
  {
    nome: "Tortei com recheio de Abóbora",
    ingredientes: [
      "Massa de pastel",
      "Abóbora",
      "Tomate",
      "Alho",
      "Óleo",
      "Farinha de rosca",
      "Noz moscada"
    ],
    imagem: "tortei.png"
  },
  {
    nome: "Creme de Galinha",
    ingredientes: [
      "Frango",
      "Leite",
      "Creme de Leite",
      "Milho",
      "Ovos"
    ],
    imagem: "creme_de_galinha.png"
  },
  {
    nome: "Panqueca",
    ingredientes: [
      "Farinha de trigo",
      "Manteiga",
      "Leite",
      "Ovos"
    ],
    imagem: "panqueca.png"
  },
  {
    nome: "Milkshake de chocolate",
    ingredientes: [
      "Chocolate",
      "Chantilly"
    ],
    imagem: "milkshake_de_chocolate.png"
  },
  {
    nome: "Mousse de chocolate",
    ingredientes: [
      "Creme de Leite",
      "Chocolate",
      "Ovos",
      "Manteiga"
    ],
    imagem: "mousse_de_chocolate.png"
  }
];
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".info.svelte-138phdg.svelte-138phdg{margin-bottom:3.375rem}.info.svelte-138phdg>p.svelte-138phdg{line-height:2rem}.info.svelte-138phdg>p.verde.svelte-138phdg{color:var(--verde)}.receitas.svelte-138phdg.svelte-138phdg{text-align:start;margin-bottom:3.75rem;display:flex;flex-wrap:wrap;justify-content:center;gap:1.5rem}.editar-lista.svelte-138phdg.svelte-138phdg{display:flex;justify-content:center}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let receitasFiltradas;
  let $minhaLista, $$unsubscribe_minhaLista;
  $$unsubscribe_minhaLista = subscribe(minhaLista, (value) => $minhaLista = value);
  $$result.css.add(css);
  receitasFiltradas = receitas.filter((receita) => receita.ingredientes.every((ingrediente) => $minhaLista.includes(ingrediente)));
  $$unsubscribe_minhaLista();
  return `${$$result.head += `<!-- HEAD_svelte-1rk1hbw_START -->${$$result.title = `<title>Alura Cook | Receitas</title>`, ""}<!-- HEAD_svelte-1rk1hbw_END -->`, ""}

<main>${validate_component(Titulo, "Titulo").$$render($$result, { tag: "h1" }, {}, {
    default: () => {
      return `Receitas`;
    }
  })}

    <div class="info svelte-138phdg"><p class="verde svelte-138phdg">Resultados encontrados: ${escape(receitasFiltradas.length)}</p>
        ${receitasFiltradas.length ? `<p class="svelte-138phdg">Veja as opções de receitas que encontramos com os ingredientes
                que você tem por aí!
            </p>` : `<p class="svelte-138phdg">Não encontramos nenhuma receita com os seus ingredientes.</p>`}</div>

    ${receitasFiltradas.length ? `<ul class="receitas svelte-138phdg">${each(receitasFiltradas, (receita) => {
    return `<li>${validate_component(Receita, "Receita").$$render($$result, { receita }, {}, {})}</li>`;
  })}</ul>` : ``}

    <div class="editar-lista svelte-138phdg">${validate_component(TagLink, "TagLink").$$render($$result, { href: "/" }, {}, {
    default: () => {
      return `Editar lista`;
    }
  })}</div>
</main>`;
});
export {
  Page as default
};
