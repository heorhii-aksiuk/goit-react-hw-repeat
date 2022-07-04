import axios from 'axios'

axios.defaults.baseURL = 'https://pixabay.com/api'
const API_KEY = process.env.REACT_APP_PIXABAY_API_KEY

const apiRequest = async (query, page = '1') => {
  const searchParams = new URLSearchParams({
    q: query,
    page: page,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
    key: API_KEY,
  })

  const requestString = '/?' + searchParams
  const response = await axios.get(requestString)
  return response
}

export default apiRequest
