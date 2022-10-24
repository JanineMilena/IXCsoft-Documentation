import * as dotenv from 'dotenv';
dotenv.config();

import https from 'https';

import { AxiosDigestAuth } from '@mhoc/axios-digest-auth';

/**
 * 
 * @param {string} url 
 * @param {string} method 
 * @param {array} body 
 * @returns 
 */

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
