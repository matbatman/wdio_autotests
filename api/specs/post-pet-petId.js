const chai = require('chai')
const expect = chai.expect;
const { createPet } = require('../request/post.js');
const { updatePetPetId } = require('../request/post.js');

describe('Ручка обновления petPetId', () => {
    let petId

    before(async () => {
        petId = await createPet();
        petId = petId.data.id
    })


    it('проверка успешного редактирования записи о животном в магазине', async () => {
        const responce = await updatePetPetId(petId);

        expect(responce.status).to.be.equal(200);
        expect(responce.data.message).to.be.equal(petId.toString());
    })

    it('проверка ошибки 404 not found при неправильно переданном id', async () => {
        const responce = await updatePetPetId(0);

        expect(responce.status).to.be.equal(404);
        expect(responce.data.message).to.be.equal('not found');
    })

})