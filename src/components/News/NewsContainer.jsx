import React from 'react'
import News from './News'
import { connect } from 'react-redux'
import { compose } from 'redux'
import Preloader from './../common/preloader/Preloader'
import { getNews, setCurrentPage } from './../../redux/news-reducer'
import { setPopupData, togglePopupOpen } from './../../redux/popup-reducer'
import {
  getNewsState,
  getPageSize,
  getTotalNewsCount,
  getCurrentPage,
  getIsFetching,
  getFormData,
} from '../../redux/news-selector'

class NewsContainer extends React.Component {
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    this.props.getNews(this.props.formData, pageNumber, this.props.pageSize)
  }
  render() {
    return (
      <>
        {

          !this.props.isFetching
            ?
            <News
              news={this.props.news}
              pageSize={this.props.pageSize}
              onPageChanged={this.onPageChanged}
              totalBooksCount={this.props.totalBooksCount}
              currentPage={this.props.currentPage}
              isFetching={this.props.isFetching}

              isPopupOpen={this.props.isPopupOpen}
              togglePopupOpen={this.props.togglePopupOpen}
            />
            :
            <Preloader />
        }
      </>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    news: getNewsState(state),
    pageSize: getPageSize(state),
    totalBooksCount: getTotalNewsCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    formData: getFormData(state),

    isPopupOpen: state.popupPage.isPopupOpen,
    togglePopupOpen: togglePopupOpen,
  }
}

export default compose(
  connect(mapStateToProps, { getNews, setCurrentPage, setPopupData, togglePopupOpen }),
)(NewsContainer);