const chai = require('chai')
const expect = chai.expect;
const mongoose = require('mongoose');
const { connectDB, disconnectDB } = require('../utils/connection');

describe('Mongo test', () => {

    before(async () => {
        await connectDB('mongodb://localhost:27017/wdio_test');
    })

    it('Запрос в базу', async () => {
        //добавили объект
        await mongoose.connection.db.listCollections().toArray();
        await mongoose.connection.db.collection('wdio_test').insertOne({one: 'two'})

        //проверили объект
       let objects = await mongoose.connection.db.collection('wdio_test').find({}).toArray();
        expect(objects[1].one).to.be.equal('two');
    })
})