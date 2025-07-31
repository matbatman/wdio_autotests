const chai = require('chai')
const expect = chai.expect;
const { GetInventory } = require('../request/get.js')

describe('Проверка метода /store/inventory', () => {
    it('Проверка успешного вызова', async () => {
        const response = await GetInventory();

        expect(response.status).to.equal(200);
        expect(Object.keys(response.data).length > 0).to.be.true;
    })
})