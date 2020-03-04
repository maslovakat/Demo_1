import { getFibonacci } from '../src/task7.js';

export function testFib(assert) {
    describe('Numbers of fibonacci', () => {
        it("Length of 2 or more", () => {
            assert.deepEqual(getFibonacci({
                length: 3
            }), [144, 233, 377, 610, 987])
        });
        it("Length of 6 or more", () => {
            assert.deepEqual(getFibonacci({
                length: 6
            }), [121393, 196418, 317811, 514229, 832040])
        });
        it("Length of 30 or more", () => {
            assert.deepEqual(getFibonacci({
                length: 30
            }), [1.3115120134408193e+29, 2.1220710144010545e+29, 3.4335830278418734e+29, 5.5556540422429276e+29, 8.989237070084801e+29])
        });
        it("Min 0, max 1 000 000", () => {
            assert.deepEqual(getFibonacci({
                min: 0,
                max: 1000000
            }), [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, 514229, 832040])
        });

        describe('Invalid arguments', () => {
            it("Min is higher than max", () => {
                assert.deepEqual(getFibonacci({
                    min: 50,
                    max: 10
                }), {
                    status: 'failed',
                    reason: 'Your min number is higher than max number'
                })
            });
            it("Length is 0", () => {
                assert.deepEqual(getFibonacci({
                    length: 0
                }), {
                    status: 'failed',
                    reason: `Length can't be 0`
                })
            });
            it("Length is integer", () => {
                assert.deepEqual(getFibonacci({
                    length: 5.2
                }), {
                    status: 'failed',
                    reason: `Number needs to be whole`
                })
            });
            it("Min and max are integers", () => {
                assert.deepEqual(getFibonacci({
                    min: 5.2,
                    max: 8.5
                }), {
                    status: 'failed',
                    reason: `Number needs to be whole`
                })
            });
        });
    });
}