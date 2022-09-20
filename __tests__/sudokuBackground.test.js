const sudokuBackground = require('../sudokuBackground')

const validSolution = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
  ]

  const invalidSolution = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2], 
    [6, 7, 2, 1, 9, 0, 3, 4, 8],
    [1, 0, 0, 3, 4, 2, 5, 6, 0],
    [8, 5, 9, 7, 6, 1, 0, 2, 0],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 0, 1, 5, 3, 7, 2, 1, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 0, 0, 4, 8, 1, 1, 7, 9]
  ]

  const invalidSolution2 = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [2, 2, 2, 2, 2, 2, 2, 2, 2],
    [3, 3, 3, 3, 3, 3, 3, 3, 3],
    [4, 4, 4, 4, 4, 4, 4, 4, 4],
    [5, 5, 5, 5, 5, 5, 5, 5, 5],
    [6, 6, 6, 6, 6, 6, 6, 6, 6],
    [7, 7, 7, 7, 7, 7, 7, 7, 7],
    [8, 8, 8, 8, 8, 8, 8, 8, 8],
    [9, 9, 9, 9, 9, 9, 9, 9, 9]
  ]

  const invalidSolution3 = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
  ]

  const invalidSolution4 = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [9, 1, 2, 3, 4, 5, 6, 7, 8],
    [8, 9, 1, 2, 3, 4, 5, 6, 7],
    [7, 8, 9, 1, 2, 3, 4, 5, 6],
    [6, 7, 8, 9, 1, 2, 3, 4, 5],
    [5, 6, 7, 8, 9, 1, 2, 3, 4],
    [4, 5, 6, 7, 8, 9, 1, 2, 3],
    [3, 4, 5, 6, 7, 8, 9, 1, 2],
    [2, 3, 4, 5, 6, 7, 8, 9, 1]
  ]

describe('sudokuBackground', () => {
    test('to return a boolean value', () => {
        expect(typeof sudokuBackground(validSolution)).toBe('boolean');
    });
    test('if solution contains 0 returns false', () => {
        expect(sudokuBackground(invalidSolution)).toBe(false);
    })
    test('if solution does not contain 0 returns true', () => {
        expect(sudokuBackground(validSolution)).toBe(true);
    })
    test('if none of the arrays contains repeated characters returns true', () => {
        expect(sudokuBackground(validSolution)).toBe(true);
    })
    test('if the array contains repeated characters returns false', () => {
        expect(sudokuBackground(invalidSolution2)).toBe(false);
    } )
    test('if any of the columns contains repeated numbers returns false', () => {
        expect(sudokuBackground(invalidSolution3)).toBe(false);
    })
    test('if any 3x3 squares contains repeated numbers returns false', () => {
        expect(sudokuBackground(invalidSolution4)).toBe(false);
    })
})