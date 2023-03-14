const { expect } = require('chai');

const funcValue = require('../example');

describe('Testar uma função', () => {
    it('Se retorna \'valorteste\'', () => {
        expect(funcValue()).to.be.equals('valorteste');
    });
});
