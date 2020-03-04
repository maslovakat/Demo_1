import { isFitEnvelope } from '../src/task2.js';

export function testEnvelopes(assert) {

    describe('Fit Envelopes', () => {
        it("1 envelope if larger", () => {
            assert.deepEqual(isFitEnvelope({
                w: 10,
                h: 20
            },{
                w: 10,
                h: 5
            }), 1)
        });
        it("1 envelope if larger", () => {
            assert.deepEqual(isFitEnvelope({
                w: 60,
                h: 20
            },{
                w: 10,
                h: 50
            }), 1)
        });
        it("2 envelope if larger", () => {
            assert.deepEqual(isFitEnvelope({
                w: 10,
                h: 20
            },{
                w: 10,
                h: 50
            }), 2)
        });
        it("2 envelope if larger", () => {
            assert.deepEqual(isFitEnvelope({
                w: 10,
                h: 20
            },{
                w: 100,
                h: 50
            }), 2)
        });
        it("No fitted", () => {
            assert.deepEqual(isFitEnvelope({
                w: 10,
                h: 20
            },{
                w: 30,
                h: 1
            }), 0)
        });

        describe('Invalid arguments', () => {
            it("Width or height is string", () => {
                assert.deepEqual(isFitEnvelope({w: 'fe', h: 20}, {w:9, h: 'kv'}),  {
                    status: 'failed',
                    reason: 'You have written wrong type of data, please write number'
                })
            });
            it("Some fields are empty", () => {
                assert.deepEqual(isFitEnvelope({w: 0, h: 20}, {w:9, h: 5}),  {
                    status: 'failed',
                    reason: 'Some fields are empty'
                })
            });
        });
    });
}