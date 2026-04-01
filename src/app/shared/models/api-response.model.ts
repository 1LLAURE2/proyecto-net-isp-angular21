// api-response.model.ts
export interface ApiSuccessResponse<T> {
  code: number;
  status: 'success';
  message: string;
  data: T;
  meta?: any;
  links?: any;
}

export interface ApiErrorResponse {
  success: false;
  message: string;
  data: null;
  errors: string[];
}

export type ApiResponse<T> = ApiSuccessResponse<T> | ApiErrorResponse;

export function isApiSuccess<T>(
  response: ApiResponse<T>
): response is ApiSuccessResponse<T> {
  return (response as ApiSuccessResponse<T>).status === 'success';
}
