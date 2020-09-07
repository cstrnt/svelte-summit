import { yellow } from "@mdx-deck/themes";

export const theme = {
  ...yellow,
  googleFont:
    "https://fonts.googleapis.com/css?family=Fira+Mono&family=Overpass:ital,wght@1,400;1,700",
  fonts: {
    body: '"Overpass", system-ui, sans-serif',
    monospace: '"Fira Mono", monospace',
  },
  colors: {
    ...yellow.colors,
    background: "white",
    text: "#ff3e00",
  },
  styles: {
    pre: {
      padding: "2rem",
      color: "hsl(45deg 7% 45%)",
      bg: "#f6fafd",
    },
  },
};
