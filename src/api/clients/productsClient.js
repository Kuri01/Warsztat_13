import { ApiClient } from '../ApiClient';

export class ProductsClient extends ApiClient {
    static productsEndpoint = '/products';

    static getProducts = async () => this.api.get(`${this.productsEndpoint}`);
    static getProductBySlug = async (slug) =>
        this.api.get(`${this.productsEndpoint}`, {
            params: {
                slug,
            },
        });
}
