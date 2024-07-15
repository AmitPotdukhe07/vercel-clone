import axios from 'axios';

const options = {
    method: 'GET',
    url: 'https://real-time-amazon-data.p.rapidapi.com/products-by-category',
    params: {
        category_id: '2478868012',
        page: '1',
        country: 'US',
        sort_by: 'RELEVANCE',
        product_condition: 'ALL'
    },
    headers: {
        'x-rapidapi-key': '0f16cf732bmshc8c4d2a723a03d0p104b96jsn4bfd87e1e761',
        'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
    }
};

try {
    const response = await axios.request(options);
    console.log(response.data);
} catch (error) {
    console.error(error);
}