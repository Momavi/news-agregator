import SearchForm from './SearchForm/SearchForm'

import s from './Search.module.scss'

function Search(props) {
  return (
    <div className={s.search}>
      <div className={s.search__wrapper}>
        <h1 className={s.search__title}>Search news</h1>
        <SearchForm
          searchPage={props.searchPage}
          newsPage={props.newsPage}
          getNews={props.getNews}
          setFormData={props.setFormData}
        />
      </div>
      {
        props.newsPage.news[0] !== undefined
          ?
          <h3>Happy reading!</h3>
          :
          <h3>...The news are almost here, it remains button</h3>
      }
    </div>
  )
}

export default Search;