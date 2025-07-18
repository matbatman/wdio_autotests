const axios = require('axios');

export const GetPet = async (payload) => {
    const config = {
        method: 'get',
        url: 'https://petstore.swagger.io/v2/pet/findByStatus?status=sold',
        headers: {
            'accept': 'application/json'
        }
    };

 return await axios.request(config)
        .then((response) => {
          return response.data;
        })
        .catch((error) => {
            console.log(error);
        });
}