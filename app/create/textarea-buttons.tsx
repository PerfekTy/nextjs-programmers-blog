import {
  Bold,
  Code,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Image,
  Italic,
  Link,
  List,
  ListOrdered,
  Quote,
} from "lucide-react";

type textAreaButtonsT = {
  title: string;
  icon: React.ReactNode;
  symbol: string;
  offset: number;
}[];

export const textAreaButtons: textAreaButtonsT = [
  {
    title: "Bold",
    icon: <Bold size={22} />,
    symbol: "****",
    offset: 2,
  },
  {
    title: "Italic",
    icon: <Italic size={22} />,
    symbol: "**",
    offset: 1,
  },
  {
    title: "Link",
    icon: <Link size={22} />,
    symbol: "[](url)",
    offset: 6,
  },
  {
    title: "Ordered list",
    icon: <ListOrdered size={22} />,
    symbol: "1. ",
    offset: 0,
  },
  {
    title: "Unordered list",
    icon: <List size={22} />,
    symbol: "- ",
    offset: 0,
  },
  {
    title: "Quote",
    icon: <Quote size={22} />,
    symbol: "> ",
    offset: 0,
  },
  {
    title: "Code",
    icon: <Code size={22} />,
    symbol: "``````",
    offset: 3,
  },
  {
    title: "Image",
    icon: <Image size={22} />,
    symbol: "![](image_url)",
    offset: 12,
  },
];

export const textAreaHeadingButtons: textAreaButtonsT = [
  { title: "Heading 1", icon: <Heading1 size={22} />, symbol: "#", offset: 0 },
  { title: "Heading 2", icon: <Heading2 size={22} />, symbol: "##", offset: 0 },
  {
    title: "Heading 3",
    icon: <Heading3 size={22} />,
    symbol: "###",
    offset: 0,
  },
  {
    title: "Heading 4",
    icon: <Heading4 size={22} />,
    symbol: "####",
    offset: 0,
  },
  {
    title: "Heading 5",
    icon: <Heading5 size={22} />,
    symbol: "#####",
    offset: 0,
  },
  {
    title: "Heading 6",
    icon: <Heading6 size={22} />,
    symbol: "######",
    offset: 0,
  },
];
