import { describe, it, expect } from 'vitest';
import { validateEmail, slugify } from './index';

describe('shared-utils', () => {
  describe('validateEmail', () => {
    it('should validate correct emails', () => {
      expect(validateEmail('test@example.com')).toBe(true);
      expect(validateEmail('user.name@domain.co.uk')).toBe(true);
    });

    it('should invalidate incorrect emails', () => {
      expect(validateEmail('invalid-email')).toBe(false);
      expect(validateEmail('test@')).toBe(false);
    });
  });

  describe('slugify', () => {
    it('should create a valid slug', () => {
      expect(slugify('Hello World')).toBe('hello-world');
      expect(slugify('  Testing 123  ')).toBe('testing-123');
    });
  });
});
