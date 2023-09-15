export enum Action_Types {
  LIKE = "like",
  COMMENT = "comment",
  SHARE = "share",
  SAVE = "save",
}

export const Action_Buttons = [
  {
    id: Action_Types.LIKE,
    inactiveIcon: "assets/svg/community/like.svg",
    activeIcon: "assets/svg/community/like.svg",
  },
  {
    id: Action_Types.COMMENT,
    inactiveIcon: "assets/svg/community/comment.svg",
    activeIcon: "assets/svg/community/comment.svg",
  },
  {
    id: Action_Types.SHARE,
    inactiveIcon: "assets/svg/community/share.svg",
    activeIcon: "assets/svg/community/share.svg",
  },
  {
    id: Action_Types.SAVE,
    inactiveIcon: "assets/svg/community/save.svg",
    activeIcon: "assets/svg/community/save.svg",
  },
];

export const dummyPosts = [
  {
    author: {
      avatar:
        "https://images.unsplash.com/photo-1508184964240-ee96bb9677a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2814&q=80",
      name: "Kanmani",
      place: "Kochi",
    },
    id: "2332ed",
    content:
      "Greetings - I have kept pothos cuttings in water for many years and just now found out I should have been using fertilizer in the water. Please don't call the plant police! I have 2 quick questions:Should I use the fertilizer (I just purchased MARPHYL Organic Liquid Hydroponics Fertilizer) for the new cuttings I just took? Not sure if using will damage them.I want to thin out the existing pothos cuttings and prepare a new container. Can I cut the roots back to separate them? Should I trim the roots to get rid of the huge amounts I have? And lastly, if I do cut roots, should I add fertilizer right away or wait?I have lots of research to do on hydroponics so I am more successful this time around. I can feel the dirty looks from the pothos that no longer have leaves on them",
    images: [
      {
        src: "https://plus.unsplash.com/premium_photo-1661880452033-a41bd5e32eae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3435&q=80",
      },
      {
        src: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
      },
      {
        src: "https://images.unsplash.com/photo-1588426041836-95baa7321a84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3024&q=80",
      },
      {
        src: "https://images.unsplash.com/photo-1588426041836-95baa7321a84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3024&q=80",
      },
    ],
  },
];
