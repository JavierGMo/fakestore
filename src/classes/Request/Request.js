export class Request{
    basePath = 'https://fakestoreapi.com';
    constructor({
        method='GET',
        headers={
            'Content-Type': 'application/json'
        },
    }) {
        this.method = method;
        this.headers = headers;
    }

    /**
     * 
     * @param {String} endpoint The endpoint must begin with "/" else trigger the error
     * @returns {data, status}
     */
    async makeRequest(endpoint=''){
        try {
            if(!endpoint) throw new Error("Endpoint can't be empty");
            const fullPath = `${this.basePath}${endpoint}`;
            const request = await fetch(fullPath, {
                method: this.method,
                headers: this.headers
            });
            const data = await request.json();
            return {
                data,
                status: request.status
            }
        } catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }
}