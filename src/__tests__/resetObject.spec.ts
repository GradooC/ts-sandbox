import { resetObject } from '../resetObject';

const obj = {
    a: '1',
    b: {
        a: 1,
        b: {
            a: [1],
        },
    },
};

const flatResult = {
    a: null,
    b: null,
};

const deepResult = {
    a: null,
    b: {
        a: null,
        b: {
            a: null,
        },
    },
};

describe('resetObject.ts', () => {
    it('should reset object flatly', () => {
        expect(resetObject(obj)).toEqual(flatResult);
    });

    it('should reset object deeply', () => {
        expect(resetObject(obj, 'deep')).toEqual(deepResult);
    });

    it('should work with empty object', () => {
        expect(resetObject({})).toEqual({});
        expect(resetObject({}, 'deep')).toEqual({});
    });
});
