import { getLuckyTicket } from '../src/task5.js';

export function testLuckyTicket(assert) {
    
    describe('Lucky Ticket', () => {
        it("Min 1, max 999999", () => {
            assert.deepEqual(getLuckyTicket({min: 1, max: 999999}), {simpleCounter: 55251, hardCounter: 25080, winner: "Simple"})
        });
        it("Min -901, max -2014", () => {
            assert.deepEqual(getLuckyTicket({min: -901, max: -2014}), {simpleCounter: 5, hardCounter: 55, winner: "Hard"})
        });

        describe('Invalid arguments', () => {
            it("Wrong type of parameter", () => {
                assert.deepEqual(getLuckyTicket({min: 'f', max: 'fc'}), {status: "failed", reason: "You have written a wrong type of parameter"})
            });
            it("Empty field", () => {
                assert.deepEqual(getLuckyTicket({min: '', max: ''}), {
                    status: 'failed',
                    reason: `number can't be 0`
                })
            });
            it("Min is higher than max", () => {
                assert.deepEqual(getLuckyTicket({min: 865, max: 12}), {
                    status: 'failed',
                    reason: 'Min number is higher than max number'
                })
            });
            it("Max higher than 999999", () => {
                assert.deepEqual(getLuckyTicket({min: 865, max: 1000000}), {
                    status: 'failed',
                    reason: 'You have written wrong range of numbers, please write from 0 to 999999'
                })
            });
        });
    });
}