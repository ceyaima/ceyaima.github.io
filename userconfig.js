// User configuration for the startpage - update the palette, location, and your preferred tabs, categories, and links

// Define preferred palette for light and dark mode
// Available themes: latte, frappe, mocha, macchiato
const preferredLightTheme = latte;
const preferredDarkTheme = mocha;

let palette = initThemeSystem(preferredLightTheme, preferredDarkTheme);

const default_configuration = {
  overrideStorage: true,
  temperature: {
    location: "Jakarta",
    scale: "C",
  },
  clock: {
    format: "h:i P",
    icon_color: palette.maroon,
  },
  additionalClocks: [
    {
      label: "HK",
      timezone: "Asia/Hong_Kong",
      format: "h:i",
      icon_color: palette.peach,
    },
  ],
  search: {
    engines: {
      p: ["https://www.perplexity.ai/search/?q=", "PerplexityAI"],
      d: ["https://duckduckgo.com/?q=", "DuckDuckGo"],
      g: ["https://google.com/search?q=", "Google"],
    },
    default: "g",
  },
  keybindings: {
    "s": "search-bar",
  },
  disabled: [],
  localIcons: true,
  localFonts: true,
  fastlink: "https://www.chat.deepseek.com/",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "病気",
      background_url: "src/img/banners/banner_09.gif",
      categories: [
        {
          name: "アニメ",
          links: [
            {
              name: "watch",
              url: "https://animepahe.ru",
              icon: "player-play",
              icon_color: palette.maroon,
            },
            {
              name: "track",
              url: "https://anilist.me/croixph",
              icon: "pencil-plus",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "描く",
          links: [
            {
              name: "thread",
              url: "https://anilist.co/forum/thread/81749",
              icon: "needle-thread",
              icon_color: palette.peach,
            },
            {
              name: "database",
              url: "https://docs.google.com/spreadsheets/d/1JndPm9jyhTHiMvDwBypA02HwRz9Epe5gheHwK43RapQ/edit?usp=sharing",
              icon: "database",
              icon_color: palette.green,
            },
            {
              name: "album",
              url: "https://imgur.com/a/croixphs-badges-ctrl-f-character-name-NsDvcaq",
              icon: "photo",
              icon_color: palette.teal,
            },
            {
              name: "archive",
              url: "https://drive.google.com/drive/u/3/folders/1tQNxuEdGAFS-1_GIhLmM0cO7Z_MUTiPP",
              icon: "brand-google-drive",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "挑戦",
          links: [
            {
              name: "enlist",
              url: "https://anilist.co/activity/26266744",
              icon: "login-2",
              icon_color: palette.green,
            },
            {
              name: "casefiles",
              url: "https://imgur.com/a/awc-stuff-bqoADrf",
              icon: "folder-open",
              icon_color: palette.teal,
            },
            {
              name: "calculator",
              url: "https://awc.moe/calculators",
              icon: "calculator",
              icon_color: palette.blue,
            },
            {
              name: "submit",
              url: "https://anilist.co/forum/thread/38857",
              icon: "flag-3",
              icon_color: palette.red,
            },
          ],
        },
      ],
    },
    {
      name: "other",
      background_url: "src/img/banners/banner_07.gif",
      categories: [
        {
          name: "study",
          links: [
            {
              name: "e-student",
              url: "https://www38.polyu.edu.hk/eStudent/",
              icon: "school",
              icon_color: palette.maroon,
            },
            {
              name: "gen-ai",
              url: "https://genai.polyu.edu.hk/",
              icon: "brain",
              icon_color: palette.teal,
            }
          ],
        },
        {
          name: "scans",
          links: [
            {
              name: "drive",
              url: "https://drive.google.com/drive/u/2/starred",
              icon: "brand-google-drive",
              icon_color: palette.green,
            },
            {
              name: "asylum",
              url: "https://docs.google.com/spreadsheets/d/1rWQqiLt4pN_NzSBI5xZ4bWB7qiZDVJ6w/edit?gid=1511134320#gid=1511134320",
              icon: "file-spreadsheet",
              icon_color: palette.rosewater,
            },
            {
              name: "gg",
              url: "https://docs.google.com/spreadsheets/u/2/d/1pBTrOZse-MaisXVEJTmPbKo7huZoL90syVSXJlFt2QU/edit?usp=drive_web&ouid=108792894511475168143",
              icon: "file-spreadsheet",
              icon_color: palette.flamingo,
            },
          ],
        },
        {
          name: "resources",
          links: [
            {
              name: "avast-ye",
              url: "https://rentry.co/megathread",
              icon: "blockquote",
              icon_color: palette.yellow,
            },
            {
              name: "otsu",
              url: "https://wotaku.wiki/",
              icon: "planet",
              icon_color: palette.sapphire,
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_configuration, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.green);
