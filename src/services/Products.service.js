import axios from 'axios';

class ProductsService {

    constructor() {
        this.axios = axios.create();
    }

    getAll(subCategory_id) {
        let url = 'http://localhost:3000/products/all/' + subCategory_id
        return this.axios
        .get(url)
        .then(response => {return response.data.data})
    }

    getOne(product_id) {
        let url = 'http://localhost:3000/products/' + product_id
        return this.axios
        .get(url)
        .then(response => {return response.data.data})
    }

}

export default new ProductsService();