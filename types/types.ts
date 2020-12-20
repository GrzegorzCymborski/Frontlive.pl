export type Variant = 'blue' | 'green' | 'orange' | 'yellow' | 'purple' | 'black';

export type Heading = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type Category = {
  readonly title: string;
  readonly path: string;
  readonly image: string;
  readonly variant: Variant;
};

type Frontmatter = {
  readonly title: string;
  readonly excerpt: string;
};

export type PostFrontmatter = {
  readonly category: string;
  readonly publishedAt: string;
  readonly popular: boolean;
  readonly isPublished: boolean;
  readonly image: string;
} & Frontmatter;

export type ProjectFrontmatter = {
  readonly path: string;
  readonly image: string;
  readonly variant: Variant;
  readonly technologies: string[];
  readonly imageOpenGraph: string;
} & Frontmatter;

export type Project = {
  readonly slug: string;
  readonly title: string;
  readonly excerpt: string;
  readonly image: string;
  readonly variant: Variant;
  readonly technologies: string[];
  readonly order: number;
};

export type Post = {
  readonly title: string;
  readonly category: string;
  readonly excerpt: string;
  readonly slug: string;
  readonly publishedAt: string;
  readonly popular: boolean;
  readonly isPublished: boolean;
  readonly imageOpenGraph: string;
};
