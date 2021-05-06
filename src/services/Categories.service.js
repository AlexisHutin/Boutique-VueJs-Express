import axios from 'axios';

class CategoriesService {

    constructor() {
        this.axios = axios.create();
    }

    getAll() {
        return this.axios
        .get('http://localhost:3000/categories')
        .then(response => {return response.data.data})
    }

}

export default new CategoriesService();