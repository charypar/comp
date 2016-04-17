import {expect} from 'chai';
import Comp from './index';

describe('index', () => {
  it('exports a function', () => {

    expect(Comp).not.to.be.undefined;
    expect(() => Comp()).not.to.throw(TypeError);
  });
});
