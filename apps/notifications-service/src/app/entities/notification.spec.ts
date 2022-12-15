import { Content } from './content';
import { Notification } from './notification';

describe(`Notification`, () => {
  it('should be able to create a notification', () => {
    const content = new Notification({
      content: new Content('Hello World'),
      category: 'test',
      recipientId: '123',
    });
    expect(content).toBeTruthy();
  });
});
