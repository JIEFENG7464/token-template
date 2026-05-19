export const SITE_TITLE = "满";
export const SITE_DESCRIPTION =
  `个人作品集 · Android / 前端 / 游戏`.trim();

export const KNOWN_TECH =
  `Kotlin,Compose,Android,Electron,HTML,CSS,JavaScript,Tailwind,Astro,Git,Python,AI工具`.split(
    ",",
  );
export const ABOUT_ME =
  `自学编程，喜欢折腾。从 Android 上线到 Electron 桌面端，从纯前端到 AI 工具链，什么都想试试。目前在做自己的小项目。`.trim();
export const GITHUB_USERNAME = "JIEFENG7464";
export const QUOTE = "瞎折腾の业余选手";
export const NAV_LINKS: Array<{ title: string; href?: string }> = [
  {
    title: "项目",
    href: "#projects",
  },
  {
    title: "Articles",
    href: "articles",
  },
  {
    title: "Github",
    href: "//github.com/" + GITHUB_USERNAME,
  },
];

// Must match base in astro.config.mjs
export const BASE_PATH = "/blog/";
