import {Foo,isCuteNumberGreaterThan10} from '../src/Foo'

describe('Foo', () => {
  it('bar', () => {
    expect(new Foo().bar()).toEqual('bar')
  })
  it('should return ture when input 1,3,4,5,12', () => {
    // given
    const numbers = [1,3,4,5,12]

    // when
    const actual: boolean = isCuteNumberGreaterThan10(numbers)
    // then
    expect(actual).toBeTruthy()
  });
})

