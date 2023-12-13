type Route = {
  title: string;
  href: string;
  icon: string;
};

export const routes: Route[] = [
  {
    href: "/",
    title: "Home",
    icon: "home-icon.svg",
  },
  {
    href: "/news",
    title: "News",
    icon: "news-icon.svg",
  },
  {
    href: "/about",
    title: "About",
    icon: "about-icon.svg",
  },
  {
    href: "/tags",
    title: "Tags",
    icon: "tag-icon.png",
  },
  {
    href: "/faq",
    title: "FAQ",
    icon: "faq-icon.png",
  },
  {
    href: "/shop",
    title: "Shop",
    icon: "shop-icon.png",
  },
  {
    href: "/guides",
    title: "Guides",
    icon: "guides-icon.png",
  },
];
