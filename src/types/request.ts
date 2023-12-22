export enum httpMethod {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE",
    PATCH = "PATCH",
  }
  
  export interface RequestData {
    type: httpMethod; 
    endpoint: string;
    body?: Record<string, unknown> | string; 
    params?: Record<string, unknown>; 
    id?: string | number; 
    headers?: Record<string, string>; 
  }
  
  export interface RequestError {
    data?: unknown[]; 
    status: number;
    statusText: string;
  }
    