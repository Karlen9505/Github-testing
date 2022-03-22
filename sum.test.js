const {sum,diff,multiply} = require('./sum');

describe('math problems solving', () =>{
    test('add 1 and 2 to be 3', () =>{
        expect(sum(1,2)).toEqual(3)

    });
    test('multiplies a and b ', () =>{
        expect(multiply(2,3)).toBe(6)
    })
    test('guess the outcome',() =>{
        expect(''+ 1).toBe('1')
    })

    test('difference', () =>{
        expect(diff(9,5)).toEqual(4);
        expect(diff(4,2)).toEqual(2);
    })

})