import axios from 'axios'

const baseUrl = 'https://api.coingecko.com/api/v3'

const getAll = async (currency) => {
    console.log(currency)
    const response = await axios.get(`${baseUrl}/coins/markets`, {params: {vs_currency: 'usd', order: 'market_cap_desc', per_page: '250', page: '1'}})
    return response.data
}

export default{
    getAll
}