import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://newsapi.org/v2/',
});

export const newsAPI = {
  getNews(sortText = 'javascript', page = 0, maxResults = 30) {
    const keyAPI = 'e17f513c62084bc18600e4a9d65c2abc'
    return instance.get(`${sortText.searchIn}?q=${sortText.text}&sortBy=${sortText.sort}&page=${page}&pageSize=${maxResults}&apiKey=${keyAPI}`)
  }
}