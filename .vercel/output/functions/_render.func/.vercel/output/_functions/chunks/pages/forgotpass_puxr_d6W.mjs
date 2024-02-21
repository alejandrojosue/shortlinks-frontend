/* empty css                               */
import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro_2TvlQJEG.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from './_title__xCjsEa6n.mjs';

const $$Astro = createAstro();
const $$Forgotpass = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Forgotpass;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Sign In" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8"> <div class="sm:mx-auto sm:w-full sm:max-w-sm"> <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company"> <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-200">
Sign in to your account
</h2> </div> <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm"> <form class="space-y-6" action="#" method="POST"> <div> <label for="email" class="block text-sm font-medium leading-6 text-gray-200">Email address</label> <div class="mt-2"> <input id="email" name="email" type="email" autocomplete="email" required placeholder="example: joe.doe@gmail.com" class="block w-full rounded-md border-0 p-1.5 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6 bg-gray-900"> </div> </div> <div> <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Send</button> </div> </form> </div> </div> ` })}`;
}, "C:/Users/Dell Latitude 3400/OneDrive/Documentos/repositorio/shortlinks-frontend/src/pages/forgotpass.astro", void 0);

const $$file = "C:/Users/Dell Latitude 3400/OneDrive/Documentos/repositorio/shortlinks-frontend/src/pages/forgotpass.astro";
const $$url = "/forgotpass";

export { $$Forgotpass as default, $$file as file, $$url as url };
