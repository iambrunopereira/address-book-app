export class CookieManager {
    static get(name: string): string | null {
        if (!name) { 
            throw new Error("Cookie name cannot be empty.");
        }

        const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        return match ? decodeURIComponent(match[2]) : null;
    }

    static set(name: string, value: string, days: number = 7): void {
        if (!name) { 
            throw new Error("Cookie name cannot be empty.");
        }

        const expires = new Date(Date.now() + days * 864e5).toUTCString();
        document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires};path=/`;
    }

    static delete(name: string): void {
        if (this.get(name)) {
            document.cookie = `${name}=;path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT`;
        }
    }
}
