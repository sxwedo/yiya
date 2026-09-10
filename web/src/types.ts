export type PageKind = "wiki" | "raw" | "meta";

export type CatalogPage = {
  path: string;
  title: string;
  description: string;
  type: string;
  domain: string;
  status: string;
  kind: PageKind;
  author: string;
  url: string;
  links: string[];
};

export type CatalogDomain = {
  id: string;
  title: string;
  path: string;
  counts: Record<string, number>;
};

export type Catalog = {
  generatedAt: string;
  domains: CatalogDomain[];
  pages: CatalogPage[];
};

export type Route =
  | { view: "home" }
  | { view: "dir"; folder: string }
  | { view: "page"; path: string };
