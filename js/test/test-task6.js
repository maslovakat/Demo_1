import {
    getNumberSequence
} from '../src/task6.js';

export function testSequence(assert) {
    describe('Sequence numbers', () => {
        it("Length of 5, start from 25", () => {
            assert.deepEqual(getNumberSequence(5, 25), [5, 6, 7, 8, 9])
        });
        it("Length of 5, start from 1 000 000", () => {
            assert.deepEqual(getNumberSequence(5, 1000000), [1000,1001,1002,1003,1004])
        });

        describe('Invalid arguments', () => {
            it("Sequence length is integer", () => {
                assert.deepEqual(getNumberSequence(5.2,5.9), {
                    status: 'failed',
                    reason: `Number needs to be whole`
                })
            });
            it("Wrong type of data", () => {
                assert.deepEqual(getNumberSequence('5','h'), {
                    status: 'failed',
                    reason: 'You have written a wrong type of parameter'
                })
            });
            it("Wrong number 0", () => {
                assert.deepEqual(getNumberSequence(0, 0), {
                    status: 'failed',
                    reason: 'Please write whole number'
                })
            });
        });
    });
}