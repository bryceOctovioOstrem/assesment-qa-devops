const {shuffleArray} = require('./utils')
const testArray = [1,2,3,4,5,6,7,8,9];
const newArray = shuffleArray(testArray);
describe('shuffleArray should', () => {
    // calls function suffle array and the checks if the term 
    test('tests to see if shuffle array returns an array', ()=>{
    expect(shuffleArray(testArray)).toBeInstanceOf(Array);
    })
    test('shuffle array return the same length array', () =>{
    expect(shuffleArray(testArray).length).toEqual(testArray.length)
    })
    test('tests to see if all the values sent to shuffle array are in the return array', () =>{
        expect(newArray.includes(testArray).toEqual(true))
    })
    test('tests to see if the fuction shuffled the array', () =>{
        expect(testArray[0]!== newArray[0] || testArray[1]!== newArray[1] || testArray[2] !== testArray[2]).toBe(true)
    })

})
