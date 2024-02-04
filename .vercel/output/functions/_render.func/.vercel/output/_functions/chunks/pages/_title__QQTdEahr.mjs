/* empty css                               */
import 'html-escaper';
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderComponent, g as renderHead, h as renderSlot } from '../astro_2TvlQJEG.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                               */

const $$Astro$4 = createAstro();
const $$Navbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Navbar;
  return renderTemplate`${maybeRenderHead()}<nav class="bg-gray-800"> <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"> <div class="relative flex h-16 items-center justify-between"> <div class="absolute inset-y-0 left-0 flex items-center sm:hidden"> <!-- Mobile menu button--> <button type="button" id="btn-mobile-menu" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false"> <span class="absolute -inset-0.5"></span> <span class="sr-only">Open main menu</span> <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path> </svg> <!--
           Icon when menu is open.

           Menu open: "block", Menu closed: "hidden"
         --> <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> </div> <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"> <div class="hidden sm:block"> <div class="flex space-x-4"> <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> <a href="/" class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">SHORTLINKS</a> <a href="/signin" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Sign In</a> <a href="/signup" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Sign Up</a> </div> </div> </div> <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"> <button type="button" class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"> <span class="absolute -inset-1.5"></span> <span class="sr-only">View notifications</span> <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"></path> </svg> </button> <div class="relative ml-3"> <div> <a${addAttribute(Astro2.url.origin + "/me", "href")} class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 text-gray-400 hover:text-white"> <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"> <path d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </svg> </a> </div> </div> </div> </div> </div> <!-- Mobile menu, show/hide based on menu state. --> <div class="sm:hidden" id="mobile-menu"> <div class="space-y-1 px-2 pb-3 pt-2"> <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> <a href="/" class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">SHORTLINKS</a> <a href="/signin" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Sign In</a> <a href="/signup" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Sign Up</a> </div> </div> </nav> `;
}, "C:/Users/Dell Latitude 3400/OneDrive/Documentos/repositorio/shortlinks-frontend/src/components/Navbar.astro", void 0);

const $$Astro$3 = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/Dell Latitude 3400/OneDrive/Documentos/repositorio/shortlinks-frontend/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$2 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta charset="UTF-8"><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body> ${renderComponent($$result, "Navbar", $$Navbar, {})} ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/Dell Latitude 3400/OneDrive/Documentos/repositorio/shortlinks-frontend/src/layouts/Layout.astro", void 0);

const isMessageErrors = (msg) => {
  if (msg && typeof msg === "object") {
    if (Array.isArray(msg.errors)) {
      return msg.errors.every(
        (error) => typeof error.type === "string" && typeof error.value === "string" && typeof error.msg === "string" && typeof error.path === "string" && typeof error.location === "string"
      );
    }
  }
  return false;
};

const API_URL_BASE = "";
const getLinkByUser = async (_user) => {
  const { token, user } = JSON.parse(_user);
  const res = await fetch(
    API_URL_BASE + "api/links/user/" + user._id,
    { headers: { "Content-Type": "application/json", "x-token": token } }
  );
  const data = await res.json();
  if (!isMessageErrors(data)) {
    return data.links;
  }
  return [];
};
const getLinksByTitle = async ({ title }) => {
  const res = await fetch(API_URL_BASE + title.trim());
  const data = await res.json();
  return data;
};

const $$Astro$1 = createAstro();
const prerender$1 = false;
const $$title$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$title$1;
  const { title } = Astro2.params;
  const data = title && await getLinksByTitle({ title });
  if (!data.url)
    return Astro2.redirect("/404");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Edit" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8"> <div class="sm:mx-auto sm:w-full sm:max-w-sm"> <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-200">
Edit my Link
</h2> </div> <input id="txt-id-link" class="hidden"${addAttribute(data.id, "value")}> <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm"> <form id="form" class="space-y-6"> <div> <label class="block text-sm font-medium leading-6 text-gray-200">Title</label> <div class="mt-2"> <input type="text" id="txt-title"${addAttribute(title, "value")} required placeholder="Example: my_new_url" pattern="[a-zA-Z0-9_]+" title="Only accepts numbers, letters and '_'" class="block w-full rounded-md border-0 p-1.5 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6 bg-gray-900"> </div> </div> <div> <div class="flex items-center justify-between"> <label class="block text-sm font-medium leading-6 text-gray-200">URL</label> </div> <div class="mt-2"> <input type="text"${addAttribute(data.url, "value")} placeholder="Example: https://www.linkedin.com/" required id="txt-url" class="block w-full rounded-md border-0 p-1.5 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6 bg-gray-900"> </div> </div> <div> <button type="submit" id="btn-create" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Update</button> </div> </form> </div> </div> ` })} `;
}, "C:/Users/Dell Latitude 3400/OneDrive/Documentos/repositorio/shortlinks-frontend/src/pages/link/edit/[title].astro", void 0);

const $$file$1 = "C:/Users/Dell Latitude 3400/OneDrive/Documentos/repositorio/shortlinks-frontend/src/pages/link/edit/[title].astro";
const $$url$1 = "/link/edit/[title]";

const _title_$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$title$1,
  file: $$file$1,
  prerender: prerender$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const prerender = false;
const $$title = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$title;
  const { title } = Astro2.params;
  const { url } = title && await getLinksByTitle({ title });
  if (url)
    return Astro2.redirect(url);
  return Astro2.redirect("/notFound");
}, "C:/Users/Dell Latitude 3400/OneDrive/Documentos/repositorio/shortlinks-frontend/src/pages/s/[title].astro", void 0);

const $$file = "C:/Users/Dell Latitude 3400/OneDrive/Documentos/repositorio/shortlinks-frontend/src/pages/s/[title].astro";
const $$url = "/s/[title]";

const _title_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$title,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, _title_$1 as _, _title_ as a, getLinkByUser as g };
