import { findPolindrom } from '../src/task4.js';

export function testPolindrom(assert) {
    
    describe('Find Polindrom', () => {
        it("One polindrom 8567653", () => {
            assert.deepEqual(findPolindrom(8567653), 56765)
        });
        it("One polindrom 12344329", () => {
            assert.deepEqual(findPolindrom(12344329), 234432)
        });
        it("Two polindroms 9123321078909874", () => {
            assert.deepEqual(findPolindrom(9123321078909874), 7890987)
        });

        describe('Invalid arguments', () => {
            it("Wrong type of parameter", () => {
                assert.deepEqual(findPolindrom('jh'), {status: 'failed', reason: `Wrong type of data: please write "number"`})
            });
            it("Empty field", () => {
                assert.deepEqual(findPolindrom(0), {
                    status: 'failed',
                    reason: 'Field is empty'
                })
            });
            it("Number < 10", () => {
                assert.deepEqual(findPolindrom(9), {status: 'failed', reason: 'Wrong number: please write whole number higher than 9'})
            });
            it("Number with comma", () => {
                assert.deepEqual(findPolindrom(9.5), {status: 'failed', reason: 'Wrong number: please write whole number higher than 9'})
            });
        });
    });
}