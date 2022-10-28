import get from 'axios';

const getData = () =>
    new Promise(function (resolve, reject) {

        const options = {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
            }
        };

        get('http://localhost:5000/api/menu', options)
            .then(response => {
                resolve(response.data)
            }).catch((err) => {
                console.error('Response Error:' + err)
            })
    })

export default getData;
