import { RequestData, RequestError, httpMethod } from '@/types';

export async function request<T>(
    data: RequestData
): Promise<{ data: T; status: number; statusText: string } | RequestError> {
    const url = data.endpoint;
    const options: {
        method: httpMethod;
        headers: Record<string, string>;
        body?: string;
    } = {
        method: data.type,
        headers: {
            'Content-Type': 'application/json',
            ...data.headers,
        },
    };

    if (
        (data.type === httpMethod.POST || data.type === httpMethod.PUT || data.type === httpMethod.DELETE) &&
        data.body
    ) {
        options.body = JSON.stringify(data.body || {});
    }
    const response = await fetch(url, options);

    return await response.text().then((text: string) => {
        try {
            const result: T = JSON.parse(text);

            if (!response.ok) {
                const error: RequestError = {
                    data: [],
                    status: response.status,
                    statusText: response.statusText,
                };

                return Promise.reject(error);
            }

            return {
                data: result,
                status: response.status,
                statusText: response.statusText,
            };
        } catch (err) {
            const error: RequestError = {
                data: [],
                status: response.status,
                statusText: 'JSON Misformat',
            };

            return Promise.reject(error);
        }
    });
}
