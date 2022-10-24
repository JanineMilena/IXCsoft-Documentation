import get from 'axios';
import { useEffect } from 'react';

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

/**
const api = get.create('http://localhost:5000/api')

async function getData() {
    const [data, setData] = useState([]);
    const [erro, setErro] = useState([]);

    useEffect(() => {
        api.get('/menu').then(res => setData(res.data)).then(res => console.log(res)).catch(erro => console.log(erro))
    }, []);

    return { data, erro };
}**/

export default getData;
