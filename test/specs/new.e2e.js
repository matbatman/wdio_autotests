const chai = require('chai')
const expect = chai.expect;
const {GetPet} = require('../request/requests.js')

describe('Новый тест', () => {
    it('Запрос', async () => {
        const responce = await GetPet();
        expect(responce.length > 0).to.be.true;
    })
})