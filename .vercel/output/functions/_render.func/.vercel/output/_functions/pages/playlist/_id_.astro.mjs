/* empty css                                    */
import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead, a as addAttribute, e as renderTransition } from '../../chunks/astro/server_BeUFYnCP.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_CCeWJMZS.mjs';
import { a as allPlaylists, s as songs } from '../../chunks/data_DzfnhoHe.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const playlist = allPlaylists.find((playlist2) => playlist2.id === id);
  songs.filter((song) => song.albumId === playlist?.albumId);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Spotify Clone" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="playlist-container" class="relative flex flex-col h-full bg-zinc-900 overflow-x-hidden transition-all duration-1000"${addAttribute(renderTransition($$result2, "lwbbxtwc", "", `playlist ${id} box`), "data-astro-transition-scope")}> <!-- PAGE HEADER --> <header class="flex flex-row gap-8 px-6 mt-12"> <picture class="aspect-square h-52 w-52 flex-none"> <img${addAttribute(playlist?.cover, "src")}${addAttribute(`Cover of ${playlist?.title}`, "alt")} class="object-cover w-full h-full shadow-lg"${addAttribute(renderTransition($$result2, "jkadwh6j", "", `playlist ${playlist?.id} image`), "data-astro-transition-scope")}> </picture> <div class="flex flex-col justify-between"> <h2 class="flex flex-1 items-end">Playlist</h2> <div> <h1 class="text-5xl font-fold block">${playlist?.title} <span${addAttribute(renderTransition($$result2, "yf3i42co", "", `playlist ${playlist?.id} title`), "data-astro-transition-scope")}></span> </h1> </div> <div class="flex flex-1 items-end"> <div class="text-sm text-gray-300 font-normal"> <div${addAttribute(renderTransition($$result2, "c5icwrtu", "", `playlist ${playlist?.id} artists`), "data-astro-transition-scope")}> <span>${playlist?.artists.join(", ")}</span> </div> <p class="mt-1"> <span>50 canciones</span>, 3 h aproximadamente
</p> </div> </div> </div> </header> <div class="relative z-10 px-6 pt-10"></div> <div class="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80 -z-10"></div> </div> ` })} `;
}, "C:/Users/Facundo/Desktop/spotify-clone-app/src/pages/playlist/[id].astro", "self");

const $$file = "C:/Users/Facundo/Desktop/spotify-clone-app/src/pages/playlist/[id].astro";
const $$url = "/playlist/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$id,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
