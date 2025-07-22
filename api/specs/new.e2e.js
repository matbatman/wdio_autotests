const chai = require('chai')
const expect = chai.expect;
const {GetPet} = require('../request/requests.js')

describe('Новый тест', () => {
    it('Запрос', async () => {
        console.log('=================')
        console.log(process.env.PASSWORD)
        const responce = await GetPet();
        expect(responce.length > 0).to.be.true;
    })
})