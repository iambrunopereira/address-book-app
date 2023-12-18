export const enableDevTools = process.env.NEXT_PUBLIC_ENABLE_REDUX_DEV_TOOLS === 'true';

export const config = {
    appName: "My Address Book",
    serviceApiUrl: process.env.NEXT_PUBLIC_SERVICE_API_URL,
}

export const publicRoutes = ['/login', '/signup'];