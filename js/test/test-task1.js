import { createChessBoard } from '../src/task1.js';

export function testChessBoard(assert) {

    describe('Chess Board', () => {
        it("Board with one letter", () => {
            assert.deepEqual(createChessBoard(9, 3, 'G'), 'G G\n G \nG G\n G \nG G\n G \nG G\n G \nG G\n')
        });
        it("Board with one number", () => {
            assert.deepEqual(createChessBoard(12, 12, 8), '8 8 8 8 8 8 \n 8 8 8 8 8 8\n8 8 8 8 8 8 \n 8 8 8 8 8 8\n8 8 8 8 8 8 \n 8 8 8 8 8 8\n8 8 8 8 8 8 \n 8 8 8 8 8 8\n8 8 8 8 8 8 \n 8 8 8 8 8 8\n8 8 8 8 8 8 \n 8 8 8 8 8 8\n')
        });
        it("Board with one word", () => {
            assert.deepEqual(createChessBoard(3,12, 'Word'), 'W W W W W W \n W W W W W W\nW W W W W W \n')
        });

        describe('Invalid arguments', () => {
            it("Width or height is string", () => {
                assert.deepEqual(createChessBoard('g', 'v', 9),  {
                    status: 'failed',
                    reason: 'You have written wrong type for width or height, please write number'
                })
            });
            it("Some empty fields", () => {
                assert.deepEqual(createChessBoard(0, 0, 9),  {
                    status: 'failed',
                    reason: 'Some fields are empty, please fill in all fields'
                })
            });
            it("Width or height is out of range", () => {
                assert.deepEqual(createChessBoard(10, 51, 9), {
                    status: 'failed',
                    reason: 'Your range of numbers is wrong, please write number from 1 to 50'
                })
            });
        });
    });
}