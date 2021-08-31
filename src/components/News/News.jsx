import Paginator from './../common/paginator/paginator'
import Preloader from './../common/preloader/Preloader'
import NewsItem from './NewsItem/NewsItem'
import s from './News.module.scss'

function News({ news, onPageChanged, pageSize, totalBooksCount, currentPage, isFetching, isPopupOpen, togglePopupOpen }) {
  return (
    <div>
      {totalBooksCount > 0
        ?
        <div>
          <h2 className={s.news__total}>Total news we found: {totalBooksCount}</h2>
          <div className={s.news__paginator}>
            <Paginator
              currentPage={currentPage}
              onPageChanged={onPageChanged}
              totalBooksCount={totalBooksCount}
              pageSize={pageSize} />
          </div>
        </div>
        :
        null
      }
      <div className={s.news__wrapper}>
        {isFetching
          ?
          <Preloader />
          :
          news !== undefined
            ?
            news.map((u, i) =>
              <NewsItem
                news={u}
                key={i}
                isPopupOpen={isPopupOpen}
                togglePopupOpen={togglePopupOpen}
              />
            )
            :
            <span className={s.error}>News is gone (try again)</span>
        }
      </div>
    </div>
  )
}

export default News;