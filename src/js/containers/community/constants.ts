export enum COMMUNITY_TABS_NAMES {
  FORUM = "Forum",
  BLOG = "Blog",
  FAQ = "FAQ",
  TUTORIALS = "Tutorials",
  TIPS = "Tips",
  RECIPE = "Recipe",
}

export const COMMUNITY_TABS = [
  {
    name: COMMUNITY_TABS_NAMES.FORUM,
    src: "assets/img/community/forum.png",
    bg: "#FFF2EF",
  },
  {
    name: COMMUNITY_TABS_NAMES.BLOG,
    src: "assets/svg/community/blog.svg",
    bg: "#F1FDFF",
  },
  {
    name: COMMUNITY_TABS_NAMES.FAQ,
    src: "assets/svg/community/faq.svg",
    bg: "rgba(45, 131, 4, 0.05)",
  },
  {
    name: COMMUNITY_TABS_NAMES.TUTORIALS,
    src: "assets/svg/community/tutorials.svg",
    bg: "rgba(112, 62, 175, 0.05)",
  },
  {
    name: COMMUNITY_TABS_NAMES.TIPS,
    src: "assets/svg/community/tips.svg",
    bg: "#FFFBEB",
  },
  {
    name: COMMUNITY_TABS_NAMES.RECIPE,
    src: "assets/svg/community/recipe.svg",
    bg: "#FFF6FE",
  },
];
