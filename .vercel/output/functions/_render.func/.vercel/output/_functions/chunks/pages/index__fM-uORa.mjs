/* empty css                               */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderComponent } from '../astro_2TvlQJEG.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout, g as getLinkByUser } from './_title__0qQHlEP-.mjs';
/* empty css                          */

const $$Astro$3 = createAstro();
const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Card;
  const { href, title, body, target = "_self" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="link-card p-0.5 flex" data-astro-cid-dohjnao5> <a${addAttribute(href, "href")}${addAttribute(target, "target")} data-astro-cid-dohjnao5> <h2 data-astro-cid-dohjnao5> ${title} <span data-astro-cid-dohjnao5>&rarr;</span> </h2> <p class="break-words" data-astro-cid-dohjnao5> ${body} </p> </a> </li> `;
}, "C:/Users/Dell Latitude 3400/OneDrive/Documentos/repositorio/shortlinks-frontend/src/components/Card.astro", void 0);

const $$Astro$2 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$1;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to ShortLinks", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-j7pv25f6> <h1 class="pt-4" data-astro-cid-j7pv25f6>Welcome to <span class="text-gradient" data-astro-cid-j7pv25f6>Short Links</span></h1> <p class="instructions" data-astro-cid-j7pv25f6>
Welcome to <strong data-astro-cid-j7pv25f6>Short Links</strong>, your solution for smarter, friendlier links. Our link shortener simplifies long URLs into short, easy-to-remember links. Why complicate your life with kilometer links when you can share more effectively?
</p> <ul role="list" class="link-card-grid" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Card", $$Card, { "href": "/signin", "target": "_self", "title": "Sign in", "body": "Sign in quickly to your SHORTLINKS account and enjoy a personalized experience!", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Card", $$Card, { "href": "/signup", "target": "_self", "title": "Don't have an account yet?", "body": "Access exclusive content.Personalize your experience. Stay updated with the latest news.", "data-astro-cid-j7pv25f6": true })} </ul> </main> ` })} `;
}, "C:/Users/Dell Latitude 3400/OneDrive/Documentos/repositorio/shortlinks-frontend/src/pages/index.astro", void 0);

const $$file$1 = "C:/Users/Dell Latitude 3400/OneDrive/Documentos/repositorio/shortlinks-frontend/src/pages/index.astro";
const $$url$1 = "";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$1,
	file: $$file$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$CardLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CardLink;
  const { title, url } = Astro2.props;
  const { user } = JSON.parse(Astro2.cookies.get("user")?.value);
  return renderTemplate`${maybeRenderHead()}<article class="flex flex-col border shadow-lg hover:shadow-indigo-500/40 border-slate-400 rounded-lg p-2"> <div class="flex justify-between"> <p class="text-gray-400"> <span class="text-gray-500 font-semibold">${user?.name}</span>
