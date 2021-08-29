import { newsAPI } from './../api/api'

const SET_NEWS = 'SET_NEWS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const SET_TOTAL_NEWS_COUNT = 'SET_TOTAL_NEWS_COUNT'

let initialtState = {
  news: [],
  pageSize: 30,
  totalNews: 0,
  currentPage: 1,
  isFetching: false,
};

function newsReducer(state = initialtState, action) {
  switch (action.type) {
    case SET_NEWS:
      return { ...state, news: action.news }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage }
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching }
    }
    case SET_TOTAL_NEWS_COUNT: {
      return { ...state, totalNews: action.totalNews }
    }
    default:
      return state
  }
}

export const setNews = (news) => ({ type: SET_NEWS, news })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalNewsCount = (totalNews) => ({ type: SET_TOTAL_NEWS_COUNT, totalNews })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })

export const getNews = (values, currentPage = 0, maxResults = 30) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true))

    let nextPage = currentPage > 0 ? currentPage++ : 0
    let data = await newsAPI.getNews(values, nextPage, maxResults)
    dispatch(setNews(data.data.articles))
    dispatch(setTotalNewsCount(data.data.totalResults))

    dispatch(toggleIsFetching(false))
  }
}


export default newsReducer;