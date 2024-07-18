export interface Blog {
  id: number;
  title: string;
  date: string;
  tag: string;
  author: string;
  description: string;
  visited?: boolean;
  favorite?: boolean;
  backgroundColor: string;
  headlineImageUrl: string;
}
