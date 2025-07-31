const axios = require('axios');

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