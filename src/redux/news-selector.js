export const getNewsState = (state) => {
  return state.newsPage.news
}

export const getPageSize = (state) => {
  return state.newsPage.pageSize
}

export const getTotalNewsCount = (state) => {
  return state.newsPage.totalNews
}

export const getCurrentPage = (state) => {
  return state.newsPage.currentPage
}

export const getIsFetching = (state) => {
  return state.newsPage.isFetching
}

export const getFormData = (state) => {
  return state.searchPage.formData
}