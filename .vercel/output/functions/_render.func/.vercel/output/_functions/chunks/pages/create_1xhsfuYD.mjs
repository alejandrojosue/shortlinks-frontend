/* empty css                               */
import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro_2TvlQJEG.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from './_title__xCjsEa6n.mjs';

const $$Astro = createAstro();
const $$Create = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Create;
  if (!Astro2.cookies.get("user")?.value)
    return Astro2.redirect("/signin");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Create" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8"> <div class="sm:mx-auto sm:w-full sm:max-w-sm"> <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-200">
Create my Link
</h2> </div> <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm"> <form id="form" class="space-y-6"> <div> <label class="block text-sm font-medium leading-6 text-gray-200">Title</label> <div class="mt-2"> <input type="text" id="txt-title" required placeholder="Example: my_new_url" pattern="[a-zA-Z0-9_]+" title="Only accepts numbers, letters and '_'" class="block w-full rounded-md border-0 p-1.5 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6 bg-gray-900"> </div> </div> <div> <div class="flex items-center justify-between"> <label class="block text-sm font-medium leading-6 text-gray-200">URL</label> </div> <div class="mt-2"> <input type="text" placeholder="Example: https://www.linkedin.com/" required id="txt-url" class="block w-full rounded-md border-0 p-1.5 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6 bg-gray-900"> </div> </div> <div> <button type="submit" id="btn-create" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Create</button> </div> </form> </div> </div>  ` })} `;
}, "C:/Users/Dell Latitude 3400/OneDrive/Documentos/repositorio/shortlinks-frontend/src/pages/link/create.astro", void 0);

const $$file = "C:/Users/Dell Latitude 3400/OneDrive/Documentos/repositorio/shortlinks-frontend/src/pages/link/create.astro";
const $$url = "/link/create";

export { $$Create as default, $$file as file, $$url as url };
