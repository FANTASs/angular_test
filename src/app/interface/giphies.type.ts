export interface IGiphies {
  type: string;
  id: string;
  url: string;
  slug: string;
  bitly_gif_url: string;
  bitly_url: string;
  embed_url: string;
  username: string;
  source: string;
  title: string;
  rating: string;
  content_url: string;
  source_tld: string;
  source_post_url: string;
  id_sticker: number;
  import_datetime: Date;
  trending_datetime: Date;
  images: object;
  analytics: object;
}

export interface IPagination {
 total_count: number;
}

export interface IRes {
  data: Array<IGiphies>;
  pagination: IPagination;
}
