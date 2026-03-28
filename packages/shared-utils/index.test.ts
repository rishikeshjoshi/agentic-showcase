import { describe, it, expect } from 'vitest';
import { validateEmail, slugify } from './index';

describe('shared-utils', () => {
  it('validateEmail should validate correct emails', () => {
    expect(validateEmail('test@example.com')).toBe(true);
    expect(validateEmail('invalid-email')).toBe(false);
  });

  it('slugify should create a slug', () => {
    expect(slugify('Hello World')).toBe('hello-world');
    expect(slugify('This is a test!')).toBe('this-is-a-test');
  });
});
