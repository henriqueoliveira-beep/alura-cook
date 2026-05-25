import { c as create_ssr_component, v as validate_component, e as escape, a as subscribe, b as each } from "../../chunks/index2.js";
import { T as Tag, m as minhaLista } from "../../chunks/Tag.js";
const app = "";
const Cabecalho_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: 'header.svelte-1abe4zp{--largura-tela-base:1440;background:url("/imagens/header.png") no-repeat;background-size:100%;height:calc((325 / var(--largura-tela-base)) * 100vw);margin-bottom:3rem;display:flex;justify-content:center;align-items:center}',
  map: null
};
const Cabecalho = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<header class="svelte-1abe4zp"><img src="/imagens/alura-cook-logo.svg" alt="Logo do Alura Cook">
</header>`;
});
const MeuIngrediente_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: '.meu-ingrediente-container.svelte-pm4ag4{position:relative}.close.svelte-pm4ag4{background-image:url("/icones/close.svg");height:10px;width:10px;cursor:pointer;position:absolute;top:4px;right:4px}.remover.svelte-pm4ag4{line-height:24px;font-size:0.875rem;color:var(--laranja);cursor:pointer}',
  map: null
};
const MeuIngrediente = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { ingrediente } = $$props;
  if ($$props.ingrediente === void 0 && $$bindings.ingrediente && ingrediente !== void 0)
    $$bindings.ingrediente(ingrediente);
  $$result.css.add(css$3);
  return `<div class="meu-ingrediente-container svelte-pm4ag4"><button class="close svelte-pm4ag4"></button>
    ${validate_component(Tag, "Tag").$$render($$result, { ativa: true }, {}, {
    default: () => {
      return `${escape(ingrediente)}`;
    }
  })}
    <span class="remover svelte-pm4ag4">Remover</span>
</div>`;
});
const MinhaLista_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".minha-lista.svelte-1wl1ngf.svelte-1wl1ngf{padding-bottom:1.625rem}.minha-lista.svelte-1wl1ngf>h2.svelte-1wl1ngf{font-size:1.5rem;color:var(--laranja);margin-bottom:1.5rem;line-height:2rem;font-weight:700}.meus-ingredientes.svelte-1wl1ngf.svelte-1wl1ngf{display:flex;flex-wrap:wrap;justify-content:center;gap:0.75rem 1.875rem}",
  map: null
};
const MinhaLista = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $minhaLista, $$unsubscribe_minhaLista;
  $$unsubscribe_minhaLista = subscribe(minhaLista, (value) => $minhaLista = value);
  $$result.css.add(css$2);
  $$unsubscribe_minhaLista();
  return `<section class="minha-lista svelte-1wl1ngf"><h2 class="svelte-1wl1ngf">Sua Lista:</h2>

    <ul class="meus-ingredientes svelte-1wl1ngf">${each($minhaLista, (ingrediente) => {
    return `<li>${validate_component(MeuIngrediente, "MeuIngrediente").$$render($$result, { ingrediente }, {}, {})}
            </li>`;
  })}</ul>
</section>`;
});
const Rodape_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: 'footer.svelte-9n9hln{background:url("/imagens/footer.png");height:100px;font-weight:700;color:var(--branco);display:flex;justify-content:center;align-items:center}.registered.svelte-9n9hln{margin-right:6px}',
  map: null
};
const Rodape = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<footer class="svelte-9n9hln"><img src="/icones/registered.png" alt="icone marca regsitrada" class="registered svelte-9n9hln">
    Copyright Alura Cook - 2022
</footer>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".minha-lista-container.svelte-86w6x3{margin-bottom:2rem}.divisoria.svelte-86w6x3{width:40vw;height:2px;background-color:var(--verde);margin:0 auto}.container-principal.svelte-86w6x3{display:flex;flex-direction:column;min-height:100vh}.estilo-principal.svelte-86w6x3{text-align:center;padding:0 5vw 3.375rem;flex:1}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $minhaLista, $$unsubscribe_minhaLista;
  $$unsubscribe_minhaLista = subscribe(minhaLista, (value) => $minhaLista = value);
  $$result.css.add(css);
  $$unsubscribe_minhaLista();
  return `<div class="container-principal svelte-86w6x3">${validate_component(Cabecalho, "Cabecalho").$$render($$result, {}, {}, {})}
    <div class="estilo-principal svelte-86w6x3">${$minhaLista.length ? `<div class="minha-lista-container svelte-86w6x3">${validate_component(MinhaLista, "MinhaLista").$$render($$result, {}, {}, {})}
                <div class="divisoria svelte-86w6x3"></div></div>` : ``}

        ${slots.default ? slots.default({}) : ``}</div>
    ${validate_component(Rodape, "Rodape").$$render($$result, {}, {}, {})}
</div>`;
});
export {
  Layout as default
};
