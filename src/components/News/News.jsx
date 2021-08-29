import Paginator from './../common/paginator/paginator'
import Preloader from './../common/preloader/Preloader'
import NewsItem from './NewsItem/NewsItem'
import s from './News.module.scss'

function Books({ news, onPageChanged, pageSize, totalBooksCount, currentPage, isFetching, isPopupOpen, togglePopupOpen }) {
  return (
    <div>
      <h2>Total books we found: {totalBooksCount}</h2>
      <div className={s.books__paginator}>
        <Paginator
          currentPage={currentPage}
          onPageChanged={onPageChanged}
          totalBooksCount={totalBooksCount}
          pageSize={pageSize} />
      </div>
      <div className={s.books__wrapper}>
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
            <span className={s.error}>Новости пропали(попробуйте снова)</span>
        }
      </div>
    </div>
  )
}

export default Books;