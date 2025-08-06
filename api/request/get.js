const axios = require('axios');

export const GetInventory = async () => {
    const config = {
        method: 'get',
        url: 'https://petstore.swagger.io/v2/store/inventory',
        headers: {
            'accept': 'application/json'
        }
    };

 return await axios.request(config)
        .then((response) => {
          return response;
        })
        .catch((error) => {
            console.log(error);
        });
}

export const findByStatus = async (status) => {
    const config = {
        method: 'get',
        url: `https://petstore.swagger.io/v2/pet/findByStatus?status=${status}`,
        headers: {
            'accept': 'application/json'
        }
    };

 return await axios.request(config)
        .then((response) => {  
          return response;
        })
        .catch((error) => {
            console.log(error);
        });
}

export const spacexdataLaunchesAll = async () => {
    const config = {
        method: 'get',
        url: `https://api.spacexdata.com/v3/launches`,
        headers: {
            'accept': 'application/json'
        }
    };

 return await axios.request(config)
        .then((response) => {  
            return response;
        
        })
        .catch((error) => {
            console.log(error);
            return error
        });
}

export const spacexdataLaunchesFlightNumber = async (flightNumber) => {
    const config = {
        method: 'get',
        url: `https://api.spacexdata.com/v3/launches/${flightNumber}`,
        headers: {
            'accept': 'application/json'
        }
    };

 return await axios.request(config)
        .then((response) => {  
          return response;
        })
        .catch((error) => {
          //  console.log(error);
        });
}