import {
    sortTriangles
} from '../src/task3.js';

export function testTriangles(assert) {

    describe('Sort Triangles', () => {
        it("Three triangles", () => {
            assert.deepEqual(sortTriangles([{
                    veh: 'ABC',
                    a: 10,
                    b: 20,
                    c: 22.36
                },
                {
                    veh: 'DEF',
                    d: 40,
                    e: 50,
                    f: 70.3
                },
                {
                    veh: 'QWE',
                    q: 20,
                    w: 30,
                    e: 40.3
                }
            ]), ["DEF", "QWE", "ABC"])
        });

        describe('Invalid arguments', () => {
            it("Name of veh is not unique", () => {
                assert.deepEqual(sortTriangles([{
                        veh: 'ABC',
                        a: 10,
                        b: 20,
                        c: 22.36
                    },
                    {
                        veh: 'DEF',
                        d: 40,
                        e: 50,
                        f: 70.3
                    },
                    {
                        veh: 'QWE',
                        q: 20,
                        w: 30,
                        e: 40.3
                    }, {
                        veh: 'ABC',
                        a: 10,
                        b: 20,
                        c: 22.36
                    },
                ]), {
                    status: "failed",
                    reason: "Some name of triangle is not unique"
                })
            });
            it("Veh type number", () => {
                assert.deepEqual(sortTriangles([{
                    veh: 987,
                    9: 10,
                    8: 20,
                    7: 22.36
                }]), {
                    status: 'failed',
                    reason: 'Wrong type of data'
                })
            });
            it("Veh length 2", () => {
                assert.deepEqual(sortTriangles([{
                    veh: 'AB',
                    a: 10,
                    b: 20,
                    c: 22.36
                }]),{
                    status: 'failed',
                    reason: 'Vehicle name length must be 3'
                })
            });
            it("Triangle's sides are not number", () => {
                assert.deepEqual(sortTriangles([{
                    veh: 'ABC',
                    a: 'hh',
                    b: 20,
                    c: 22.36
                }]),{
                    status: 'failed',
                    reason: 'You have written wrong type of data, please write number'
                })
            });
            it("Some fields are empty", () => {
                assert.deepEqual(sortTriangles([{
                    veh: 'ABC',
                    a: 0,
                    b: 20,
                    c: 22.36
                }]),{
                    status: 'failed',
                    reason: 'Some fields are empty'
                })
            });
            it("Wrong key parameters", () => {
                assert.deepEqual(sortTriangles([{
                    veh: 'LPO',
                    a: 18,
                    p: 20,
                    c: 22.36
                }]),{
                    status: 'failed',
                    reason: 'Wrong key parameters'
                })
            });
        });
    });
}