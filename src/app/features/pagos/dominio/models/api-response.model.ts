export interface ApiResponse<T> {
  code: number;
  status: string;
  message: string;
  data: T;
  meta: Meta;
  links?: Links;
}

export interface Meta {
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
}

export interface Links {
  first: string;
  last: string;
  prev: string | null;
  next: string | null;
}
