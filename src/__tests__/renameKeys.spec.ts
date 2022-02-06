import { renameKeys } from '../renameKeys';

const NEW_KEY = 'surname';

const obj = {
    name: 'John',
    lastName: 'Doe',
};

const resultObj = {
    name: 'John',
    [NEW_KEY]: 'Doe',
};

describe('renameKeys', () => {
    it('should rename object keys properly', () => {
        expect(renameKeys(obj, { lastName: NEW_KEY })).toEqual(resultObj);
    });
});