@${user?.email.split("@")[0]} </p> <div class="leading-3 text-lg font-bold flex w-16 text-gray-400"> <!-- ••• --> <a${addAttribute(`${Astro2.url.origin}/link/edit/${title}`, "href")} target="_self" rel="noopener noreferrer"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"${addAttribute(title, "data-title")} fill="currentColor" class="btnEdit bi bi-pencil-fill hover:text-gray-300 hover:cursor-pointer" width="27" height="27"> <path d="M14.293 2.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-10 10a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.279-1.28l1-3a1 1 0 0 1 .242-.391l10-10zM16 5l-1-1L4.414 14.586l-.586 1.172 1.171-.585L16 6z"></path> </svg> </a> <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 btnCopy hover:text-gray-300 hover:cursor-pointer"${addAttribute(Astro2.url.origin, "data-url")}${addAttribute(title, "data-title")} viewBox="0 0 115.77 122.88" width="25" height="25" fill="currentColor"> <style type="text/css">
          .st0 {
            fill-rule: evenodd;
            clip-rule: evenodd;
          }
        </style> <g> <path class="st0" d="M89.62,13.96v7.73h12.19h0.01v0.02c3.85,0.01,7.34,1.57,9.86,4.1c2.5,2.51,4.06,5.98,4.07,9.82h0.02v0.02 v73.27v0.01h-0.02c-0.01,3.84-1.57,7.33-4.1,9.86c-2.51,2.5-5.98,4.06-9.82,4.07v0.02h-0.02h-61.7H40.1v-0.02 c-3.84-0.01-7.34-1.57-9.86-4.1c-2.5-2.51-4.06-5.98-4.07-9.82h-0.02v-0.02V92.51H13.96h-0.01v-0.02c-3.84-0.01-7.34-1.57-9.86-4.1 c-2.5-2.51-4.06-5.98-4.07-9.82H0v-0.02V13.96v-0.01h0.02c0.01-3.85,1.58-7.34,4.1-9.86c2.51-2.5,5.98-4.06,9.82-4.07V0h0.02h61.7 h0.01v0.02c3.85,0.01,7.34,1.57,9.86,4.1c2.5,2.51,4.06,5.98,4.07,9.82h0.02V13.96L89.62,13.96z M79.04,21.69v-7.73v-0.02h0.02 c0-0.91-0.39-1.75-1.01-2.37c-0.61-0.61-1.46-1-2.37-1v0.02h-0.01h-61.7h-0.02v-0.02c-0.91,0-1.75,0.39-2.37,1.01 c-0.61,0.61-1,1.46-1,2.37h0.02v0.01v64.59v0.02h-0.02c0,0.91,0.39,1.75,1.01,2.37c0.61,0.61,1.46,1,2.37,1v-0.02h0.01h12.19V35.65 v-0.01h0.02c0.01-3.85,1.58-7.34,4.1-9.86c2.51-2.5,5.98-4.06,9.82-4.07v-0.02h0.02H79.04L79.04,21.69z M105.18,108.92V35.65v-0.02 h0.02c0-0.91-0.39-1.75-1.01-2.37c-0.61-0.61-1.46-1-2.37-1v0.02h-0.01h-61.7h-0.02v-0.02c-0.91,0-1.75,0.39-2.37,1.01 c-0.61,0.61-1,1.46-1,2.37h0.02v0.01v73.27v0.02h-0.02c0,0.91,0.39,1.75,1.01,2.37c0.61,0.61,1.46,1,2.37,1v-0.02h0.01h61.7h0.02 v0.02c0.91,0,1.75-0.39,2.37-1.01c0.61-0.61,1-1.46,1-2.37h-0.02V108.92L105.18,108.92z"></path></g> </svg> </div> </div> <div class="py-2"> <p class="font-bold text-gray-300 text-2xl capitalize">${title}</p> <a${addAttribute(url, "href")} target="_blank" class="text-indigo-600 text-lg break-words">${Astro2.url.origin}/s/${title}</a> </div> </article> `;
}, "C:/Users/Dell Latitude 3400/OneDrive/Documentos/repositorio/shortlinks-frontend/src/components/CardLink.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const user = Astro2.cookies.get("user")?.value;
  const links = await getLinkByUser(user);
  if (!Astro2.cookies.get("user")?.value)
    return Astro2.redirect("/signin");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "me" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="p-4 text-white text-3xl font-bold text-center mb-10">
These are my <span class="text-gradient">Short Links</span> </h1> <a${addAttribute(Astro2.url.origin + "/link/create", "href")} class="text-blue-600 border border-blue-600 rounded-md hover:text-gray-200 hover:border-gray-500 p-3 mx-2 font-bold">Create New ShortLink</a> <main class="p-2 mt-5 grid gap-4"> <section class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"> ${links.map((link) => renderTemplate`${renderComponent($$result2, "CardLink", $$CardLink, { "title": link.title, "url": link.url })}`)} </section> </main> ` })} `;
}, "C:/Users/Dell Latitude 3400/OneDrive/Documentos/repositorio/shortlinks-frontend/src/pages/me/index.astro", void 0);

const $$file = "C:/Users/Dell Latitude 3400/OneDrive/Documentos/repositorio/shortlinks-frontend/src/pages/me/index.astro";
const $$url = "/me";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index as a, index$1 as i };
