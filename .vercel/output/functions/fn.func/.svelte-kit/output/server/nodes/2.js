

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.5777e705.js","_app/immutable/chunks/index.874377d6.js","_app/immutable/chunks/TagLink.b5817703.js","_app/immutable/chunks/Tag.cf1b8b43.js","_app/immutable/chunks/index.d2685eda.js","_app/immutable/chunks/singletons.cf7446a5.js"];
export const stylesheets = ["_app/immutable/assets/2.aa2edf84.css","_app/immutable/assets/TagLink.63eee528.css","_app/immutable/assets/Tag.23a959fb.css"];
export const fonts = [];
