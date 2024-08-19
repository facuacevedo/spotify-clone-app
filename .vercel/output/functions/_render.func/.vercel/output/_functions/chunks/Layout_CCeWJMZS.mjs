import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, f as renderSlot, b as createAstro, d as renderComponent, g as renderHead, e as renderTransition } from './astro/server_BeUFYnCP.mjs';
import 'kleur/colors';
import { clsx } from 'clsx';
import { p as playlists } from './data_DzfnhoHe.mjs';
/* empty css                         */
import { jsxs, jsx } from 'react/jsx-runtime';
import { create } from 'zustand';
import * as React from 'react';
import { useRef, useEffect } from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';
import { twMerge } from 'tailwind-merge';

const $$Astro$3 = createAstro();
const $$SideMenuItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$SideMenuItem;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li> <a class="flex gap-4 text-zinc-400 hover:text-zinc-100 items-center py-3 px-5 font-medium transition duration-300"${addAttribute(href, "href")}> ${renderSlot($$result, $$slots["default"])} </a> </li>`;
}, "C:/Users/Facundo/Desktop/spotify-clone-app/src/components/SideMenuItem.astro", void 0);

const $$Astro$2 = createAstro();
const $$SideMenuCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SideMenuCard;
  const { playlist } = Astro2.props;
  const { id, cover, color, artists, title, albumId } = playlist;
  const artistsString = artists.join(", ");
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/playlist/${id}`, "href")} class="playlist-item flex relative p-2 overflow-hidden items-center gap-4 rounded-md hover:bg-zinc-800"> <picture class="h-12 w-12 flex-none"> <img${addAttribute(cover, "src")}${addAttribute(`Cover of ${title} by ${artistsString}`, "alt")} class="object-cover w-full h-full rounded-md"> </picture> <div class="flex flex-auto flex-col truncate"> <h4 class="text-sm">${title}</h4> <span class="text-gray-400 text-xs">${artistsString}</span> </div> </a>`;
}, "C:/Users/Facundo/Desktop/spotify-clone-app/src/components/SideMenuCard.astro", void 0);

const $$Library = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path></svg>`;
}, "C:/Users/Facundo/Desktop/spotify-clone-app/src/icons/Library.astro", void 0);

const $$Home = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path d="M12.5 3.247a1 1 0 0 0-1 0L4 7.577V20h4.5v-6a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v6H20V7.577l-7.5-4.33zm-2-1.732a3 3 0 0 1 3 0l7.5 4.33a2 2 0 0 1 1 1.732V21a1 1 0 0 1-1 1h-6.5a1 1 0 0 1-1-1v-6h-3v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.577a2 2 0 0 1 1-1.732l7.5-4.33z"></path></svg>`;
}, "C:/Users/Facundo/Desktop/spotify-clone-app/src/icons/Home.astro", void 0);

const $$Search = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 1 0 1.414-1.414l-4.344-4.344a9.157 9.157 0 0 0 2.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z"></path></svg>`;
}, "C:/Users/Facundo/Desktop/spotify-clone-app/src/icons/Search.astro", void 0);

