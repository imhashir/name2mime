import { assert } from 'chai';
import getMime from '../src';

describe('Awesome test.', () => {
  it('should test getMime(\'jpg\').type', () => {
    const inputVal = 'filename.jpg';
    const expectedVal = 'image/jpeg';

    assert(getMime(inputVal).type === expectedVal, 'Not found!');
  });

  it('should test getMime(\'js\').type', () => {
    const expectedVal = 'application/javascript';
    const inputVal = 'filename.js';

    assert(getMime(inputVal).type === expectedVal, 'Not found!');
  });
});
