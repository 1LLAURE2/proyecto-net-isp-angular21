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

// api-response.model.ts
export interface ApiSuccessResponse<T> {
  code: number;
  status: 'success';
  message: string;
  data: T;
  meta?: Meta;
  links?: Links;
}

export interface ApiErrorResponse {
  code: number;
  status: 'error';
  message: string;
  data: null;
  errors?: any;
}

export type ApiResponse<T> = ApiSuccessResponse<T> | ApiErrorResponse;

export function isApiSuccess<T>(
  response: ApiResponse<T>
): response is ApiSuccessResponse<T> {
  return (response as ApiSuccessResponse<T>).status === 'success';
}
