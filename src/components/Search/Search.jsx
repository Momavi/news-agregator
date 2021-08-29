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
    </div>
  )
}

export default Search;