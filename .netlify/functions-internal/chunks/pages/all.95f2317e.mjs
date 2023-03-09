import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, d as addAttribute, e as renderHead, f as renderSlot } from '../astro.002c97bc.mjs';
import 'html-escaper';
/* empty css                           */
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate(_a || (_a = __template(["", '<footer class="footer astro-SZ7XMLTE">\n    <div class="waves astro-SZ7XMLTE">\n      <div class="wave astro-SZ7XMLTE" id="wave1"></div>\n      <div class="wave astro-SZ7XMLTE" id="wave2"></div>\n      <div class="wave astro-SZ7XMLTE" id="wave3"></div>\n      <div class="wave astro-SZ7XMLTE" id="wave4"></div>\n    </div>\n    <ul class="social-icon astro-SZ7XMLTE">\n      <li class="social-icon__item astro-SZ7XMLTE"><a class="social-icon__link astro-SZ7XMLTE" href="#">\n          ', '\n        </a></li>\n    </ul>\n    <ul class="menu astro-SZ7XMLTE">\n      <li class="menu__item astro-SZ7XMLTE"><a class="menu__link astro-SZ7XMLTE" href="#">Home</a></li>\n      <li class="menu__item astro-SZ7XMLTE"><a class="menu__link astro-SZ7XMLTE" href="#">About</a></li>\n      <li class="menu__item astro-SZ7XMLTE"><a class="menu__link astro-SZ7XMLTE" href="#">Team</a></li>\n      <li class="menu__item astro-SZ7XMLTE"><a class="menu__link astro-SZ7XMLTE" href="#">Contact</a></li>\n\n    </ul>\n    <p class="astro-SZ7XMLTE">&copy;2023 MHS CS Club | All Rights Reserved</p>\n  </footer>\n  <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"><\/script>\n  <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"><\/script>'])), maybeRenderHead($$result), renderComponent($$result, "ion-icon", "ion-icon", { "name": "logo-twitter", "class": "astro-SZ7XMLTE" }));
}, "/workspaces/cs-club-website/src/components/Footer.astro");

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width">
		<link rel="icon" type="image/svg+xml" href="/favicon.svg">
		<meta name="generator"${addAttribute(Astro2.generator, "content")}>
		<title>${title}</title>
	${renderHead($$result)}</head>
	<body>
		${renderSlot($$result, $$slots["default"])}
		${renderComponent($$result, "Footer", $$Footer, {})}
	</body></html>`;
}, "/workspaces/cs-club-website/src/layouts/Layout.astro");

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Landing Page.", "class": "astro-J7PV25F6" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<main class="astro-J7PV25F6">
		<h1 class="astro-J7PV25F6">Landing <span class="text-gradient astro-J7PV25F6">Page</span></h1>
		<p class="instructions astro-J7PV25F6">
			To get started, open the directory <code class="astro-J7PV25F6">src/pages</code> in your project.<br class="astro-J7PV25F6">
		</p>
                <p class="astro-J7PV25F6"> This is text. </p>
	</main>` })}`;
}, "/workspaces/cs-club-website/src/pages/index.astro");

const $$file = "/workspaces/cs-club-website/src/pages/index.astro";
const $$url = "";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page0 as _ };
