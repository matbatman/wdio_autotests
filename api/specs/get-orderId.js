const chai = require('chai')
const expect = chai.expect;
const { getOrderId } = require('../request/get.js')

describe('Проверка метода /store/order/orderId', () => {
    it('Проверка успешного вызова', async () => {
        const Id = 4;
        const response = await getOrderId(Id);

        expect(response.status).to.equal(200);
        expect(response.data.id).to.equal(Id);
        expect(response.data).to.have.property('status');
    })

    it('Проверка не успешного вызова', async () => {
        const response = await getOrderId(0);
              
        expect(response.status).to.equal(404);
        expect(response.response.data.message).to.equal('Order not found');
    })
})