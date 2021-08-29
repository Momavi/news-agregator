import s from './NewsItem.module.scss'

let NewsItem = ({ news, togglePopupOpen, isPopupOpen }) => {
  return (

    <div className={s.news__wrapper} onClick={() => { console.log(news) }}>
      <div className={s.news__inner}>
        <img className={s.news__image__img} src={
          news.urlToImage !== undefined
            ?
            news.urlToImage
            :
            null
        } alt="" />
        <div className={s.news__info}>
          <h3 className={s.news__title}>{news.title}</h3>
          <p className={s.news__publishedData}>{news.publishedAt}</p>
          <p className={s.news__title__description}>{news.description}</p>
          <div className={s.news__description}>
            {
              news.author !== null
                ?
                <div className={s.news__author}>
                  <span>Авторы: {news.author}</span>
                </div>
                :
                null
            }
            <div className={s.news__source}>
              <span>Источники: {news.source.name}</span>
            </div>
          </div>
        </div>
        <button onClick={() => { togglePopupOpen(news, !isPopupOpen) }} className={s.news__btn}>Show more</button>
      </div>
    </div >
  )
}

export default NewsItem;