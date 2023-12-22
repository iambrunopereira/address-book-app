import { config } from '@/configs';
import { httpMethod } from '@/types';
import { request } from '@/utils/requestHandler';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';


interface RequestBody {
  [key: string]: unknown; 
}

interface RequestHeaders {
  [key: string]: string;
}
interface ApiResponse<T> {
  data: T;
  status: number;
}
const requestHandler = async (req: NextRequest, method: httpMethod, url: string, body: RequestBody,
  header: unknown) => {

    const cookieStore = cookies()

    const {value} = cookieStore.get('token') ?? {}

    const headerParams = value ? Object.assign({}, header, {
      'Content-Type': 'application/json',
      'Authorization': value
    }) : Object.assign({}, header, {
      'Content-Type': 'application/json'
    });
    try {
      const response: any = await request({
          type: method,
          endpoint: `${config.serviceApiUrl}/api/${url}`,
          headers: headerParams,
          body,
      });
      return NextResponse.json({ ...response.data ?? [] }, { status: response.status });

    }catch (e) {
        return NextResponse.json({ e }, { status: 500 });
    }
    
};

export async function GET(req: NextRequest, {params}: { params: { urls: string[] } }) {
  
  const uri = params.urls.join('/');
  const queryString = req.nextUrl.searchParams.toString();
  return await requestHandler(req, httpMethod.GET, `${uri}?${queryString}`, {}, req.headers);
}

export async function POST(req: NextRequest, {params}: { params: { urls: string[] } }) {
  const data = await req.json();
  const uri = params.urls.join('/');
  const queryString = req.nextUrl.searchParams.toString();
  return await requestHandler(req, httpMethod.POST, `${uri}?${queryString}`, data, req.headers);
}
