import s from './NewsItem.module.scss'

let NewsItem = ({ news, togglePopupOpen, isPopupOpen }) => {
  return (

    <div className={s.news__wrapper}>
      <div className={s.news__inner}>
        <img className={s.news__image} src={
          news.urlToImage
            ?
            news.urlToImage
            :
            null
        } alt="" />
        <div className={s.news__info}>
          <div className={s.news__description}>

            <h3 className={s.news__title}>{news.title}</h3>
            <p className={s.news__title__description}>{news.description}</p>
          </div>
        </div>
        <div className={s.news__bottom}>
          <button className={s.news__btn} onClick={() => { togglePopupOpen(news, !isPopupOpen) }} >Show more</button>
          {
            news.author
              ?
              <div className={s.news__author}>
                <span>Автор: {news.author}</span>
              </div>
              :
              null
          }
          <div className={s.news__source}>
            <span className={s.news__source__name}>Источник: {news.source.name}</span>
            <span className={s.news__source__publishedData}>{news.publishedAt}</span>
          </div>
        </div>

      </div>
    </div >
  )
}

export default NewsItem;