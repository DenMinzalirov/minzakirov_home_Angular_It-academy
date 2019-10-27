/* tslint:disable:no-unused-variable */
import { ReversePipe } from './reverse.pipe';

describe('Pipe: ReversePipe', () => {

  const pipe = new ReversePipe();

  it('should reverse the inputs', () => {
    expect(pipe.transform('12')).toBe('21');
    expect(pipe.transform('hellow')).toBe('wolleh');
  });
});
