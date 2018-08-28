import { getFizzBuzz } from "./fizzBuzz";

describe('FizzBuzz: ', () => {
    it('1が渡されたら1が返ってくる', () => {
        expect(getFizzBuzz(1)).toBe(1);
    });
    it('2が渡されたら2が返ってくる', () => {
        expect(getFizzBuzz(2)).toBe(2);
    });
    it('3が渡されたらFizzが返ってくる', () => {
        expect(getFizzBuzz(3)).toBe('Fizz');
    });
});