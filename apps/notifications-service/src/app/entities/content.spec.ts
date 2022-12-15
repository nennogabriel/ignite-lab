import { Content } from './content';

describe(`Notification Content`, () => {
  it('should be able to create a notification content', () => {
    const content = new Content('Hello World');
    expect(content).toBeTruthy();
    expect(content.value).toBe('Hello World');
  });

  it('should not be able to create a notification content with less them 5 characters', () => {
    expect(() => new Content('Hell')).toThrow();
  });

  it('should not be able to create a notification content with more them 240 characters', () => {
    expect(() => new Content('A'.repeat(241))).toThrow();
  });
});
