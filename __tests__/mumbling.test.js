const accum = require('../mumbling');

describe('accum', () => {
    test('returns a string', () => {
        expect(typeof accum('a')).toBe('string');
    })
    test('if passed a single character string accum returns chater in uppercase', () => {
        expect(accum('b')).toBe('B');
        expect(accum('c')).toBe('C');
    })
    test('if passed two characters returns the correctly formatted string', () => {
        expect(accum('de')).toBe('D-Ee');
        expect(accum('fg')).toBe('F-Gg');
        expect(accum('hij')).toBe('H-Ii-Jjj');
    })
    test('if passed a string of mixed uppercase and lowercase characters accum returns correct formatted string', () => {
        expect(accum('kLM')).toBe('K-Ll-Mmm');
        expect(accum('NOP')).toBe('N-Oo-Ppp');
        expect(accum('QRs')).toBe('Q-Rr-Sss');
    })
    test('if passed a long string of mixed uppercase and lowercase characters accum returns correct formatted string', () => {
        const string1 = 'abCDEfGhIJKlmNO'
        const string2 = 'ABCDEFGHIjklmnO'
        const string3 = 'abcdeFGHiJkLmNo'
        const formattedString = 'A-Bb-Ccc-Dddd-Eeeee-Ffffff-Ggggggg-Hhhhhhhh-Iiiiiiiii-Jjjjjjjjjj-Kkkkkkkkkkk-Llllllllllll-Mmmmmmmmmmmmm-Nnnnnnnnnnnnnn-Ooooooooooooooo'
        expect(accum(string1)).toBe(formattedString);
        expect(accum(string2)).toBe(formattedString);
        expect(accum(string3)).toBe(formattedString);
    })
})