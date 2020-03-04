import { testChessBoard } from './test-task1.js';
import { testEnvelopes } from './test-task2.js';
import { testTriangles } from './test-task3.js';
import { testPolindrom } from './test-task4.js';
import { testLuckyTicket } from './test-task5.js';
import { testSequence } from './test-task6.js';
import { testFib } from './test-task7.js';

mocha.setup('bdd');

const assert = chai.assert;

testFib(assert);
testSequence(assert);
testLuckyTicket(assert);
testPolindrom(assert);
testTriangles(assert);
testEnvelopes(assert);
testChessBoard(assert);

mocha.run();