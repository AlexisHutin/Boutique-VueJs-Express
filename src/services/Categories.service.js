import axios from 'axios';

class CategoriesService {

    constructor() {
        this.axios = axios.create({
            baseUrl: 'http://localhost:3000'
        });
    }

    getAll() {
        return this.axios
        .get(this.baseUrl + '/categories')
        .then(response => {return response});
    }

}

export default new CategoriesService();