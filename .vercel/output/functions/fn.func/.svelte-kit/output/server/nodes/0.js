

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.aded6867.js","_app/immutable/chunks/index.874377d6.js","_app/immutable/chunks/Tag.cf1b8b43.js","_app/immutable/chunks/index.d2685eda.js"];
export const stylesheets = ["_app/immutable/assets/0.2747a0e2.css","_app/immutable/assets/Tag.23a959fb.css"];
export const fonts = [];
