import { CookieManager } from './cookies';

describe('CookieManager', () => {
  beforeEach(() => {
    document.cookie.split(';').forEach((cookie) => {
      const [name] = cookie.split('=');
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/`;
    });
  });

  describe('get', () => {
    it('should return the value of the specified cookie', () => {
      document.cookie = 'token=abc123;path=/';

      const result = CookieManager.get('token');

      expect(result).toBe('abc123');
    });

    it('should return null if the specified cookie does not exist', () => {
      const result = CookieManager.get('token');

      expect(result).toBeNull();
    });

    it('should throw an error if the cookie name is empty', () => {
      expect(() => {
        CookieManager.get('');
      }).toThrow('Cookie name cannot be empty.');
    });
  });

  describe('set', () => {
    it('should set a new cookie with the specified name and value', () => {
      CookieManager.set('token', 'abc123');

      const result = document.cookie;

      expect(result).toContain('token=abc123');
    });

   

    it('should throw an error if the cookie name is empty', () => {
      expect(() => {
        CookieManager.set('', 'abc123');
      }).toThrow('Cookie name cannot be empty.');
    });
  });

  describe('delete', () => {
    it('should delete the specified cookie', () => {
      document.cookie = 'token=abc123;path=/';

      CookieManager.delete('token');

      const result = document.cookie;

      expect(result).not.toContain('token=abc123');
    });

    it('should do nothing if the specified cookie does not exist', () => {
      CookieManager.delete('token');

      const result = document.cookie;

      expect(result).toBe('');
    });
  });
});