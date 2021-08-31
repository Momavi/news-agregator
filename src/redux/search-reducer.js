const SET_FORM_DATA = 'SET_FORM_DATA'
const GET_FORM_DATA = 'GET_FORM_DATA'

let initialtState = {
  sort: [
    { id: 1, text: 'Relevance' },
    { id: 2, text: 'Popularity' },
    { id: 3, text: 'PublishedAt' }
  ],
  searchIn: [
    { id: 1, text: 'Everything' },
    { id: 2, text: 'Top-headlines' }
  ],
  formData: {
    text: '',
    sort: 'Relevance',
    searchIn: 'Everything',
  }
};

function booksReducer(state = initialtState, action) {
  switch (action.type) {
    case SET_FORM_DATA: {
      return { ...state, formData: action.formData }
    }
    case GET_FORM_DATA: {
      return { ...state, formData: action.formData }
    }
    default:
      return state;
  }
}

export const setFormData = (formData) => ({ type: SET_FORM_DATA, formData })

export const getFormData = () => ({ type: GET_FORM_DATA })

export default booksReducer;