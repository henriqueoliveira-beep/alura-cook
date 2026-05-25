import { w as writable } from "./index.js";
import { c as create_ssr_component, e as escape } from "./index2.js";
const { subscribe, set, update } = writable([]);
const minhaLista = {
  subscribe,
  set,
  adicionarIngrediente(ingrediente) {
    update((valorAtual) => [...valorAtual, ingrediente]);
  },
  removerIngrediente(ingrediente) {
    update((valorAtual) => valorAtual.filter((item) => item !== ingrediente));
  }
};
const Tag_svelte_svelte_type_style_lang = "";
const css = {
  code: ".tag.svelte-1uxb86k{height:48px;border-radius:8px;padding:1rem;text-align:center;color:var(--cor-texto-principal);background-color:var(--cinza);display:flex;justify-content:center;align-items:center;transition:0.2s}.ativa.svelte-1uxb86k{color:var(--branco);background-color:var(--laranja)}.lg.svelte-1uxb86k{font-size:1.125rem;padding:1.5rem}.desabilitada.svelte-1uxb86k{opacity:0.5;cursor:default}",
  map: null
};
const Tag = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { ativa = false } = $$props;
  let { tamanho = "md" } = $$props;
  let { desabilitada = false } = $$props;
  if ($$props.ativa === void 0 && $$bindings.ativa && ativa !== void 0)
    $$bindings.ativa(ativa);
  if ($$props.tamanho === void 0 && $$bindings.tamanho && tamanho !== void 0)
    $$bindings.tamanho(tamanho);
  if ($$props.desabilitada === void 0 && $$bindings.desabilitada && desabilitada !== void 0)
    $$bindings.desabilitada(desabilitada);
  $$result.css.add(css);
  return `<div class="${[
    "tag " + escape(tamanho, true) + " svelte-1uxb86k",
    (ativa ? "ativa" : "") + " " + (desabilitada ? "desabilitada" : "")
  ].join(" ").trim()}">${slots.default ? slots.default({}) : ``}
</div>`;
});
export {
  Tag as T,
  minhaLista as m
};
