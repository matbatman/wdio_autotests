const axios = require('axios');
// метод создания
export const createPet = async () => {
    let data = JSON.stringify({
        "id": 3210,
        "category": {
            "id": 12,
            "name": "котики"
        },
        "name": "карамелька",
        "photoUrls": [
            "https://img-webcalypt.ru/uploads/admin/images/meme-templates/9NNxTQ1UM8qv5OaO6bbzPMB2zabemqWt.jpeg"
        ],
        "tags": [
            {
                "id": 122,
                "name": "кошка"
            }
        ],
        "status": "available"
    });

    const config = {
        method: 'post',
        url: 'https://petstore.swagger.io/v2/pet',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
        },
        data: data
};

return await axios.request(config)
    .then((response) => {
        return response;
    })
    .catch((error) => {
        console.log(error);
    });
}

// метод обновления записи о животном по id
export const updatePetPetId = async (petId) => {
    let data = JSON.stringify({
        'name': 'киса',
        'status': 'sold',
        'petId ': '3210'
    });
    const config = {
        method: 'post',
        url: `https://petstore.swagger.io/v2/pet/${petId}`,
        headers: {
            'accept': 'application/json'
        },
        data: data
    };

    return await axios.request(config)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            console.log(error);
            return error.response
        });
}