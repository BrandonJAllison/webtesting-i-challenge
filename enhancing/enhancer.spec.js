onst enhancer = require('./enhancer.js');
const { repair, fail, succeed } = require('./enhancer.js');

// test away!

describe('enhancer module', () => {

    const axe = (enhancement = 0, durability = 100) => ({
        name: 'Battle Axe',
        durability,
        enhancement
    });

    describe('succeed function', () => {

        it('Items enhancement should increase by an increment of 1', () => {

            const expected = axe(enhancement = 14);
            const item = axe(enhancement = 13);

            expect(succeed(item)).toEqual(expected);
        });

        it('Item with 20 enhancement should remain the same', () => {

            const expected = axe(enhancement = 20);
            const item = axe(enhancement = 20);

            expect(succeed(item)).toEqual(expected);
        });
    });

    describe('fail function', () => {

        it('Should return item with -5 durability', () => {

            const expected = axe(enhancement = 11, durability = 95);
            const item = axe(enhancement = 11, durability = 100);

            expect(fail(item)).toEqual(expected);
        });

        it('Should return item with -10 durability', () => {

            const expected = axe(enhancement = 15, durability = 90);
            const item = axe(enhancement = 15, durability = 100);

            expect(fail(item)).toEqual(expected);
        });

        it('Should return item with -10 durability and -1 enhancement', () => {

            const expected = axe(enhancement = 17, durability = 90);
            const item = axe(enhancement = 18, durability = 100);

            expect(fail(item)).toEqual(expected);
        });

    });

    describe('repair function', () => {

        it('Items durability should return to 100 after it has been repaired', () => {

            const expected = axe(enhancement = 20, durability = 100);
            const item = axe(enhancement = 20, durability = 30);

            expect(repair(item)).toEqual(expected);
        });
    });
});