/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent, a as addAttribute, e as renderTransition, b as createAstro } from '../chunks/astro/server_BeUFYnCP.mjs';
import 'kleur/colors';
/* empty css                                 */
import { u as usePlayerStore, P as Pause, a as Play, $ as $$Layout } from '../chunks/Layout_CCeWJMZS.mjs';
import { jsx } from 'react/jsx-runtime';
import { p as playlists } from '../chunks/data_DzfnhoHe.mjs';
export { renderers } from '../renderers.mjs';

const CardPlayButton = ({ id }) => {
  const { currentMusic, isPlaying, setIsPlaying, setCurrentMusic } = usePlayerStore((state) => state);
  const isPlayingPlaylist = isPlaying && currentMusic?.playlist.id === id;
  const handleClick = () => {
    if (isPlayingPlaylist) {
      setIsPlaying(false);
      return;
    }
    fetch(`/api/get-info-playlist.json?id=${id}`).then((res) => res.json()).then((data) => {
      const { songs, playlist } = data;
      setIsPlaying(true);
      setCurrentMusic({ songs, playlist, song: songs[0] });
      console.log({ songs, playlist });
    });
  };
  return /* @__PURE__ */ jsx(
    "button",
    {
      id,
      className: "rounded-full bg-green-500 p-4",
      onClick: handleClick,
      children: isPlayingPlaylist ? /* @__PURE__ */ jsx(Pause, {}) : /* @__PURE__ */ jsx(Play, {})
    }
  );
};

const $$Astro = createAstro();
const $$PlayListItemCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PlayListItemCard;
  const { playlist } = Astro2.props;
  const { id, cover, color, artists, title, albumId } = playlist;
  const artistsString = artists.join(", ");
  return renderTemplate`${maybeRenderHead()}<article class="group relative hover:bg-zinc-800 shadow-lg hover:shadow-xl bg-zinc-500/30 rounded-md transition-all duration-300"> <div class="absolute right-4 bottom-20 traslate-y-4 transition-all duration-500 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 z-10"> ${renderComponent($$result, "CardPlayButton", CardPlayButton, { "id": playlist.id, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@/components/CardPlayButton.jsx", "client:component-export": "CardPlayButton" })} </div> <a${addAttribute(`/playlist/${id}`, "href")} class="playlist-item transition-all duration-300 flex relative p-2 overflow-hidden gap-2 pb-6 w-44 flex-col"${addAttribute(renderTransition($$result, "iyk6g74u", "", `playlist ${id} box`), "data-astro-transition-scope")}> <picture class="aspect-square h-auto w-full flex-none"> <img${addAttribute(cover, "src")}${addAttribute(`Cover of ${title} by ${artistsString}`, "alt")} class="object-cover w-full h-full rounded-md"${addAttribute(renderTransition($$result, "ogeug6cu", "", `playlist ${id} image`), "data-astro-transition-scope")}> </picture> <div class="flex flex-auto flex-col px-2"> <h4 class="text-sm"${addAttribute(renderTransition($$result, "ls2g7uvg", "", `playlist ${id} title`), "data-astro-transition-scope")}>${title}</h4> <span class="text-gray-400 text-xs"${addAttribute(renderTransition($$result, "dhifvp3a", "", `playlist ${id} artists`), "data-astro-transition-scope")}>${artistsString}</span> </div> </a> </article>`;
}, "C:/Users/Facundo/Desktop/spotify-clone-app/src/components/PlayListItemCard.astro", "self");

/** @returns {void} */

function run(fn) {
	return fn();
}

function blank_object() {
	return Object.create(null);
}

/**
 * @param {Function[]} fns
 * @returns {void}
 */
function run_all(fns) {
	fns.forEach(run);
}

let current_component;

/** @returns {void} */
function set_current_component(component) {
	current_component = component;
}

const ATTR_REGEX = /[&"]/g;
const CONTENT_REGEX = /[&<]/g;

/**
 * Note: this method is performance sensitive and has been optimized
 * https://github.com/sveltejs/svelte/pull/5701
 * @param {unknown} value
 * @returns {string}
 */
function escape(value, is_attr = false) {
	const str = String(value);
	const pattern = is_attr ? ATTR_REGEX : CONTENT_REGEX;
	pattern.lastIndex = 0;
	let escaped = '';
	let last = 0;
	while (pattern.test(str)) {
		const i = pattern.lastIndex - 1;
		const ch = str[i];
		escaped += str.substring(last, i) + (ch === '&' ? '&amp;' : ch === '"' ? '&quot;' : '&lt;');
		last = i + 1;
	}
	return escaped + str.substring(last);
}

let on_destroy;

/** @returns {{ render: (props?: {}, { $$slots, context }?: { $$slots?: {}; context?: Map<any, any>; }) => { html: any; css: { code: string; map: any; }; head: string; }; $$render: (result: any, props: any, bindings: any, slots: any, context: any) => any; }} */
function create_ssr_component(fn) {
	function $$render(result, props, bindings, slots, context) {
		const parent_component = current_component;
		const $$ = {
			on_destroy,
			context: new Map(context || (parent_component ? parent_component.$$.context : [])),
			// these will be immediately discarded
			on_mount: [],
			before_update: [],
			after_update: [],
			callbacks: blank_object()
		};
		set_current_component({ $$ });
		const html = fn(result, props, bindings, slots);
		set_current_component(parent_component);
		return html;
	}
	return {
		render: (props = {}, { $$slots = {}, context = new Map() } = {}) => {
			on_destroy = [];
			const result = { title: '', head: '', css: new Set() };
			const html = $$render(result, props, {}, $$slots, context);
			run_all(on_destroy);
			return {
				html,
				css: {
					code: Array.from(result.css)
						.map((css) => css.code)
						.join('\n'),
					map: null // TODO
				},
				head: result.title + result.head
			};
		},
		$$render
	};
}

/* C:/Users/Facundo/Desktop/spotify-clone-app/src/components/Greetings.svelte generated by Svelte v4.2.18 */

const Greetings = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	const currentTime = /* @__PURE__ */ new Date();
	const currentHour = currentTime.getHours();
	let greetings = "";

	if (currentHour < 12) {
		greetings = "Buenos d\xEDas";
	} else if (currentHour < 20) {
		greetings = "Buenas tardes";
	} else {
		greetings = "Buenas noches";
	}

	return `<h1 class="text-3xl font-bold">${escape(greetings)}</h1>`;
});

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Spotify Clone" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="playlist-container" class="relative transition-all duration-1000 bg-green-600"> <!-- PAGE HEADER --> <div class="relative z-10 px-6 pt-10"> <!-- GREETINGS --> ${renderComponent($$result2, "Greetings", Greetings, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/Greetings.svelte", "client:component-export": "default" })} <div class="flex flex-warp mt-6 gap-4"> ${playlists.map((playlist) => renderTemplate`${renderComponent($$result2, "PlayListItemCard", $$PlayListItemCard, { "playlist": playlist })}`)} </div> </div> <div class="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80"></div> </div> ` })} `;
}, "C:/Users/Facundo/Desktop/spotify-clone-app/src/pages/index.astro", void 0);

const $$file = "C:/Users/Facundo/Desktop/spotify-clone-app/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
