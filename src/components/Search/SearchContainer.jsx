import Search from './Search';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getNews } from './../../redux/news-reducer'
import { setFormData } from './../../redux/search-reducer'
let mapStateToProps = (state) => {
  return {
    searchPage: state.searchPage,
    newsPage: state.newsPage,
  }
}

export default compose(
  connect(mapStateToProps, { getNews, setFormData }),
)(Search)