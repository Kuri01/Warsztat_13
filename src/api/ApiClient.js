import axios from 'axios';

export class ApiClient {
    static baseUrl = 'http://localhost:3000';

    static api = axios.create({
        baseURL: this.baseUrl,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}
