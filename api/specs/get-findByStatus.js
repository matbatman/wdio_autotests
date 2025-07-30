//проверка на 200 ок для статуса available
// проверка в ответе data - имеет статус available
const chai = require('chai')
const expect = chai.expect;
const { findByStatus } = require('../request/get.js')

describe('Ручка findByStatus', () => {
    const statuses = [
        { status: "available" },
        { status: "pending" },
        { status: "sold" }
    ]

    statuses.forEach(({ status }) => {
        it(`проверка фильтрации по статусу  ${status}`, async () => {
            const responce = await findByStatus(status);
            let lastElemArr = responce.data
            lastElemArr = lastElemArr[lastElemArr.length - 1]

            expect(responce.status).to.be.equal(200);
            expect(responce.data[0].status).to.be.equal(status);
            expect(lastElemArr.status).to.be.equal(status);
        })
    });

    it('проверка фильтрации по несуществующему статусу', async () => {
        const responce = await findByStatus("lahlkdhadk");

        expect(responce.status).to.be.equal(200);
        expect(responce.data).to.be.empty
    })

})
