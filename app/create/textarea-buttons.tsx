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
    title: "Bold text",
    icon: <Bold />,
    symbol: "****",
    offset: 2,
  },
  {
    title: "Italic text",
    icon: <Italic />,
    symbol: "**",
    offset: 1,
  },
  {
    title: "Link text",
    icon: <Link />,
    symbol: "[](url)",
    offset: 6,
  },
  {
    title: "Ordered list",
    icon: <ListOrdered />,
    symbol: "1. ",
    offset: 0,
  },
  {
    title: "Unordered list",
    icon: <List />,
    symbol: "- ",
    offset: 0,
  },
  {
    title: "Quote",
    icon: <Quote />,
    symbol: "> ",
    offset: 0,
  },
  {
    title: "Block of code",
    icon: <Code />,
    symbol: "``````",
    offset: 3,
  },
  {
    title: "Image",
    icon: <Image />,
    symbol: "![](image_url)",
    offset: 12,
  },
];

export const textAreaHeadingButtons: textAreaButtonsT = [
  { title: "Heading1", icon: <Heading1 />, symbol: "#", offset: 0 },
  { title: "Heading2", icon: <Heading2 />, symbol: "##", offset: 0 },
  { title: "Heading3", icon: <Heading3 />, symbol: "###", offset: 0 },
  { title: "Heading4", icon: <Heading4 />, symbol: "####", offset: 0 },
  { title: "Heading5", icon: <Heading5 />, symbol: "#####", offset: 0 },
  { title: "Heading6", icon: <Heading6 />, symbol: "######", offset: 0 },
];
