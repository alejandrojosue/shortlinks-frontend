/* empty css                               */
import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro_2TvlQJEG.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from './_title__xCjsEa6n.mjs';

const $$Astro = createAstro();
const $$Signup = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Signup;
  if (Astro2.cookies.get("user")?.value)
    return Astro2.redirect("/me");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Sign Up" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8"> <div class="sm:mx-auto sm:w-full sm:max-w-sm"> <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-200">
Sign Up with your information
</h2> </div> <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm"> <form id="form" class="space-y-6" method="POST"> <div> <label for="name" class="block text-sm font-medium leading-6 text-gray-200">Fullname</label> <div class="mt-2"> <input id="name" name="name" type="text" pattern="[A-Za-zÁÉÍÓÚáéíóúñÑ\s ']+" title="The name cannot include special characters or numbers." autocomplete="email" required minlength="6" placeholder="example: Joe Doe" class="block w-full rounded-md border-0 p-1.5 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6 bg-gray-900"> </div> </div> <div> <label for="email" class="block text-sm font-medium leading-6 text-gray-200">Email address</label> <div class="mt-2"> <input id="email" name="email" type="email" autocomplete="email" required placeholder="example: joe.doe@gmail.com" class="block w-full rounded-md border-0 p-1.5 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6 bg-gray-900"> </div> </div> <div> <div class="flex items-center justify-between"> <label for="password" class="block text-sm font-medium leading-6 text-gray-200">Password</label> <div class="text-sm"> <a href="#" class="hidden font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a> </div> </div> <div class="mt-2"> <input id="password" name="password" type="text" minlength="8" autocomplete="current-password" required placeholder="example: P@ssw0rd#12e" class="block w-full rounded-md border-0 p-1.5 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6 bg-gray-900"> </div> </div> <div> <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign Up</button> </div> </form> <p class="mt-10 text-center text-sm text-gray-500">
Are you a member?
<a href="/signin" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
Sign In now</a> </p> </div> </div> ` })} `;
}, "C:/Users/Dell Latitude 3400/OneDrive/Documentos/repositorio/shortlinks-frontend/src/pages/signup.astro", void 0);

const $$file = "C:/Users/Dell Latitude 3400/OneDrive/Documentos/repositorio/shortlinks-frontend/src/pages/signup.astro";
const $$url = "/signup";

export { $$Signup as default, $$file as file, $$url as url };
