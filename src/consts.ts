export const SITE_TITLE = "满";
export const SITE_DESCRIPTION =
  `Portfolio · Android / Desktop / Game`.trim();

export const KNOWN_TECH =
  `Kotlin,Compose,Android,Electron,HTML,CSS,JavaScript,Tailwind,Astro,Git,Python,AI工具`.split(
    ",",
  );
export const ABOUT_ME =
  `喜欢折腾。从 Android 上线到 Electron 桌面端，再到 AI 工具链，什么都想试试。目前在做自己的小项目。`.trim();
export const GITHUB_USERNAME = "JIEFENG7464";
export const QUOTE = "生命好似宴席，滴酒不沾太亏\n但也不能喝的烂醉\n身上的西装扒下来容易，心里的西装扒下来就难了";
export const NAV_LINKS: Array<{ title: string; href?: string }> = [
  {
    title: "Projects",
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