const $$AsideMenu = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="flex flex-col flex-1 gap-2"> <div class="bg-zinc-900 rounded-lg p-2"> <ul> ${renderComponent($$result, "SideMenuItem", $$SideMenuItem, { "href": "/#" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Home", $$Home, {})}
Inicio
` })} ${renderComponent($$result, "SideMenuItem", $$SideMenuItem, { "href": "/#" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Search", $$Search, {})}
Buscar
` })} </ul> </div> <div class="bg-zinc-900 rounded-lg p-2 flex-1"> <ul> ${renderComponent($$result, "SideMenuItem", $$SideMenuItem, { "href": "/#" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Library", $$Library, {})}
Tu biblioteca
` })} ${playlists.map((playlist) => renderTemplate`${renderComponent($$result, "SideMenuCard", $$SideMenuCard, { "playlist": playlist })}`)} </ul> </div> </nav>`;
}, "C:/Users/Facundo/Desktop/spotify-clone-app/src/components/AsideMenu.astro", void 0);

const $$Astro$1 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/Facundo/Desktop/spotify-clone-app/node_modules/astro/components/ViewTransitions.astro", void 0);

const usePlayerStore = create((set) => ({
  isPlaying: false,
  currentMusic: { playlist: null, song: null, songs: [] },
  setIsPlaying: (isPlaying) => {
    set({ isPlaying });
  },
  setCurrentMusic: (currentMusic) => {
    set({ currentMusic });
  },
}));

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Slider = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxs(
  SliderPrimitive.Root,
  {
    ref,
    className: cn(
      "relative flex w-full touch-none select-none items-center",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx(SliderPrimitive.Track, { className: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-green-600/20 dark:bg-gray-50/20", children: /* @__PURE__ */ jsx(SliderPrimitive.Range, { className: "absolute h-full bg-green-600 dark:bg-gray-50" }) }),
      /* @__PURE__ */ jsx(SliderPrimitive.Thumb, { className: "block h-4 w-4 rounded-full border border-gray-200 border-gray-900/50 bg-white shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-50/50 dark:bg-gray-950 dark:focus-visible:ring-gray-300" })
    ]
  }
));
Slider.displayName = SliderPrimitive.Root.displayName;

const Pause = ({ className }) => /* @__PURE__ */ jsx(
  "svg",
  {
    className,
    role: "img",
    height: "16",
    width: "16",
    "aria-hidden": "true",
    viewBox: "0 0 16 16",
    children: /* @__PURE__ */ jsx("path", { d: "M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z" })
  }
);
const Play = ({ className }) => /* @__PURE__ */ jsx(
  "svg",
  {
    className,
    role: "img",
    height: "16",
    width: "16",
    "aria-hidden": "true",
    viewBox: "0 0 16 16",
    children: /* @__PURE__ */ jsx("path", { d: "M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z" })
  }
);
const CurrentSong = ({ image, title, artists }) => {
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-5 relative overflow-hidden", children: [
    /* @__PURE__ */ jsx("picture", { className: "w-16 h-16 bg-zinc-500 rounded-md shadow-lg overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: image, alt: title }) }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h3", { className: "font-semibold text-sm block", children: title }),
      /* @__PURE__ */ jsx("span", { className: "text-xs opacity-80", children: artists?.join(", ") })
    ] })
  ] });
};
const Player = () => {
  const { currentMusic, isPlaying, setIsPlaying } = usePlayerStore(
    (state) => state
  );
  const audioRef = useRef();
  const volumeRef = useRef(1);
  useEffect(() => {
    isPlaying ? audioRef.current.play() : audioRef.current.pause();
  }, [isPlaying]);
  useEffect(() => {
    const { song, playlist, songs } = currentMusic;
    if (song) {
      const src = `/music/${playlist?.id}/0${song.id}.mp3`;
      audioRef.current.src = src;
      audioRef.current.volume = volumeRef.current;
      audioRef.current.play();
    }
  }, [currentMusic]);
  const handleClick = () => {
    setIsPlaying(!isPlaying);
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-row justify-between w-full px-4 z-50", children: [
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(CurrentSong, { ...currentMusic.song }) }),
    /* @__PURE__ */ jsx("div", { className: "grid place-content-center gap-4 flex-1", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-center", children: [
      /* @__PURE__ */ jsx("button", { className: "bg-white rounded-full p-2", onClick: handleClick, children: isPlaying ? /* @__PURE__ */ jsx(Pause, {}) : /* @__PURE__ */ jsx(Play, {}) }),
      /* @__PURE__ */ jsx("audio", { ref: audioRef })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "grid place-content-center", children: /* @__PURE__ */ jsx(
      Slider,
      {
        defaultValue: [100],
        max: 100,
        min: 0,
        className: "w-[95px] cursor-pointer slate-50",
        onValueChange: (value) => {
          const [newVolume] = value;
          const volumeValue = newVolume / 100;
          volumeRef.current = volumeValue;
          audioRef.current.volume = volumeValue;
        }
      }
    ) })
  ] });
};

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, { "fallback": "none", "data-astro-cid-sckkx6r4": true })}${renderHead()}</head> <body data-astro-cid-sckkx6r4> <div id="app" class="relative h-screen p-2 gap-2" data-astro-cid-sckkx6r4> <aside class="[grid-area:aside flex-col flex overflow-y-auto" data-astro-cid-sckkx6r4> ${renderComponent($$result, "AsideMenu", $$AsideMenu, { "data-astro-cid-sckkx6r4": true })} </aside> <main class="[grid-area:main] rounded-lg bg-zinc-900 overflow-y-auto" data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </main> <footer class="[grid-area:player] p-1" data-astro-cid-sckkx6r4> ${renderComponent($$result, "Player", Player, { "client:load": true, "data-astro-transition-persist": "media-player", "client:component-hydration": "load", "client:component-path": "@/components/Player.jsx", "client:component-export": "Player", "data-astro-cid-sckkx6r4": true, "data-astro-transition-scope": renderTransition($$result, "p74ezckc", "", "media-player") })} </footer> </div>  </body></html>`;
}, "C:/Users/Facundo/Desktop/spotify-clone-app/src/layouts/Layout.astro", "self");

export { $$Layout as $, Pause as P, Play as a, usePlayerStore as u };
