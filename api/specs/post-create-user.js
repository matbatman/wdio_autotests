const chai = require('chai')
const expect = chai.expect;
const { createUser } = require('../request/post.js');

describe('Ручка создания пользователя', () => {

    it('проверка успешного создания пользователя', async () => {
        const id = '567';
        const responce = await createUser(id);

        expect(responce.status).to.be.equal(200);
        expect(responce.data.message).to.be.equal(id);

    })

    it('проверка неуспешного создания пользователя', async () => {
        const id = '567';
        const responce = await createUser(id, true);

        expect(responce.status).to.be.equal(405);
        expect(responce.data.message).to.be.equal('no data');

    })

})