import { config } from '@/configs';
import { request } from '@/utils/requestHandler';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

type Method = 'POST' | 'GET' | 'PUT' | 'DELETE' | 'PATCH';

const requestHandler = async (req: NextRequest, method: Method, url: string, body: any, header: any) => {
    //const session = await getSession(req, new NextResponse());
    const cookieStore = cookies()

  const {value} = cookieStore.get('token') ?? {}

    if (!value) {
        return NextResponse.json({}, { status: 401 });
    } 
    const headerParams = value ? {
      ...header,
      'Content-Type': 'application/json',
      'Authorization': value
    } : {
      ...header,
      'Content-Type': 'application/json'
    } 
    try {
      const response: any = await request({
          type: method,
          endpoint: `${config.serviceApiUrl}/api/${url}`,
          headers: headerParams,
          body,
      });
      return NextResponse.json({ ...response.data ?? [] }, { status: response.status });

    }catch (e) {
        return NextResponse.json({ data: [] }, { status: e.status });
    }
    
};

export async function GET(req: NextRequest, {params}: { params: { urls: string[] } }) {
  
    const uri = params.urls.join('/');
    const queryString = req.nextUrl.searchParams.toString();
    return await requestHandler(req, 'GET', `${uri}?${queryString}`, {}, req.headers);
}

export async function POST(req: NextRequest, {params}: { params: { urls: string[] } }) {
  const data = await req.json();
  const uri = params.urls.join('/');
  const queryString = req.nextUrl.searchParams.toString();
  return await requestHandler(req, 'POST', `${uri}?${queryString}`, data, req.headers);
}
