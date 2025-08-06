const chai = require('chai')
const expect = chai.expect;
const { spacexdataLaunchesAll, spacexdataLaunchesFlightNumber } = require('../request/get.js')

describe('Ручка LaunchesFlightNumber', () => {

    let flightNumber
    before(async () => {
        flightNumber = await spacexdataLaunchesAll();
    })

    it("позитивная проверка поиска запуска по id  ", async () => {
        const responce = await spacexdataLaunchesFlightNumber(flightNumber.data[0].flight_number);

        expect(responce.status).to.be.equal(200);
        expect(responce.data.flight_number).to.be.equal(flightNumber.data[0].flight_number);

    })
})
