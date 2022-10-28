import { AxiosDigestAuth } from '@mhoc/axios-digest-auth';
import * as dotenv from 'dotenv';
import https from 'https';

dotenv.config();

async function webservice(url, method, body) {
	try {
		const digestAuth = new AxiosDigestAuth({
			username: process.env.USER_API,
			password: process.env.TOKEN_API,
		});
		const config = {
			httpsAgent: new https.Agent({
				rejectUnauthorized: false
			}),
			headers: {
				Accept: "application/json"
			},
			method: method,
			url: process.env.URL_API + url,
			data: JSON.stringify(body)
		};
		const response = await digestAuth.request(config);
		return response.data;
	} catch (err) {
		return err.response.data;
	}
}

export default webservice;