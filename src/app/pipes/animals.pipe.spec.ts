import { AnimalsPipe } from './animals.pipe';

describe('AnimalsPipe', () => {
  it('create an instance', () => {
    const pipe = new AnimalsPipe();
    expect(pipe).toBeTruthy();
  });
});
