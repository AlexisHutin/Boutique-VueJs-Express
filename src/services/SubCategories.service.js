import axios from 'axios';

class SubCategoriesService {

    constructor() {
        this.axios = axios.create();
    }

    getAll(category_id) {
        let url = 'http://localhost:3000/sub-categories/' + category_id
        return this.axios
        .get(url)
        .then(response => {return response.data.data})
    }

}

export default new SubCategoriesService();