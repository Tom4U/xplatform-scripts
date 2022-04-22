import { init } from './main';
import { expect } from 'chai';

describe('main unit tests', (): void => {
    it('adds two positive numbers', (): void => {
        const result = init(1, 3);
        expect(result).is.equal(4);
    });

    it('adds two negative numbers', (): void => {
        const result = init(-1, -3);
        expect(result).is.equal(-4);
    });

    it('adds a positive and a negative number', (): void => {
        const result = init(-1, 3);
        expect(result).is.equal(2);
    })
})
